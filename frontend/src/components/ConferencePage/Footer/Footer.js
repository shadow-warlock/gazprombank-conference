import React, {Component} from "react";
import "./Footer.css";
import TechSupport_ConferencePage from "../../TechSupport/TechSupport_ConferencePage";
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
                    <TechSupport_ConferencePage/>
                    <Logo/>
                </div>
                <div className={"bottom_footer color_white bold"}>
                    <div>
                        © 2020, <span className={"color_green_blue"}>
                        <FormattedMessage id={"cordiant_events"}/>
                    </span>
                    </div>
                    <div>
                        <a>Facebook</a>
                        <a>Youtube</a>
                        <a><FormattedMessage id={"personal_data_policy"}/></a>
                        <a><FormattedMessage id={"privacy_policy"}/></a>
                    </div>
                    <div>
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        );
    }
}
