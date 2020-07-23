import React, {Component} from "react";
import logo from "../../assets/cordiant/logo color.png";
import "./Logo.css";

export default class Logo extends Component {
    render() {
        return (
            <div className={"logo"}>
                <img src={logo} alt={"logo_bank"}/>
            </div>
        );
    }
}
