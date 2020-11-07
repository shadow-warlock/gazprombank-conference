import React, {Component} from "react";
import "./Message.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import axios from "axios";
import {API, AXIOS_CONFIG, ROLE} from "../../../../const/const";
import {FormattedMessage, injectIntl} from "react-intl";

class Message extends Component {

    constructor(props) {
        super(props);
        this.scrollToMessage = this.scrollToMessage.bind(this);
        this.removeMessage = this.removeMessage.bind(this);
    }

    likeClick(myLike) {
        myLike ? this.unlike() : this.like();
    }

    like() {
        axios.post(API.MESSAGE_LIKE(this.props.message.id),
            {}, AXIOS_CONFIG).catch(e => {
            console.error(e);
        });
    }

    unlike() {
        axios.delete(API.MESSAGE_LIKE(this.props.message.id), AXIOS_CONFIG).catch(e => {
            console.error(e);
        });
    }

    getReplyToElement() {
        let replyTo = this.props.message.replyTo;
        if (replyTo) {
            return (
                <span className={"reply_to"} onClick={this.scrollToMessage}>{replyTo.user.name + ", "}</span>
            );
        } else {
            return "";
        }
    }

    scrollToMessage() {
        let msgContainerSelector = "#msg_" + this.props.message.replyTo.id;
        let message = document.querySelector(msgContainerSelector);
        message.scrollIntoView();
        // document.querySelector(".messages").scrollTop = message.offsetTop;
    }

    removeMessage() {
        if (window.confirm(this.props.intl.formatMessage({id:"delete_confirm"}))) {
            axios.delete(API.MESSAGE(this.props.message.id), AXIOS_CONFIG).catch(e => console.log(e));
        }
    }

    render() {
        let myLike = this.props.message.likes.find((like) => {
            return like.user.id === this.props.user.id;
        });
        let message = this.props.message;
        return (
            <div className={"message_container"} id={"msg_" + this.props.message.id}>
                <div className={"message"}>
                    <div>
                        <p className={"uppercase bold"}>{message.user.name} {message.user.surname}</p>
                        <p className={"text"}>{this.getReplyToElement()} {message.text}</p>
                    </div>
                    <div>
                        <p className={"nowrap text_right"}>
                            {this.props.message.likes.length}
                            <FontAwesomeIcon onClick={() => {
                                this.likeClick.bind(this)(myLike);
                            }}
                                             className={"like_button " + (myLike && "color_red")}
                                             icon={faHeart}/>
                        </p>
                    </div>
                </div>
                <div className={"padding_right reply_and_time"}>
                    <p onClick={() => {
                        this.props.onReply(this.props.message)
                    }} className={"reply_button"}>
                        <FormattedMessage id={"reply"}/>
                    </p>
                    {this.props.user.role === ROLE.ADMIN &&
                    <p onClick={this.removeMessage} className={"reply_button"}>
                        <FormattedMessage id={"delete"}/>
                    </p>}
                    <Moment className={"nowrap"} fromNow ago date={this.props.message.time}/>
                </div>
            </div>
        );
    }
}

export default injectIntl(Message)
