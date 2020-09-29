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

class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_page color_white"}>
                <div className={"header"}>
                    <div className={"logo_right"}>
                        <Logo/>
                    </div>
                    <div><ChangeLocaleButton/></div>
                </div>
                <div className={"auth_page_container"}>
                    <div className={"left_container"}>
                        <img src={planeAndTransport} alt={"plane and transport"}/>
                    </div>
                    <div>
                        <div className={"text_right"}>
                            <div className={"text_right"}>
                                <p className={"bold font_size_big uppercase"}>
                                    <FormattedMessage id={"conference"}/>
                                </p>
                                <p className={"bold font_size_big uppercase color_white"}>
                                    <FormattedMessage id={"conference_theme"}/>
                                    <div><FormattedMessage id={"conference_theme2"}/></div>
                                </p>
                                <br/>
                                <p className={"bold font_size_big uppercase color_white"}>
                                    <FormattedMessage id={"prize"}/>
                                </p>
                                <br/>
                                <p className={"bold"}>
                                    <Moment className={"upper"} format={this.props.intl.formatMessage({id:"date_format"})} date={conferenceDate}/>{", "}
                                    {conferenceTime} (GMT+3, <FormattedMessage id={"moscow"}/>)
                                </p>
                            </div>
                            <AuthForm setUser={this.props.setUser}/>
                        </div>
                    </div>
                </div>
                <TechSupport role={false} use={USE.AUTH}/>
            </div>
        );
    }
}
export default injectIntl(AuthPage);