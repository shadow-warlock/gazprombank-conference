import React, {Component} from "react";
import logo from "./../../assets/logo_ato_events.png";
import "./Logo.css";
import {LanguageContext} from "../App";
import {ATO_LINK} from "../../const/mockData";

export default class Logo extends Component {
    render() {
        return (
            <LanguageContext.Consumer>{
                value =>
                    <a target={'_blank'} href={ATO_LINK[value.lang]}>
                        <div className={"logo"}>
                            <img src={logo} alt={"logo_bank"}/>
                        </div>
                    </a>

            }</LanguageContext.Consumer>
        );
    }
}
