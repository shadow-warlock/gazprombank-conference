import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";
import LogoutButton from "../../LogoutButton/LogoutButton";
import {FormattedMessage} from "react-intl";
import cordiant from "../../../assets/cordiant/Professional-banner-adaptive-3450x360.png";
import rosneft_ru from "../../../assets/rosneft_ru.jpeg";
import rosneft_en from "../../../assets/rosneft_en.jpeg";
import {LanguageContext} from "../../App";
import Partners from "./Partners/Partners";
import Logo from "../../Logo/Logo";

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <img className={"banner"} src={cordiant} alt={"cordiant"}/>
               <Partners/>
                {/*<LanguageContext.Consumer>{*/}
                {/*    value => <img className={"banner"}*/}
                {/*                  src={value.lang === 'en' ? rosneft_en : rosneft_ru}*/}
                {/*                  alt={"rosneft"}/>*/}
                {/*}*/}
                {/*</LanguageContext.Consumer>*/}
                <div className={"padding_side"}>
                    <TechSupport/>
                    <Logo/>
                    {/*<div className={"organization"}>*/}
                    {/*    <p className={"font_size_big color_green_blue bold"}>*/}
                    {/*        <FormattedMessage id={"organizer"}/>*/}
                    {/*        <FormattedMessage id={"ato_events"}/>*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <FormattedMessage id={"more_than"}/>*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <a className={"color_green_blue"} href={"://www.events.ato.ru"}>www.events.ato.ru</a> +7 495*/}
                    {/*        108-51-43*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
                <div className={"bottom_footer color_white bold"}>
                    <div>
                        © 2020, <span className={"color_green_blue"}>
                        <FormattedMessage id={"ato_events"}/>
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
