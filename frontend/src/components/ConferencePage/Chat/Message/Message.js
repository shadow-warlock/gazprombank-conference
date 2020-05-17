import React, {Component} from "react";
import "./Message.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';

export default class Message extends Component {
    render() {
        return (
            <div className={"message"}>
                <div>
                    <p className={"uppercase bold color_violet name"}>{this.props.message.user.name} {this.props.message.user.surname}</p>
                    <p className={"text"}>{this.props.message.text}</p>
                </div>
                <div>
                    <p className={"nowrap"}>
                        <FontAwesomeIcon className={"like_button"} icon={faHeart}/> {this.props.message.likes.length}
                    </p>
                    <Moment className={"nowrap color_pink"} fromNow ago date={this.props.message.time} locale={"ru"}/>
                </div>
            </div>
        );
    }
}
