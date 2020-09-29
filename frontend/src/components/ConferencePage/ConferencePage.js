import React, {Component} from "react";
import Broadcast from "./Broadcast/Broadcast";
import Chat from "./Chat/Chat";
import Poll from "./Poll/Poll";
import Logo from "../Logo/Logo";
import axios from "axios";
import {API, AXIOS_CONFIG, SERVER} from "../../const/const";
import Websocket from "react-websocket";
import "./ConferencePage.css";
import Footer from "./Footer/Footer";
import Timer from "../../Utils/Timer";
import ChangeLocaleButton from "../ChangeLocaleButton/ChangeLocaleButton";
import {FormattedMessage} from "react-intl";
import {conferenceTime} from "../../const/mockData";
import {LanguageContext} from "../App";
import Button from "../Button/Button";
import planeAndTransport from "../../assets/plane_and_transport.png";

export default class ConferencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: null
        }
        this.timer = new Timer();
    }

    componentDidMount() {
        let self = this;
        axios.get(API.CONFERENCE, AXIOS_CONFIG).then(
            res => {
                this.messagesSort(res.data.chat.messages);
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
                <div className={"top_container"}>
                    <div className={"conference_title padding_side"}>
                        <div><Logo/></div>
                        <div><ChangeLocaleButton/></div>
                    </div>
                    <div className={"padding_side color_white conference_theme"}>
                        <div>
                            <img src={planeAndTransport} alt={"plane and transport"}/>
                        </div>
                        <div className={"text_right"}>
                            <div className={"uppercase font_size_very_big bold"}>
                                <p><FormattedMessage id={"online_conferences"}/></p>
                                <p><FormattedMessage id={"the_ato_events"}/></p>
                            </div>
                            <br/>
                            <div className={"materials_and_time"}>
                                <div className={"uppercase"}>
                                    <div>
                                        {conferenceTime} (<FormattedMessage id={"moscow"}/>, GMT+3)
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <Button onClick={() => {
                                        window.open("https://drive.google.com/drive/folders/1SxokJ-TRGjgeNlIQFl9wYpJzuHGkK8Sx", '_blank');
                                    }}>
                                        <FormattedMessage id={"agenda"}/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"broadcast_chat_container"}>
                    <div className={"text_center"}>
                        <Broadcast url={this.state.conference.url}/>
                    </div>
                    <div><Chat user={this.props.user} chat={this.state.conference.chat}/></div>
                </div>
                <div className={"padding_side"}>
                    {this.state.conference.poll &&
                    <Poll timer={this.timer} user={this.props.user} addAnswer={this.addAnswer.bind(this)}
                          poll={this.state.conference.poll}/>}
                </div>
                <Footer/>
                <Websocket url={SERVER.WS(this.state.conference.chat.port)}
                           onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }

    addAnswer(answer) {
        let conf = Object.assign({}, this.state.conference);
        for (let id in conf.poll.questions) {
            if (conf.poll.questions[id].id === answer.question.id) {
                conf.poll.questions[id].answers.push(answer);
            }
        }
        this.setState({
            conference: conf
        })
    }

    messagesSort(messages) {
        messages.sort((a, b) => {
            return a.time > b.time ? -1 : 1;
        });
    }

    handleData(json) {
        let data = JSON.parse(json);
        let conf = Object.assign({}, this.state.conference);
        let messageIndex;
        switch (data.type) {
            case "message":
                conf.chat.messages.unshift(data.data);
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
                console.log(data.data);
                if (this.state.conference.poll) {
                    this.timer.start(() => {
                            this.setState({conference: conf});
                        },
                        15);
                } else {
                    this.setState({conference: conf});
                }
                return;
            default:
                console.log(data);
        }
        this.setState({
            conference: conf
        });
    }
}
