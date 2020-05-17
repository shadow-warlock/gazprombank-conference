import React, {Component} from "react";
import Message from "./Message/Message";
import "./Chat.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'

export default class Chat extends Component {

    render() {
        return (
            <div className={"chat"}>
                <p className={"bold font_size_big text_center"}>Чат</p>
                <div className={"send_message_container"}>
                    <div className={"textarea"} contentEditable={true} placeholder={"Введите сообщение"}/>
                    <FontAwesomeIcon className={"send_button"} icon={faCommentDots}/>
                </div>
                <div className={"messages"}>
                    {this.props.chat.messages.map((message) => <Message key={message.id} message={message}/>)}
                </div>
            </div>
        );
    }
}
