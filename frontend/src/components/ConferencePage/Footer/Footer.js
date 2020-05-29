import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <TechSupport/>
            </div>
        );
    }
}
