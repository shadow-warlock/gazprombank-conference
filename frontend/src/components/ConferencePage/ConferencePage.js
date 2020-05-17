import React, {Component} from "react";
import ConferenceProgram from "./ConferenceProgram/ConferenceProgram";
import Broadcast from "./Broadcast/Broadcast";
import Chat from "./Chat/Chat";
import Poll from "./Poll/Poll";
import Logo from "../Logo/Logo";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../const/const";
import Websocket from "react-websocket";
import "./ConferencePage.css";
import {CONFERENCE_ITEMS} from "../../const/mockData";

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
                <div className={"conference_title"}>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                        <div>Банковское сопровождение контактов</div>
                        <div>Часовой пояс: Москва, Россия (UTC+3)</div>
                    </div>
                </div>
                <div>
                    <ConferenceProgram items={CONFERENCE_ITEMS}/>
                </div>
                <div className={"broadcast_chat_container"}>
                    <Broadcast url={this.state.conference.url}/>
                    <Chat chat={this.state.conference.chat}/>
                </div>
                <div>
                    {this.state.conference.poll && <Poll poll={this.state.conference.poll}/>}
                </div>
                <div><Logo/></div>
                <Websocket url='ws://localhost:2346'
                           onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }

    handleData(json) {
        let data = JSON.parse(json);
        let conf = Object.assign({}, this.state.conference);
        switch (data.type) {
            case "message":
                conf.chat.messages.push(data.data);
                break;
        }
        this.setState({
            conference: conf
        });
    }
}
