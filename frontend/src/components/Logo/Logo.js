import React, {Component} from "react";
import logo_blue from "../../assets/cordiant/logo_blue.png";
import logo from "../../assets/cordiant/logo.png";
import "./Logo.css";

export default class Logo extends Component {
    render() {
        let logos = [
            <img src={logo_blue} alt={"cordiant logo"}/>,
            <img src={logo} alt={"cordiant logo"}/>
        ];
        return (
            <div className={"logo"}>
                {this.props.alternativeColor ? logos.reverse() : logos}
            </div>
        );
    }
}
