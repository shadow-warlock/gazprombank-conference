import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import device from "./../../assets/device.png";

export default class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_white"}>
                <div className={"auth_page_container"}>
                    <div className={"left_container"}>
                        <p className={"font_size_very_big uppercase nowrap bold"}>Интерактивная отчетность</p>
                        <p className={"bold nowrap"}>Обучающий семинар по работе с сервисом Банка ГПБ (АО)</p>
                        <br/>
                        <p className={"font_size_big color_white uppercase bold"}>28 мая 2020 года 14:00</p>
                        <AuthForm setUser={this.props.setUser}/>
                    </div>
                    <div className={"bank_container"}>
                        <img src={device} alt={"bank"}/>
                    </div>
                </div>
                <div className={"logo_right"}>
                    <Logo/>
                </div>
            </div>
        );
    }
}
