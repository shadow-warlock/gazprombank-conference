import React, {Component, Fragment} from "react";
import {OpenVidu} from 'openvidu-browser';
import axios from 'axios';
import UserVideo from "./UserVideo/UserVideo";
import {API, AXIOS_CONFIG, SERVER} from "../../const/const";
import Button, {OFF} from "../Button/Button";
import "./RoomPage.css";
import Chat from "../ConferencePage/Chat/Chat";
import Websocket from "react-websocket";
import exit from "./../../assets/room_icons/exit.svg";
import {SPONSORS} from "../../const/mockData";
import StreamerName from "./StreamerName/StreamerName";
import { Icon, InlineIcon } from '@iconify/react';
import speakerSimpleHigh from '@iconify/icons-ph/speaker-simple-high';
import speakerSimpleXLight from '@iconify/icons-ph/speaker-simple-x-light';
import microphoneIcon from '@iconify/icons-ph/microphone';
import microphoneSlash from '@iconify/icons-ph/microphone-slash';
import videoCamera from '@iconify/icons-ph/video-camera';
import videoCameraSlash from '@iconify/icons-ph/video-camera-slash';
import {FormattedMessage} from "react-intl";

class RoomPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mySessionId: undefined,
            myUserName: this.props.user.name + " " + this.props.user.surname,
            session: undefined,
            mainStreamManager: undefined,
            publisher: undefined,
            audio: true,
            video: true,
            sound: true,
            subscribers: [],
            room: null
        };

        this.joinSession = this.joinSession.bind(this);
        this.leaveSession = this.leaveSession.bind(this);
        this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
        this.onbeforeunload = this.onbeforeunload.bind(this);
        this.reconnect = this.reconnect.bind(this);
    }


    loadRoom(id, handler){
        let self = this;
        axios.get(API.ROOM_ID(id), AXIOS_CONFIG).then(
            res => {
                self.setState({
                    room: res.data,
                    mySessionId: res.data.name
                }, handler ? handler : ()=>{});
            }
        ).catch(e => {
            if(e.response && e.response.status){
                switch (e.response.status){
                    case 404:
                        alert("Комната не найдена");
                        break;
                    case 403:
                        alert("Нет доступа");
                        break;
                    default:
                        alert("Не удалось получить доступ к комнате");
                }
                this.leaveSession();
            }
        });
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.onbeforeunload);
        this.loadRoom(this.props.room, ()=>{this.joinSession(); this.reconnect()});
    }

    reconnect(){
        this.socket = new WebSocket(SERVER.WS(this.state.room.chat.port) + "?chat=" + this.state.room.chat.id);
        this.socket.onmessage = (event)=>{this.handleData(event.data)};
        this.socket.onclose = this.reconnect;
        this.socket.onerror = this.reconnect;
        this.pongTime = Date.now();
        this.pingPongInterval = setInterval(()=>{
            this.socket.send("ping");
            setTimeout(()=>{
                if(Date.now() - this.pongTime > 2000){
                    this.socket.close();
                    clearInterval(this.pingPongInterval);
                    this.loadRoom(this.props.room);
                }
            }, 1000);
        }, 10000);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.onbeforeunload);
    }

    onbeforeunload(event) {
        this.leaveSession();
    }

    handleChangeSessionId(e) {
        this.setState({
            mySessionId: e.target.value,
        });
    }

    handleChangeUserName(e) {
        this.setState({
            myUserName: e.target.value,
        });
    }

    handleMainVideoStream(stream) {
        if (this.state.mainStreamManager !== stream) {
            this.setState({
                mainStreamManager: stream
            });
        }
    }

    deleteSubscriber(streamManager) {
        let subscribers = this.state.subscribers;
        let index = subscribers.indexOf(streamManager, 0);
        if (index > -1) {
            subscribers.splice(index, 1);
            this.setState({
                subscribers: subscribers,
            });
        }
    }

    joinSession() {
        this.OV = new OpenVidu();
        this.OV.enableProdMode();
        this.setState(
            {
                session: this.OV.initSession(),
            },
            () => {
                var mySession = this.state.session;
                mySession.on('streamCreated', (event) => {
                    var subscriber = mySession.subscribe(event.stream, undefined);
                    var subscribers = this.state.subscribers;
                    subscribers.push(subscriber);
                    this.setState({
                        subscribers: subscribers,
                    });
                });
                mySession.on('streamDestroyed', (event) => {
                    this.deleteSubscriber(event.stream.streamManager);
                });
                this.getToken(this.state.room.id).then((token) => {
                    mySession
                        .connect(
                            token,
                            { clientData: this.state.myUserName },
                        )
                        .then(() => {
                            let publisher = this.OV.initPublisher(undefined, {
                                audioSource: undefined, // The source of audio. If undefined default microphone
                                videoSource: undefined, // The source of video. If undefined default webcam
                                publishAudio: this.state.audio, // Whether you want to start publishing with your audio unmuted or not
                                publishVideo: this.state.video, // Whether you want to start publishing with your video enabled or not
                                resolution: '640x480', // The resolution of your video
                                frameRate: 30, // The frame rate of your video
                                insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
                                mirror: false, // Whether to mirror your local video or not
                            });
                            mySession.publish(publisher);
                            this.setState({
                                mainStreamManager: publisher,
                                publisher: publisher,
                            });
                        })
                        .catch((error) => {
                            console.log('There was an error connecting to the session:', error.code, error.message);
                        });
                });
            },
        );
    }


    leaveSession() {
        const mySession = this.state.session;

        if (mySession) {
            mySession.disconnect();
        }

        this.OV = null;
        this.setState({
            session: undefined,
            subscribers: [],
            mainStreamManager: undefined,
            publisher: undefined
        });
    }

    render() {
        const mySessionId = this.state.mySessionId;
        let sponsor = this.state.room ? SPONSORS.findObject("id", this.state.room.sponsor) : null;
        let {room, mainStreamManager, publisher} = this.state;


        return (
            sponsor && this.state.session !== undefined && this.state.publisher !== undefined
            ? <div className={"room"}>
                    <div className={"header bold uppercase"}>
                        <div className={"name"}>{ room.name }</div>
                        <a href={sponsor.id ? `/meeting/${sponsor.id}` : '/'}><img alt={"exit"} src={exit}/></a>
                    </div>
                    <div className={"body"}>
                        <div className={"chat-and-cameras"}>
                            <div className={"chat_container"}>
                                <Chat user={this.props.user} chat={room.chat}/>
                            </div>
                            <div className={"main-cameras"}>
                                <div className={"main-speaker"}>
                                    <div className={"video_container"}>
                                        <UserVideo streamManager={this.state.mainStreamManager} sound={this.state.sound} />
                                        <StreamerName streamer={mainStreamManager}/>
                                    </div>
                                </div>
                                <div className={"user"}>
                                    <div className={"video_container"}>
                                        <UserVideo
                                            onClick={() => this.handleMainVideoStream(this.state.publisher)}
                                            streamManager={this.state.publisher} sound={this.state.sound}/>

                                        <StreamerName streamer={publisher} publisher/>

                                        <div className={"icons"}>
                                            <Icon icon={this.state.sound ? speakerSimpleHigh : speakerSimpleXLight}
                                                  onClick={()=>{
                                                      this.setState({sound: !this.state.sound})}}/>

                                            <Icon icon={this.state.audio ? microphoneIcon : microphoneSlash}
                                                  onClick={()=>{
                                                      this.state.publisher.publishAudio(!this.state.audio);
                                                      this.setState({audio: !this.state.audio})}}/>

                                            <Icon icon={this.state.video ? videoCamera : videoCameraSlash}
                                                  onClick={()=>{
                                                      this.state.publisher.publishVideo(!this.state.video);
                                                      this.setState({video: !this.state.video})}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"speakers"}>
                            <div className={`video_container ${this.state.subscribers.length ? "" : "not-grid"}`}>
                                {
                                    this.state.subscribers.length
                                        ? this.state.subscribers.map((sub, i) => (
                                            <div className={"item"} key={i}>
                                                <UserVideo
                                                    onClick={() => this.handleMainVideoStream(sub)}
                                                    streamManager={sub} sound={this.state.sound}/>
                                                <StreamerName streamer={sub}/>
                                            </div>
                                        ))
                                        : <div className={"no-other-users bold"}><FormattedMessage id={"no_other_users"}/></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            : "Loading..."
        );
    }

    handleData(json) {
        let data = JSON.parse(json);
        let room = Object.assign({}, this.state.room);
        let messageIndex;
        switch (data.type) {
            case "pong":
                this.pongTime = Date.now();
                break;
            case "message":
                room.chat.messages.unshift(data.data);
                break;
            case "delete message":
                room.chat.messages = room.chat.messages.filter((message) => {
                    return message.id !== data.data.messageId;
                });
                break;
            case "like":
                messageIndex = room.chat.messages.findIndex((message) => {
                    return message.id === data.data.message.id;
                });
                room.chat.messages[messageIndex].likes.push(data.data);
                break;
            case "delete like":
                messageIndex = room.chat.messages.findIndex((message) => {
                    return message.id === data.data.messageId;
                });
                room.chat.messages[messageIndex].likes = room.chat.messages[messageIndex].likes.filter((like) => {
                    return like.id !== data.data.likeId
                });
                break;
        }
        this.setState({
            room: room
        });
    }


    getToken(roomId) {
        return new Promise((resolve, reject) => {
            axios
                .post(API.ROOM_TOKEN(roomId), {}, AXIOS_CONFIG)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((e) => {
                    if(e.response && e.response.status){
                        switch (e.response.status){
                            case 400:
                                alert("Комната переполнена");
                                break;
                            default:
                                alert("Не удалось получить доступ к комнате");
                        }
                        this.leaveSession();
                    }
                });
        });
    }
}
export default RoomPage;