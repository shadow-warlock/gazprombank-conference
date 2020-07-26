import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import {FormattedMessage} from "react-intl";
import Moment from "react-moment";
import {conferenceTime} from "../../const/mockData";

export default class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_white"}>
                <div className={"auth_page_container"}>
                    <div className={"left_container"}>
                        <p className={"font_size_very_big uppercase"}>
                            <FormattedMessage id={"conference"}/>
                        </p>
                        <p className={"font_size_very_big uppercase nowrap color_white"}>
                            <FormattedMessage id={"cordiant"}/>
                            <span className={"bold"}><FormattedMessage id={"optimization_tools"}/></span>
                        </p>
                        <p className={"font_size_very_big uppercase nowrap bold color_white"}>
                            <FormattedMessage id={"car_park"}/>
                        </p>
                        <br/>
                        <p className={"font_size_big bold"}>
                            <Moment format="D MMM YYYY" date={conferenceTime.date}/>
                        </p>
                        <p className={"font_size_big bold"}>
                            {conferenceTime.time} ({conferenceTime.timezone}, <FormattedMessage
                            id={conferenceTime.city}/>)
                        </p>
                        <AuthForm setUser={this.props.setUser}/>
                    </div>
                    <div>
                        <div className={"logo_right"}>
                            <Logo alternativeColor={true}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
