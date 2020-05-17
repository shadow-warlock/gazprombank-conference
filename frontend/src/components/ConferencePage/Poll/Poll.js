import React, {Component} from "react";
import "./Poll.css";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

export default class Poll extends Component {

    getVariants() {
        if (this.props.poll.variants) {
            return this.props.poll.variants.map((variant) => <Button>{variant}</Button>);
        } else {
            return (
                <>
                    <Input placeholder={"Ваш ответ"}/>
                    <Button>Ответить</Button>
                </>
            )
        }
    }

    render() {
        return (
            <div className={"poll"}>
                <p className={"color_white font_size_very_big uppercase"}>Опрос</p>
                <p className={"color_pink font_size_big uppercase bold"}>{this.props.poll.question}</p>
                <div className={"variants"}>
                    {this.getVariants()}
                </div>
            </div>
        );
    }
}
