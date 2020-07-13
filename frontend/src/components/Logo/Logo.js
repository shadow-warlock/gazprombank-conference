import React, {Component} from "react";
import logo from "./../../assets/atowhite.png";
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
