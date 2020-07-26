import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";
import LogoutButton from "../../LogoutButton/LogoutButton";
import {FormattedMessage} from "react-intl";
import cordiant from "../../../assets/cordiant/Professional-banner-adaptive-3450x360.png";
import Partners from "./Partners/Partners";
import Logo from "../../Logo/Logo";

export default class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <img className={"banner"} src={cordiant} alt={"cordiant"}/>
                <Partners/>
                <div className={"padding_side"}>
                    <TechSupport/>
                    <Logo/>
                </div>
                <div className={"bottom_footer color_white bold"}>
                    <div>
                        © 2020, <span>
                        <FormattedMessage id={"cordiant_events"}/>
                    </span>
                    </div>
                    <div>
                        <a target={"_blank"} href={"https://www.facebook.com/ATOEvents?fref=ts"}>Facebook</a>
                        <a target={"_blank"} href={"https://www.youtube.com/user/eventsatoru"}>Youtube</a>
                        <a target={"_blank"}
                           href={"https://drive.google.com/file/d/1NIkpg7p6aCoaIuyqJ7-RbU928AxOt34R/view"}><FormattedMessage
                            id={"personal_data_policy"}/></a>
                        <a target={"_blank"}
                           href={"https://events.ato.ru/upload/FILES/privacy_policy_ru.pdf"}><FormattedMessage
                            id={"privacy_policy"}/></a>
                    </div>
                    <div>
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        );
    }
}
