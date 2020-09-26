import React, {Component} from "react";
import "./TechSupport.css";
import {TECH_SUPPORTERS} from "../../const/mockData";
import {FormattedMessage} from "react-intl";

export default class TechSupport extends Component {
    render() {
        return (
            <div className={"tech_support"}>
                <div>
                    <p className={"bold uppercase"}>
                        <FormattedMessage id={"technical_support"}/>
                    </p>
                    <div className={"login_supporters"}>
                        {TECH_SUPPORTERS.map(
                            (techSupporter) =>
                                techSupporter.use.includes(this.props.use) ?
                                    <div key={techSupporter.phone} className={"supporter"}>
                                        <p className={"bold"}>
                                            {this.props.role ? <><FormattedMessage id={techSupporter.role}/>{": "}</> : ""}
                                            <FormattedMessage id={techSupporter.name}/>
                                        </p>
                                        <div className={"supporter_contacts"}>
                                            <p>
                                                <a href={"tel:" + techSupporter.phone}>{techSupporter.phone}</a>
                                            </p>
                                            <p className={"mail"}>
                                                <a href={"mailto:" + techSupporter.email}>{techSupporter.email}</a>
                                            </p>
                                        </div>
                                    </div>
                                : ""
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
