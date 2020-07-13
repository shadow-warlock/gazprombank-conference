import React, {Component} from "react";
import "./Footer.css";
import ato from "../../../assets/avia_images/ato.png";
import atoru from "../../../assets/avia_images/atoru.png";
import atowhite from "../../../assets/avia_images/atowhite.png";
import aviagor from "../../../assets/avia_images/aviagor.png";
import aviaport from "../../../assets/avia_images/aviaport.png";
import bbtr from "../../../assets/avia_images/bbtr.png";
import biletix from "../../../assets/avia_images/biletix.png";
import embr from "../../../assets/avia_images/embr.png";
import maa from "../../../assets/avia_images/maa.png";
import rosneft1 from "../../../assets/avia_images/rosneft.png";
import ruinsaider from "../../../assets/avia_images/ruinsaider.png";
import siren from "../../../assets/avia_images/siren.png";
import tkp from "../../../assets/avia_images/tkp.png";
import tp from "../../../assets/avia_images/tp.png";

import TechSupport from "../../TechSupport/TechSupport";
import LogoutButton from "../../LogoutButton/LogoutButton";
import {FormattedMessage} from "react-intl";
import embraer from "../../../assets/embraer.jpeg";
import rosneft_ru from "../../../assets/rosneft_ru.jpeg";
import rosneft_en from "../../../assets/rosneft_en.jpeg";
import {LanguageContext} from "../../App";

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <img className={"banner"} src={embraer} alt={"embraer"}/>
                <div className={"footer_logo"}>
                    <div>
                        <p>организатор</p>
                        <p>спонсор</p>
                        <p>спонсор</p>
                        <p id={"last"}>генеральный инфопартнер</p>
                    </div>
                    <div>
                        <img src={ato} alt={"img"}/>
                        <img src={embr} alt={"img"}/>
                        <img src={rosneft1} alt={"img"}/>
                        <img className={"last"} src={atoru} alt={"img"}/>
                        <img className={"last"} src={ruinsaider} alt={"img"}/>
                    </div>
                    <div>
                        <p>Информационный партнер</p>
                    </div>
                    <div className={"test"}>
                        <img src={aviaport} alt={"img"}/>
                        <img src={tp} alt={"img"}/>
                        <img src={maa} alt={"img"}/>
                        <img src={aviagor} alt={"img"}/>
                    </div>
                    <div className={"test"}>
                        <img src={tkp} alt={"img"}/>
                        <img src={siren} alt={"img"}/>
                        <img src={biletix} alt={"img"}/>
                        <img src={bbtr} alt={"img"}/>
                    </div>
                </div>
                <LanguageContext.Consumer>{
                    value => <img className={"banner"}
                                  src={value.lang === 'en' ? rosneft_en : rosneft_ru}
                                  alt={"rosneft"}/>
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
