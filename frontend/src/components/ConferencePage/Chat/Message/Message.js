import React, {Component} from "react";
import "./Message.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";

export default class Message extends Component {

    likeClick(myLike){
        myLike ? this.unlike() : this.like();
    }

    like(){
        axios.post(API.MESSAGE_LIKE(this.props.message.id),
            {}, AXIOS_CONFIG).catch(e => {
            console.error(e);
        });
    }

    unlike(){
        axios.delete(API.MESSAGE_LIKE(this.props.message.id), AXIOS_CONFIG).catch(e => {
            console.error(e);
        });
    }

    render() {
        let myLike = this.props.message.likes.find((like)=>{
            return like.user.id === this.props.user.id;
        });
        let message = this.props.message;
        let replyTo = message.replyTo;
        return (
            <div className={"message_container"}>
                <div className={"message"}>
                    <div>
                        <p className={"uppercase bold color_violet name"}>{message.user.name} {message.user.surname}</p>
                        <p className={"text"}>{(replyTo ? replyTo.user.name + ", " : "") + message.text}</p>
                    </div>
                    <div>
                        <p className={"nowrap text_right"}>
                            {this.props.message.likes.length}
                            <FontAwesomeIcon onClick={()=>{this.likeClick.bind(this)(myLike);}}
                                             className={"like_button " + (myLike && "color_pink")}
                                             icon={faHeart}/>
                        </p>
                    </div>
                </div>
                <div className={"padding_right reply_and_time"}>
                    <p  onClick={()=>{this.props.onReply(this.props.message)}}
                        className={"reply_button"}>
                        Ответить
                    </p>
                    <Moment className={"nowrap color_pink"} fromNow ago date={this.props.message.time} locale={"ru"}/>
                </div>
            </div>
        );
    }
}
