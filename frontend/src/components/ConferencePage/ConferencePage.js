import React, { Component } from 'react';
import Broadcast from './Broadcast/Broadcast';
import Chat from './Chat/Chat';
import Poll from './Poll/Poll';
import axios from 'axios';
import { API, AXIOS_CONFIG, SERVER } from '../../const/const';
import Websocket from 'react-websocket';
import './ConferencePage.css';
import Footer from './Footer/Footer';
import Timer from '../../Utils/Timer';
import { FormattedMessage } from 'react-intl';
import { agendaURL, conferenceTime } from '../../const/mockData';
import { LanguageContext } from '../App';
import Button from '../Button/Button';
import planeAndTransport from '../../assets/plane_and_transport.png';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';

export default class ConferencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: null,
        };
        this.timer = new Timer();
    }

    componentDidMount() {
        let self = this;
        axios
            .get(API.CONFERENCE, AXIOS_CONFIG)
            .then((res) => {
                this.messagesSort(res.data.chat.messages);
                self.setState({
                    conference: res.data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    }

    render() {
        if (this.state.conference === null) return 'Loading';
        return (
            <div className="conference">
                <Header />
                <section className="conference__top-section">
                    <div className="conference__content">
                        <div className="conference__image-side">
                            <img
                                className="plane-transport"
                                src={planeAndTransport}
                                alt={'plane and transport'}
                            />

                            <div className="left-triangles">
                                <span className="triangle left-triangles__item" />
                                <span className="triangle left-triangles__item" />
                            </div>
                        </div>
                        <div className="conference__info-side">
                            <h1 className="conference__title">
                                <FormattedMessage id={'online_conferences'} />
                            </h1>
                            <h1 className="conference__title">
                                <FormattedMessage id={'the_ato_events'} />
                            </h1>
                            <div className="conference__time">
                                {conferenceTime} (
                                <FormattedMessage id={'moscow'} />, GMT+3)
                            </div>
                            <div className="conference__btn">
                                <LanguageContext.Consumer>
                                    {(value) => (
                                        <Button
                                            onClick={() => {
                                                window.open(
                                                    value.lang === 'ru'
                                                        ? agendaURL.ru
                                                        : agendaURL.en,
                                                    '_blank'
                                                );
                                            }}
                                        >
                                            <FormattedMessage id={'agenda'} />
                                        </Button>
                                    )}
                                </LanguageContext.Consumer>
                            </div>

                            <div className="bottom-triangles">
                                <span className="small-triangle bottom-triangles__item" />
                                <span className="small-triangle bottom-triangles__item" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="conference__bottom-section">
                    <header>
                        <div className="conference__bottom-logo">
                            <Logo />
                        </div>
                    </header>
                    <div className="conference__bottom-body">
                        <div className="conference__broadcast-content">
                            <div className="conference__broadcast-wrapper">
                                <div className="conference__broadcast-block">
                                    <Broadcast
                                        url={this.state.conference.url}
                                    />
                                    <Chat
                                        user={this.props.user}
                                        chat={this.state.conference.chat}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={'padding_side'}>
                            {this.state.conference.poll && (
                                <Poll
                                    timer={this.timer}
                                    user={this.props.user}
                                    addAnswer={this.addAnswer.bind(this)}
                                    poll={this.state.conference.poll}
                                />
                            )}
                        </div>

                        <Footer />
                    </div>
                </section>

                <Websocket
                    url={SERVER.WS(this.state.conference.chat.port)}
                    onMessage={this.handleData.bind(this)}
                />
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
            conference: conf,
        });
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
            case 'message':
                conf.chat.messages.unshift(data.data);
                break;
            case 'delete message':
                conf.chat.messages = conf.chat.messages.filter((message) => {
                    return message.id !== data.data.messageId;
                });
                break;
            case 'like':
                messageIndex = conf.chat.messages.findIndex((message) => {
                    return message.id === data.data.message.id;
                });
                conf.chat.messages[messageIndex].likes.push(data.data);
                break;
            case 'delete like':
                messageIndex = conf.chat.messages.findIndex((message) => {
                    return message.id === data.data.messageId;
                });
                conf.chat.messages[messageIndex].likes = conf.chat.messages[
                    messageIndex
                ].likes.filter((like) => {
                    return like.id !== data.data.likeId;
                });
                break;
            case 'poll':
                conf.poll = data.data;
                console.log(data.data);
                if (this.state.conference.poll) {
                    this.timer.start(() => {
                        this.setState({ conference: conf });
                    }, 15);
                } else {
                    this.setState({ conference: conf });
                }
                return;
            default:
                console.log(data);
        }
        this.setState({
            conference: conf,
        });
    }
}
