import React, {Component} from "react";
import Message from "./Message/Message";

export default class Chat extends Component {

    render() {
        return (
            <div>{this.props.chat.messages.map((message) => <Message key={message.id} message={message}/>)}</div>
        );
    }
}
