import React, {Component} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faTimes} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";
import "./MessageSender.css";
import {FormattedMessage, injectIntl} from "react-intl";
import { Icon, InlineIcon } from '@iconify/react';
import roundSend from '@iconify/icons-ic/round-send';


class MessageSender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    send() {
        if (this.state.message !== "") {
            let data = {text: this.state.message};
            if(this.props.reply)
                data.replyTo = this.props.reply.id;
            axios.post(API.CHAT_MESSAGE(this.props.chatId),
                data, AXIOS_CONFIG).then(
                res => {
                    this.setState({message: ""});
                    this.props.deleteReply();
                }
            ).catch(e => {
                console.error(e);
            });
        }
    }

    getReplyElement() {
        if (this.props.reply) {
            let text = this.props.intl.formatMessage({id:"reply_to"}) + this.props.reply.user.name + " " + this.props.reply.user.surname;
            return (
                <>
                    {text} <FontAwesomeIcon onClick={()=>{this.props.deleteReply();}} className={"cancel_reply"} icon={faTimes}/>
                </>
            );
        } else {
            return (
                <FormattedMessage id={"your_question"}/>
            )
        }
    }

    render() {
        return (
            <div className={"send_message_container"}>
                <div className={"message_sender_header"}>
                    {this.getReplyElement()}
                </div>
                <div className={"chat-input"}>
                    <TextareaAutosize
                        maxRows={10}
                        className={"textarea"}
                        value={this.state.message}
                        onChange={(e) => {
                            this.setState({message: e.target.value});
                        }}
                        placeholder={this.props.intl.formatMessage({id:"input_message"})}/>
                    <Icon icon={roundSend} onClick={this.send.bind(this)} className={"send_button"} />
                    {/*<FontAwesomeIcon onClick={this.send.bind(this)} className={"send_button"} icon={faCommentDots}/>*/}
                </div>
            </div>
        );
    }
}
export default injectIntl(MessageSender);