import React from "react";
import Input from "../../../../Input/Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../Button/Button";

class Question extends React.Component {

    render() {
        return (
            <div className={"color_white"}>
                <div className={"form_container"}>
                    <p>Вопрос: </p>
                    <div>
                        <Input value={this.props.name} onChange={(e) => {
                            this.props.inputQuestion(this.props.index, e.target.value);
                        }}/>
                        <FontAwesomeIcon className={"remove_answer_button"} onClick={() => {
                            this.props.deleteQuestion(this.props.index);
                        }} icon={faTimesCircle}/>
                    </div>
                </div>
                <div className={"form_container pb_20"}>
                    <p>{this.props.question.variants ? "Варианты ответа: " : "Без вариантов ответа"}</p>
                    <div
                        className={"question_answers_container"}>{this.props.question.variants ? this.props.question.variants.map((variants, index) => {
                        return <div key={index} className={"not_use_this_please"}>
                            <Input
                                value={variants}
                                onChange={(e) => {

                                    this.props.inputVariant(this.props.index, index, e.target.value);
                                }}
                            />
                            <FontAwesomeIcon
                                onClick={() => {
                                    this.props.deleteVariant(this.props.index, index)
                                }}
                                className={"remove_answer_button"}
                                icon={faTimes}/>
                        </div>
                    }) : ""}
                        <Button
                            onClick={() => {
                                this.props.addVariant(this.props.index);
                            }}>
                            Добавить ответ
                        </Button></div>
                </div>
            </div>
        );
    }
}

export default Question;
