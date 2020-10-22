import React, {Component} from "react";
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import UserVideo from "./UserVideo/UserVideo";
import {API, AXIOS_CONFIG} from "../../const/const";
import Button from "../Button/Button";
import "./RoomPage.css";

class RoomPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mySessionId: undefined,
            myUserName: this.props.user.name + " " + this.props.user.surname,
            session: undefined,
            mainStreamManager: undefined,
            subscribers: [],
            room: null
        };

        this.joinSession = this.joinSession.bind(this);
        this.leaveSession = this.leaveSession.bind(this);
        this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
        this.onbeforeunload = this.onbeforeunload.bind(this);
    }

    loadRoom(id){
        let self = this;
        axios.get(API.ROOM_ID(id), AXIOS_CONFIG).then(
            res => {
                self.setState({
                    room: res.data,
                    mySessionId: res.data.name
                });
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
            }
        });
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.onbeforeunload);
        this.loadRoom(this.props.room);
        // this.joinSession();
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
                                publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                                publishVideo: true, // Whether you want to start publishing with your video enabled or not
                                resolution: '640x480', // The resolution of your video
                                frameRate: 30, // The frame rate of your video
                                insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
                                mirror: false, // Whether to mirror your local video or not
                            });
                            mySession.publish(publisher);
                            this.setState({
                                mainStreamManager: publisher,
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
        });
    }

    render() {
        const mySessionId = this.state.mySessionId;

        return (
            <div className="container">
                {this.state.session === undefined ? (
                        <div id="session-header">
                            <h1 id="session-title">{mySessionId}{this.state.room === null ? " Загрузка..." : <Button onClick={this.joinSession}>Войти</Button>}</h1>
                        </div>

                ) : null}

                {this.state.session !== undefined ? (
                    <div id="session">
                        <div id="session-header">
                            <h1 id="session-title">{mySessionId}<Button onClick={this.leaveSession}>Выйти</Button></h1>
                        </div>
                        <div className={"content"}>
                            {this.state.mainStreamManager !== undefined ? (
                                <div id="main-video" className="col-md-6">
                                    <UserVideo streamManager={this.state.mainStreamManager} />
                                </div>
                            ) : null}
                            <div id="video-container" className="col-md-6">
                                {this.state.subscribers.map((sub, i) => (
                                    <div key={i} className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                        <UserVideo streamManager={sub} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }


    getToken(roomId) {
        return new Promise((resolve, reject) => {
            axios
                .post(API.ROOM_TOKEN(roomId), {}, AXIOS_CONFIG)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => reject(error));
        });
    }
}
export default RoomPage;