import React, {Component} from "react";
import "./TechSupport.css";
import {TECH_SUPPORTERS} from "../../const/mockData";

export default class TechSupport extends Component {
    render() {
        return (
            <div className={"tech_support"}>
                <div>
                    <p>Технические вопросы по подключению к странсляции</p>
                    <div className={"login_supporters"}>
                        {TECH_SUPPORTERS.map(
                            (techSupporter) => <div key={techSupporter.phone} className={"supporter"}>
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
