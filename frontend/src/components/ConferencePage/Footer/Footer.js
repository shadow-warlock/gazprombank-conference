import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";
import Logo from "../../Logo/Logo";

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer color_white"}>
                <Logo/>
                <TechSupport/>
            </div>
        );
    }
}
