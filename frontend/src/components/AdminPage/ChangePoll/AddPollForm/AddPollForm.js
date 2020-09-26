import React, {Component} from "react";
import Button from "../../../Button/Button";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";
import Question from "./Question/Question";
import Input from "../../../Input/Input";

const buttonText = [
    "Новый опрос",
    "Отмена"
];

export default class AddPollForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: "",
            questions: [{question: "", variants: []}],
        };
        this.addVariant = this.addVariant.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.deleteVariant = this.deleteVariant.bind(this);
        this.inputVariant = this.inputVariant.bind(this);
        this.inputQuestion = this.inputQuestion.bind(this);
        this.inputName = this.inputName.bind(this);
        this.save = this.save.bind(this);
    }

    inputName(nameText) {
        this.setState({name: nameText});
    }

    deleteVariant(keyQuestion, keyVariants) {
        let questions = [...this.state.questions];
        let variants = questions[keyQuestion].variants;
        variants.splice(keyVariants, 1);
        this.setState({questions: questions});
    }

    addVariant(key) {
        let questions = [...this.state.questions];
        let variants = questions[key].variants;
        variants.push("");
        this.setState({questions: questions});
    }

    addQuestion() {
        let questions = [...this.state.questions];
        questions.push({question: "", variants: []});
        this.setState({questions: questions});
    }

    deleteQuestion(key) {
        let questions = [...this.state.questions];
        questions.splice(key, 1);
        this.setState({questions: questions});

    }

    inputQuestion(key, questionText) {
        let questions = [...this.state.questions];
        questions[key].question = questionText;
        this.setState({questions: questions});
    }

    inputVariant(keyQuestion, keyVariants, variantText) {
        let questions = [...this.state.questions];
        questions[keyQuestion].variants[keyVariants] = variantText;
        this.setState({questions: questions});

    }

    save() {
        let data = JSON.parse(JSON.stringify(this.state));
        for (let i = 0; i < data.questions.length; i++) {
            if (data.questions[i].variants.length === 0) {
                data.questions[i].variants = null;
            }
        }

        axios.post(API.POLL, data, AXIOS_CONFIG).then(res => {
            this.props.reload();
            this.setState({
                name: "",
                questions: [{question: "", variants: []}],
                isOpen: false,
            })
        }).catch(e => {
            console.log(e);
        });
    }

//
    render() {
        return (
            <div className={"color_white"}>
                <div className={"pb_20"}>
                    <Button onClick={() => {
                        this.setState({isOpen: !this.state.isOpen})
                    }}>
                        {buttonText[this.state.isOpen ? 1 : 0]}
                    </Button>
                </div>
                {this.state.isOpen &&
                <div>
                    <div className={"form_container pb_20"}>
                        <p>Название опроса:</p>
                        <Input value={this.state.name} onChange={(e) => {
                            this.setState({name: e.target.value});
                        }}/>
                    </div>
                    {this.state.questions.map(
                        (question, index) => <Question
                            key={index}
                            addVariant={this.addVariant}
                            deleteQuestion={this.deleteQuestion}
                            question={question}
                            index={index}
                            deleteVariant={this.deleteVariant}
                            inputVariant={this.inputVariant}
                            inputQuestion={this.inputQuestion}
                        />)}
                    <div className={"pb_20"}>
                        <Button onClick={this.addQuestion}>добавить вопрос</Button>
                        <br/>
                    </div>
                    <Button onClick={this.save}>сохранить опрос</Button>
                </div>
                }
            </div>
        );
    }
}
