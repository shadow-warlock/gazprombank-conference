import React, {Component} from 'react';
import "./Support.css";
import TechSupport from "../../TechSupport/TechSupport";
import {USE} from "../../../const/mockData";

class Support extends Component {
    render() {
        return (
            <div className={"support_container"}>
                <TechSupport role={false} use={USE.MAIN}/>
            </div>
        )
    }
}

export default Support