import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import device from "./../../assets/device.png";

export default class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_blue"}>
                <div className={"auth_page_container"}>
                    <div className={"left_container"}>
                        <p className={"bold font_size_big"}>Конференция</p>
                        <br/>
                        <p className={"font_size_very_big uppercase nowrap bold color_blue"}>
                            <span className={"bg_blue color_white"}>
                                Актуальные вопросы и изменения
                            </span> законодательства<br/>
                            Российской Федерации в области валютного регулирования<br/>
                            и валютного контроля
                        </p>
                        <p className={"conference_time font_size_very_big bold uppercase"}>2 июня 2020 года</p>
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
