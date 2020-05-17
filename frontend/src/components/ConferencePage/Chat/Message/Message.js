import React, {Component} from "react";

export default class Message extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message.user.name} {this.props.message.user.surname}</p>
                <p>{this.props.message.text}</p>
                <p>{this.props.message.likes.length}</p>
            </div>
        );
    }
}
