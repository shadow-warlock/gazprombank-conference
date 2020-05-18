import React, {Component} from "react";
import "./Poll.css";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";

export default class Poll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: ""
        };
    }

    send(){
        if(this.state.answer !== ""){
            axios.post(API.POLL_ANSWER(this.props.poll.id),
                {text: this.state.answer}, AXIOS_CONFIG).then(
                res => {
                    this.props.addAnswer(res.data);
                }
            ).catch(e => {
                console.error(e);
            });
        }
    }

    getVariants() {

        if (this.props.poll.variants) {
            return this.props.poll.variants.map((variant) =>
                <Button
                    onClick={()=>{
                        this.setState({answer: variant}, this.send.bind(this));
                    }}>
                    {variant}
                </Button>
            );
        } else {
            return (
                <>
                    <Input
                        onChange={(e)=>{this.setState({answer: e.target.value})}}
                        value={this.state.answer}
                        placeholder={"Ваш ответ"}/>
                    <Button onClick={this.send.bind(this)}>Ответить</Button>
                </>
            )
        }
    }

    render() {
        console.log(this.props.poll.answers);

        let myAnswer = this.props.poll.answers.find((answer)=>{
            return answer.user.id === this.props.user.id;
        });
        return (
            <div className={"poll"}>
                {myAnswer && "jopa"}
                <p className={"color_white font_size_very_big uppercase"}>Опрос</p>
                <p className={"color_pink font_size_big uppercase bold"}>{this.props.poll.question}</p>
                <div className={"variants"}>
                    {this.getVariants()}
                </div>
            </div>
        );
    }
}
