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
                                <div key={techSupporter.phone} className={(this.props.auth ? "supporter_auth " : "")+"supporter"}>
                                    <p className={"bold"}>
                                        <FormattedMessage id={techSupporter.name}/>
                                    </p>
                                    <div className={(this.props.auth ? "supporter_contacts_auth":"") + " supporter_contacts"} >
                                        <p>
                                            <a href={"tel:" + techSupporter.phone}>{techSupporter.phone}</a>
                                        </p>
                                        <p className={"mail"}>
                                            <a href={"mailto:" + techSupporter.email}>{techSupporter.email}</a>
                                        </p>
                                        {techSupporter.description &&
                                        <FormattedMessage id={techSupporter.description}/>}
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
