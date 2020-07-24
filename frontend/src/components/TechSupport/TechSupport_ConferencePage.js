import React, {Component} from "react";
import "./TechSupport.css";
import { TECH_SUPPORTERS_ConferencePage} from "../../const/mockData";
import {FormattedMessage} from "react-intl";

export default class TechSupport_ConferencePage extends Component {
    render() {
        return (
            <div className={"tech_support"}>
                <div>
                    <p className={"bold uppercase"}>
                        <FormattedMessage id={"technical_support"}/>
                    </p>
                    <div className={"login_supporters"}>
                        {TECH_SUPPORTERS_ConferencePage.map(
                            (techSupporter) => <div key={techSupporter.phone} className={"supporter"}>
                                <p className={"bold"}>
                                    <FormattedMessage id={techSupporter.name}/>
                                </p>
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
