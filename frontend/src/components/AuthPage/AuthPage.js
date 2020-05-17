import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import {TECH_SUPPORT_PHONE} from "../../const/const";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import bank from "./../../assets/bank.png";

export default class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_white"}>
                <div className={"form_container"}>
                    <div className={"left_container"}>
                        <p>Онлайн семинар:</p>
                        <p className={"font_size_very_big uppercase nowrap"}>Банковское сопровождение контактов</p>
                        <p className={"font_size_big color_pink uppercase"}>21 мая 2020 года</p>
                        <AuthForm setUser={this.props.setUser}/>
                    </div>
                    <div className={"bank_container"}>
                        <img src={bank} alt={"bank"}/>
                    </div>
                </div>
                <div className={"logo_right"}>
                    <Logo/>
                </div>
            </div>
        );
    }
}
