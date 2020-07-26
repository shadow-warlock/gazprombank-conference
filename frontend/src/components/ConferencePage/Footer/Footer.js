import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";
import LogoutButton from "../../LogoutButton/LogoutButton";
import {FormattedMessage} from "react-intl";
import cordiantBanner from "../../../assets/cordiant/cordiant_banner.png";
import cordiantBannerMobile from "../../../assets/cordiant/cordiant_banner_mobile.jpg";
import Partners from "./Partners/Partners";
import Logo from "../../Logo/Logo";

export default class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <img className={"banner only_desktop"} src={cordiantBanner} alt={"cordiant banner"}/>
                <img className={"banner only_mobile"} src={cordiantBannerMobile} alt={"cordiant banner"}/>
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
