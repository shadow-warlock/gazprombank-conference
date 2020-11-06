import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import ChangeLocaleButton from "../ChangeLocaleButton/ChangeLocaleButton";
import {FormattedMessage, injectIntl} from "react-intl";
import Moment from "react-moment";
import {conferenceDate, conferenceTime, USE} from "../../const/mockData";
import planeAndTransport from "../../assets/plane_and_transport.png";
import TechSupport from "../TechSupport/TechSupport";
import Sponsors from "./Sponsors";

class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_container"}>
                <Sponsors/>
                <div className={"auth_page color_white"}>
                    <div className={"info"}>
                        <div>
                            <div>
                                <p className={"bold conference-type"}>
                                    <FormattedMessage id={"conference"}/>
                                </p>
                                <p className={"bold uppercase conference-name"}>
                                    <FormattedMessage id={"conference_theme"}/>
                                </p>
                                <p className={"bold conference-time"}>
                                    <FormattedMessage id={"conference_time"}/>
                                </p>
                            </div>
                            <AuthForm setUser={this.props.setUser}/>
                        </div>
                        <TechSupport role={false} use={USE.AUTH}/>
                    </div>
                    <div className={"image"}>
                        <img src={planeAndTransport} alt={"plane and transport"}/>
                        <Logo/>
                    </div>
                </div>
            </div>
        );
    }
}
export default injectIntl(AuthPage);