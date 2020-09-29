import React, {Component} from "react";
import "./Broadcast.css";
import {FormattedMessage} from "react-intl";
import {LanguageContext} from "../../App";

export default class Broadcast extends Component {
    render() {
        return (
            <div className={"broadcast"}>
                <p className={"bold font_size_big text_center color_white"}>
                    <FormattedMessage id={"broadcast"}/>
                </p>
                <div>
                    <LanguageContext.Consumer>
                        {value =>
                            <iframe
                                src={this.props.url}
                                className={"iframe"}
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
