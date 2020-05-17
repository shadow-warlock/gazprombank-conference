import React, {Component} from "react";
import logo from "./../../assets/logo.png";

export default class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt={"logo"}/>
            </div>
        );
    }
}
