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
            answer: "",
            time: null
        };
        props.timer.handleTick((time) => {
            this.setState({
                time: time
            })
        });
        this.send = this.send.bind(this);
        this.findActualQuestion = this.findActualQuestion.bind(this);
    }

    send(question) {
        if (this.state.answer !== "") {
            axios.post(API.QUESTION_ANSWER(question.id),
                {text: this.state.answer}, AXIOS_CONFIG).then(
                res => {
                    this.setState({answer: ""});
                    this.props.addAnswer(res.data);
                }
            ).catch(e => {
                console.error(e);
            });
        }
    }

    getVariants(question) {
        if (question.variants) {
            return question.variants.map((variant) =>
                <Button
                    key={variant}
                    onClick={() => {
                        this.setState({answer: variant}, () => this.send(question));
                    }}>
                    {variant}
                </Button>
            );
        } else {
            return (
                <>
                    <Input
                        onChange={(e) => {
                            this.setState({answer: e.target.value})
                        }}
                        value={this.state.answer}
                        placeholder={"Ваш ответ"}/>
                    <Button onClick={() => this.send(question)}>Ответить</Button>
                </>
            )
        }
    }

    getPoll() {
        let question = this.findActualQuestion(this.props.poll.questions);
        if (question === null) {
            return (<p className={"uppercase font_size_big color_pink"}>Спасибо за ответ!</p>)
        } else {
            return (<><p className={"color_pink font_size_big uppercase bold"}>
                {question.question}
            </p>
                <div className={"variants"}>
                    {this.getVariants(question)}
                </div>
            </>);
        }
    }

    findActualQuestion() {
        for (let key in this.props.poll.questions) {
            let question = this.props.poll.questions[key];
            let isMyAnswer = question.answers.find((answer) => answer.user.id === this.props.user.id);
            if (!isMyAnswer) {
                return question;
            }
        }
        return null;
    }

    render() {
        return (
            <div className={"poll"}>
                <p className={"color_white font_size_very_big uppercase"}>{this.props.poll.name}{this.state.time !== null &&
                <span className={"color_pink font_size_default"}>Закончится через {this.state.time}...</span>}</p>
                {this.getPoll()}
            </div>
        );
    }
}
