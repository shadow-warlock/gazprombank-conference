import React, {Component} from "react";
import "./Footer.css";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import TechSupport from "../../TechSupport/TechSupport";
import Logo from "../../Logo/Logo";

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        axios.delete(API.SESSION, AXIOS_CONFIG).finally(() => document.location.reload());
    }

    render() {
        return (
            <div className={"footer color_white"}>
                <Logo/>
                <TechSupport/>
            </div>
        );
    }
}
