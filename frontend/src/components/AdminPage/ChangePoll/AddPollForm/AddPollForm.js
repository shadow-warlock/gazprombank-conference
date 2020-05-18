import React, {Component} from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";

const buttonText = [
    "Новый опрос",
    "Скрыть форм"
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

    render() {
        return (
            <>
                <Button onClick={()=>{this.setState({isOpen: !this.state.isOpen})}}>
                    {buttonText[this.state.isOpen ? 1 : 0]}
                </Button>
                {this.state.isOpen &&
                    <div style={{background: "red"}}>
                        <p>Вопрос: <Input
                            value={this.state.question}
                            onChange={(e)=>{this.setState({question: e.target.value})}}
                        /></p>
                        {this.state.answers.length > 0 ? "Варианты ответа: " : "Без вариантов ответа"}
                        {this.state.answers.map((answer, index) => {
                            return <Input
                                value={answer}
                                onChange={(e)=>{
                                    let answers = [...this.state.answers];
                                    answers[index] = e.target.value;
                                    this.setState({answers: answers})
                                }}
                            />
                        })}
                        <Button
                            onClick={()=>{
                                let answers = [...this.state.answers];
                                answers.push("");
                                this.setState({answers: answers})
                            }}>
                            Добавить ответ
                        </Button>
                    </div>
                }
            </>
        );
    }
}
