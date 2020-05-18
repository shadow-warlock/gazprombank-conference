import React, {Component} from "react";
import {TECH_SUPPORTERS} from "../../../const/mockData";
import Supporter from "./Supporter/Supporter";
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <p className={"color_white uppercase font_size_very_big"}>Техническая поддержка</p>
                <div>
                    {TECH_SUPPORTERS.map((supporter) => <Supporter supporter={supporter}/>)}
                </div>
            </div>
        );
    }
}
