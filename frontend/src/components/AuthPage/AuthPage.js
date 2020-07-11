import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import femida from "./../../assets/femida.png";

export default class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_white"}>
                <div className={"auth_page_container"}>
                    <div className={"left_container"}>
                        <p className={"bold font_size_big uppercase"}>Онлайн-конференция</p>
                        <br/>
                        <p className={"font_size_very_big uppercase nowrap bold color_white"}>
                            Перезапуск воздушного транспорта
                        </p>
                        <p className={"font_size_very_big bold uppercase"}>16 июля 2020 года</p>
                        <p className={"bold uppercase"}>11:00 - 16:00 (GMT+3, Москва)</p>
                        <AuthForm setUser={this.props.setUser}/>
                    </div>
                </div>
                <div className={"logo_right"}>
                    <Logo/>
                </div>
            </div>
        );
    }
}
