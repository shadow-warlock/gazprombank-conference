import React, {Component} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faTimes} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";
import "./MessageSender.css";


export default class MessageSender extends Component {

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
            let text = "Ответ для " + this.props.reply.user.name + " " + this.props.reply.user.surname;
            return (
                <>
                    {text} <FontAwesomeIcon onClick={()=>{this.props.deleteReply();}} className={"cancel_reply"} icon={faTimes}/>
                </>
            );
        } else {
            return (
                <>Напишите, пожалуйста, Ваш вопрос</>
            )
        }
    }

    render() {
        return (
            <div className={"send_message_container"}>
                <div>
                    {this.getReplyElement()}
                </div>
                <TextareaAutosize
                    maxRows={10}
                    className={"textarea"}
                    value={this.state.message}
                    onChange={(e) => {
                        this.setState({message: e.target.value});
                    }}
                    placeholder={"Введите сообщение"}/>
                <FontAwesomeIcon onClick={this.send.bind(this)} className={"send_button"} icon={faCommentDots}/>
            </div>
        );
    }
}
