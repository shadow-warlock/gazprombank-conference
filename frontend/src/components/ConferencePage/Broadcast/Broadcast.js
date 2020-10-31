import React, {Component} from "react";
import "./Broadcast.css";
import {FormattedMessage} from "react-intl";
import {LanguageContext} from "../../App";

export default class Broadcast extends Component {
    render() {
        return (
            <div className="broadcast">
                <h1 className="broadcast__title">
                    <FormattedMessage id={"broadcast"}/>
                </h1>
                <div className="broadcast__window">
                    <LanguageContext.Consumer>
                        {value =>
                            <iframe
                                src={value.lang === "en" ? this.props.url : this.props.url}
                                className="iframe"
                                title={"translation"}
                                allowFullScreen>
                                Your browser must be updated
                            </iframe>}
                    </LanguageContext.Consumer>
                </div>
            </div>
        );
    }
}
