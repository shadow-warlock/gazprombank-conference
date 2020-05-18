import React, {Component} from "react";
import ConferenceProgram from "./ConferenceProgram/ConferenceProgram";
import Broadcast from "./Broadcast/Broadcast";
import Chat from "./Chat/Chat";
import Poll from "./Poll/Poll";
import Logo from "../Logo/Logo";
import axios from "axios";
import {API, AXIOS_CONFIG, SERVER} from "../../const/const";
import Websocket from "react-websocket";
import "./ConferencePage.css";
import {CONFERENCE_ITEMS} from "../../const/mockData";
import Footer from "./Footer/Footer";

export default class ConferencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: null
        }
    }

    componentDidMount() {
        let self = this;
        axios.get(API.CONFERENCE, AXIOS_CONFIG).then(
            res => {
                self.setState({
                    conference: res.data
                });
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        if (this.state.conference === null)
            return "Loading";
        return (
            <div className={"conference"}>
                <div className={"conference_title padding_side"}>
                    <div>
                        <Logo/>
                    </div>
                    <div className={"text_right"}>
                        <p className={"color_white font_size_very_big uppercase"}>Банковское сопровождение контактов</p>
                        <p className={"color_pink font_size_big uppercase"}>Часовой пояс: Москва, Россия (UTC+3)</p>
                    </div>
                </div>
                <div className={"padding_side"}>
                    <ConferenceProgram items={CONFERENCE_ITEMS}/>
                </div>
                <div className={"broadcast_chat_container padding_side"}>
                    <Broadcast url={this.state.conference.url}/>
                    <Chat chat={this.state.conference.chat}/>
                </div>
                <div className={"padding_side"}>
                    {this.state.conference.poll && <Poll poll={this.state.conference.poll}/>}
                </div>
                <div className={"padding_side"}>
                    <Footer/>
                </div>
                <Websocket url={SERVER.WS}
                           onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }

    handleData(json) {
        let data = JSON.parse(json);
        let conf = Object.assign({}, this.state.conference);
        let messageIndex;
        console.log(data);
        switch (data.type) {
            case "message":
                conf.chat.messages.push(data.data);
                break;
            case "delete message":
                conf.chat.messages = conf.chat.messages.filter((message) => {
                    return message.id !== data.data.messageId;
                });
                break;
            case "like":
                messageIndex = conf.chat.messages.findIndex((message) => {
                    return message.id === data.data.message.id;
                });
                conf.chat.messages[messageIndex].likes.push(data.data);
                break;
            case "delete like":
                messageIndex = conf.chat.messages.findIndex((message) => {
                    return message.id === data.data.messageId;
                });
                conf.chat.messages[messageIndex].likes = conf.chat.messages[messageIndex].likes.filter((like) => {
                    return like.id !== data.data.likeId
                });
                break;
            case "poll":
                conf.poll = data.data;
                break;
        }
        this.setState({
            conference: conf
        });
    }
}
