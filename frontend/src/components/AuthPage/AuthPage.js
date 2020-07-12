import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import ChangeLocaleButton from "../ChangeLocaleButton/ChangeLocaleButton";
import {FormattedDate, FormattedMessage} from "react-intl";

export default class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_white"}>
                <div className={"auth_page_container"}>
                    <div className={"left_container"}>
                        <p className={"bold font_size_big uppercase"}>
                            <FormattedMessage id={"conference"}/>
                        </p>
                        <br/>
                        <p className={"font_size_very_big uppercase nowrap bold color_white"}>
                            <FormattedMessage id={"restart"}/>
                            <FormattedMessage id={"air_transport"}/>
                        </p>
                        <p className={"font_size_very_big bold uppercase"}>
                            <FormattedDate
                                value={new Date(1594926995000)}
                                year="numeric"
                                month="long"
                                day="2-digit"/>
                        </p>
                        <p className={"bold uppercase"}>11:00 - 16:00 (GMT+3,
                            <FormattedMessage id={"moscow"}/>
                        )</p>
                        <AuthForm setUser={this.props.setUser}/>
                    </div>
                    <div>
                        <ChangeLocaleButton/>
                    </div>
                </div>
                <div className={"logo_right"}>
                    <Logo/>
                </div>
            </div>
        );
    }
}
