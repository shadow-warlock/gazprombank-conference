import React, {Component} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
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

    send(){
        if(this.state.message !== ""){
            axios.post(API.CHAT_MESSAGE(this.props.chatId),
                {text: this.state.message}, AXIOS_CONFIG).then(
                res => {
                    this.setState({message: ""});
                }
            ).catch(e => {
                console.error(e);
            });
        }
    }

    render() {
        return (
            <div className={"send_message_container"}>
                <TextareaAutosize
                    maxRows={10}
                    className={"textarea"}
                    value={this.state.message}
                    onChange={(e)=>{this.setState({message:e.target.value});}}
                    placeholder={"Введите сообщение"}/>
                <FontAwesomeIcon onClick={this.send.bind(this)} className={"send_button"} icon={faCommentDots}/>
            </div>
        );
    }
}
