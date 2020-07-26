import React, {Component} from "react";
import Broadcast from "./Broadcast/Broadcast";
import Chat from "./Chat/Chat";
import Poll from "./Poll/Poll";
import axios from "axios";
import {API, AXIOS_CONFIG, SERVER} from "../../const/const";
import Websocket from "react-websocket";
import "./ConferencePage.css";
import Footer from "./Footer/Footer";
import Timer from "../../Utils/Timer";
import {FormattedMessage} from "react-intl";
import Moment from 'react-moment';
import {conferenceTime} from "../../const/mockData";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

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
                <div className={"conference_theme_container"}>
                    <div className={"conference_title padding_side"}>
                        <div><Logo alternativeColor={true}/></div>
                    </div>
                    <div className={"padding_side flex_right font_size_very_big color_white conference_theme"}>
                        <p className={"uppercase"}>
                            <FormattedMessage id={"free"}/> <FormattedMessage id={"conference"}/>
                        </p>
                        <p className={"uppercase"}>
                            <FormattedMessage id={"cordiant"}/>
                            <span className={"bold"}>
                            <FormattedMessage id={"optimization_tools"}/>
                            <br/>
                            <FormattedMessage id={"car_park"}/>
                        </span>
                        </p>
                        <div className={"materials_and_time"}>
                            <div>
                                <Button onClick={() => {
                                    window.open('https://drive.google.com/file/d/1mXzjSjhMXwhPxNjgabuFyz2YCD8dRm24/view', '_blank');
                                }}>
                                    <FormattedMessage id={"agenda"}/>
                                </Button>
                            </div>
                            <div className={"bold"}>
                                <div>
                                    <Moment format="D MMM YYYY" date={conferenceTime.date}/>
                                </div>
                                <div>
                                    {conferenceTime.time} ({conferenceTime.timezone}, <FormattedMessage
                                    id={conferenceTime.city}/>)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"broadcast_chat_container padding_side"}>
                    <Broadcast url={this.state.conference.url}/>
                    <Chat user={this.props.user} chat={this.state.conference.chat}/>
                </div>
                <div className={"padding_side"}>
                    {this.state.conference.poll &&
                    <Poll timer={this.timer} user={this.props.user} addAnswer={this.addAnswer.bind(this)}
                          poll={this.state.conference.poll}/>}
                </div>
                <Footer/>
                <Websocket url={SERVER.WS}
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
