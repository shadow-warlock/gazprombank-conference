import React, {Component} from "react";
import "./Message.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faLike} from '@fortawesome/free-solid-svg-icons'

export default class Message extends Component {
    render() {
        return (
            <div className={"message"}>
                <div>
                    <p>{this.props.message.user.name} {this.props.message.user.surname}</p>
                    <p>{this.props.message.text}</p>
                </div>
                <p>{this.props.message.likes.length}</p>
            </div>
        );
    }
}
