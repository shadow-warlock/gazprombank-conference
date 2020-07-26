import React, {Component} from "react";
import logo_blue from "../../assets/cordiant/logo_blue.png";
import logo from "../../assets/cordiant/logo.png";
import "./Logo.css";

export default class Logo extends Component {
    render() {
        return (
            <div className={"logo"}>
                <img src={logo_blue} alt={"cordiant logo"}/>
                <img src={logo} alt={"cordiant logo"}/>
            </div>
        );
    }
}
