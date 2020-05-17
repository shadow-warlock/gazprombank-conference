import React, {Component} from "react";
import axios from "axios";
import {API_SESSION, SERVER_URL, TECH_SUPPORT_PHONE} from "../../../const/const";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import "./AuthForm.css";

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
        };
        this.changeCode = this.changeCode.bind(this);
        this.sendAuthFrom = this.sendAuthFrom.bind(this);
    }

    changeCode(e) {
        this.setState({
            code: e.target.value
        });
    }

    sendAuthFrom() {
        axios.post(SERVER_URL + API_SESSION, {code: this.state.code}, {withCredentials: true}).then(
            res => {
                this.props.setUser(res.data)
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div className={"auth_form"}>
                <p className={"form_header"}>Вход</p>
                <Input
                    value={this.state.code}
                    onChange={this.changeCode}
                    type={"number"}
                    placeholder={"Пароль"}/>
                <Button onClick={this.sendAuthFrom}>Войти</Button>
                <div className={"tech_support"}>
                    <p className={"font_size_less nowrap"}>Технические вопросы по подключению к трансляции</p>
                    <p className={"font_size_less"}>
                        Денис Лазаренко <a className={"white_link"}
                                           href={"tel:" + TECH_SUPPORT_PHONE}>{TECH_SUPPORT_PHONE}</a>
                    </p>
                </div>
            </div>
        );
    }
}
