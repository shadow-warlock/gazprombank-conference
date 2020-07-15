import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";
import LogoutButton from "../../LogoutButton/LogoutButton";
import {FormattedMessage} from "react-intl";
import embraer_desktop_ru from "../../../assets/embraer_desktop_ru.jpg";
import embraer_desktop_en from "../../../assets/embraer_desktop_en.jpg";
import embraer_mobile_en from "../../../assets/embraer_mobile_en.jpg";
import embraer_mobile_ru from "../../../assets/embraer_mobile_ru.jpg";
import rosneft_ru from "../../../assets/rosneft_ru.jpeg";
import rosneft_mobile_ru from "../../../assets/rosneft_mobile_ru.png";
import rosneft_en from "../../../assets/rosneft_en.jpeg";
import rosneft_mobile_en from "../../../assets/rosneft_mobile_en.png";
    import {LanguageContext} from "../../App";
import Partners from "./Partners/Partners";

export default class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <a href={" https://embraer.com"} target={"_blank"}>

                    <LanguageContext.Consumer>{
                        (value) =>{
                            if(value.lang === "en"){
                                return (
                                    <>
                                        <img className={"banner only_desktop"} src={embraer_desktop_en} alt={"embraer"}/>
                                        <img className={"banner only_mobile"} src={embraer_mobile_en} alt={"embraer"}/>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <img className={"banner only_desktop"} src={embraer_desktop_ru} alt={"embraer"}/>
                                        <img className={"banner only_mobile"} src={embraer_mobile_ru} alt={"embraer"}/>
                                    </>
                                )
                            }
                        }
                    }
                    </LanguageContext.Consumer>
                </a>
                <Partners/>
                <LanguageContext.Consumer>{
                    value =>
                        <a href={value.lang === 'en' ? "http://www.rosneft-aero.ru/en/" : "http://www.rosneft-aero.ru/"}
                           target={"_blank"}>
                            <img className={"banner only_desktop"}
                                 src={value.lang === 'en' ? rosneft_en : rosneft_ru}
                                 alt={"rosneft"}/>
                            <img className={"banner only_mobile"}
                                 src={value.lang === 'en' ? rosneft_mobile_en : rosneft_mobile_ru}
                                 alt={"rosneft"}/>
                        </a>
                }
                </LanguageContext.Consumer>
                <div className={"padding_side"}>
                    <TechSupport/>
                    <div className={"organization"}>
                        <p className={"font_size_big color_green_blue bold"}>
                            <FormattedMessage id={"organizer"}/>
                            <FormattedMessage id={"ato_events"}/>
                        </p>
                        <p>
                            <FormattedMessage id={"more_than"}/>
                        </p>
                        <p>
                            <a className={"color_green_blue"} href={"://www.events.ato.ru"}>www.events.ato.ru</a> +7 495
                            108-51-43
                        </p>
                    </div>
                </div>
                <div className={"bottom_footer color_white bold"}>
                    <div>
                        © 2020, <span className={"color_green_blue"}>
                        <FormattedMessage id={"ato_events"}/>
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
