import React, {Component} from "react";
import ConferenceProgram from "./ConferenceProgram/ConferenceProgram";
import Broadcast from "./Broadcast/Broadcast";
import Chat from "./Chat/Chat";
import Poll from "./Poll/Poll";
import Logo from "../Logo/Logo";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../const/const";
import Websocket from "react-websocket";

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
        if(this.state.conference === null)
            return "Loading";
        return (
            <div>
                <div>
                    <ConferenceProgram/>
                </div>
                <div>
                    <Broadcast url={this.state.conference.url}/>
                    <Chat chat={this.state.conference.chat}/>
                </div>
                <div>
                    <Poll poll={this.state.conference.poll}/>
                </div>
                <div><Logo/></div>
                <Websocket url='ws://localhost:2346'
                           onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }

    handleData(json){
        let data = JSON.parse(json);
        let conf  = Object.assign({}, this.state.conference);
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
