import React, {Component} from "react";

export default class Message extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message.user.name} {this.props.message.user.name}</p>
                <p>{this.props.message.text}</p>
            </div>
        );
    }
}
