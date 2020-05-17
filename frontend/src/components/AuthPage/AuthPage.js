import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import {TECH_SUPPORT_PHONE} from "../../const/const";
import Logo from "../Logo/Logo";

export default class AuthPage extends Component {
    render() {
        return (
            <div>
                <p>Онлайн семинар:</p>
                <p>Банковское сопровождение контактов</p>
                <p>21 мая 2020 года</p>
                <AuthForm setUser={this.props.setUser}/>
                <p>Технические вопросы по подключению к трансляции</p>
                <p>
                    Денис Лазаренко
                    <a href={"tel:" + TECH_SUPPORT_PHONE}>{TECH_SUPPORT_PHONE}</a>
                </p>
                <div>
                    <Logo/>
                </div>
            </div>
        );
    }
}
