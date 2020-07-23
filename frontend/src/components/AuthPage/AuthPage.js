import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import ChangeLocaleButton from "../ChangeLocaleButton/ChangeLocaleButton";
import {FormattedDate, FormattedMessage} from "react-intl";
import Moment from "react-moment";
import {conferenceDate, conferenceTime} from "../../const/mockData";
import car from "./../../assets/cordiant/car.png"

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
                            <FormattedMessage id={"cordiant"}/>
                            <FormattedMessage id={"optimization_tools"}/>
                        </p>
                        <p className={"font_size_very_big uppercase nowrap bold color_white"}>
                            <FormattedMessage id={"car_park"}/>
                        </p>
                        <p className={"font_size_very_big bold uppercase"}>
                            <Moment format="D MMM YYYY" date={conferenceDate}/>
                        </p>
                        <p className={"bold uppercase"}>
                            {conferenceTime} (GMT+3, <FormattedMessage id={"moscow"}/>)
                        </p>
                        <AuthForm setUser={this.props.setUser}/>
                    </div>
                    <div>
                        <ChangeLocaleButton/>
                    </div>
                </div>
                <div id={"car_image"}>
                    <img src={car}/>
                </div>
                <div className={"logo_right"}>
                    <Logo/>
                </div>
            </div>
        );
    }
}
