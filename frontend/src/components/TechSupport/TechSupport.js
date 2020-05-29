import React, {Component} from "react";
import "./TechSupport.css";
import {TECH_SUPPORTERS} from "../../const/mockData";

export default class TechSupport extends Component {
    render() {
        return (
            <div className={"tech_support"}>
                <div>
                    <p>Техническая поддержка</p>
                    <div className={"login_supporters"}>
                        {TECH_SUPPORTERS.map(
                            (techSupporter) => <div className={"supporter"}>
                                <p>{techSupporter.name}</p>
                                <p>
                                    <a href={"tel:" + techSupporter.phone}>{techSupporter.phone}</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
