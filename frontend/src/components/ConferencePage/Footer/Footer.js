import React, {Component} from "react";
import {TECH_SUPPORTERS} from "../../../const/mockData";
import Supporter from "./Supporter/Supporter";
import "./Footer.css";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";

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
            <div className={"footer"}>
                <p className={"color_white uppercase font_size_very_big"}>Техническая поддержка</p>
                <div>
                    {TECH_SUPPORTERS.map((supporter) => <Supporter key={supporter.phone} supporter={supporter}/>)}
                </div>
                <div>
                    <p className={"logout"} onClick={this.logout}>Выйти</p>
                </div>
            </div>
        );
    }
}
