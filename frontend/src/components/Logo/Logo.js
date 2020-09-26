import React, {Component} from "react";
import logo from "./../../assets/logo_ato_events.png";
import logoGruz from "./../../assets/logo_gruz.png";
import "./Logo.css";

export default class Logo extends Component {
    render() {
        return (
            <div className={"logo"}>
                <img src={logo} alt={"logo_bank"}/>
                <img src={logoGruz} alt={"logo_gruz"}/>
            </div>
        );
    }
}
