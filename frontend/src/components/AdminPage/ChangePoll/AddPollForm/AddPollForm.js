import React, {Component} from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";

const buttonText = [
    "Новый опрос",
    "Отмена"
];

export default class AddPollForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answers: [],
            isOpen: false
        };
    }

    save(){
        let data = {
            question: this.state.question,
            variants: this.state.answers.length > 0 ? this.state.answers : null
        };
        axios.post(API.POLL, data, AXIOS_CONFIG).then(res => {
            this.props.reload();
            this.setState({
                question: "",
                answers: []
            })
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <Button onClick={() => {
                    this.setState({isOpen: !this.state.isOpen})
                }}>
                    {buttonText[this.state.isOpen ? 1 : 0]}
                </Button>
                {this.state.isOpen &&
                <div>
                    <div className={"form_container"}>
                        <p className={"color_white"}>Вопрос: </p>
                        <Input value={this.state.question} onChange={(e) => {
                            this.setState({question: e.target.value})
                        }}/>
                    </div>
                    <div className={"form_container pb_20"}>
                        <p className={"color_white"}>{this.state.answers.length > 0 ? "Варианты ответа: " : "Без вариантов ответа"}</p>
                        <div className={"question_answers_container"}>{this.state.answers.map((answer, index) => {
                            return <div className={"not_use_this_please"}>
                                <Input
                                    value={answer}
                                    onChange={(e) => {
                                        let answers = [...this.state.answers];
                                        answers[index] = e.target.value;
                                        this.setState({answers: answers})
                                    }}
                                />
                                <FontAwesomeIcon className={"remove_answer_button"} icon={faTimes}/>
                            </div>
                        })}
                            <Button
                                onClick={() => {
                                    let answers = [...this.state.answers];
                                    answers.push("");
                                    this.setState({answers: answers})
                                }}>
                                Добавить ответ
                            </Button></div>
                    </div>
                    <Button onClick={this.save.bind(this)}>Сохранить</Button>
                </div>
                }
            </div>
        );
    }
}
