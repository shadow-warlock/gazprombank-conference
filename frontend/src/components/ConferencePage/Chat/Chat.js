import React, {Component} from "react";
import Message from "./Message/Message";
import "./Chat.css";

export default class Chat extends Component {

    render() {
        return (
            <div className={"chat"}>
                {this.props.chat.messages.map((message) => <Message key={message.id} message={message}/>)}
            </div>
        );
    }
}
