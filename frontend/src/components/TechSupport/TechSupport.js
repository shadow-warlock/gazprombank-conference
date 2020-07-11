import React, {Component} from "react";
import "./TechSupport.css";
import {TECH_SUPPORTERS} from "../../const/mockData";

export default class TechSupport extends Component {
    render() {
        return (
            <div className={"tech_support"}>
                <div>
                    <p className={"bold uppercase"}>Техническая поддержка</p>
                    <div className={"login_supporters"}>
                        {TECH_SUPPORTERS.map(
                            (techSupporter) => <div key={techSupporter.phone} className={"supporter"}>
                                <p className={"bold"}>{techSupporter.name}</p>
                                <p>
                                    <a href={"tel:" + techSupporter.phone}>{techSupporter.phone}</a>
                                </p>
                                <p className={"mail"}>
                                    <a href={"mailto:" + techSupporter.email}>{techSupporter.email}</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
