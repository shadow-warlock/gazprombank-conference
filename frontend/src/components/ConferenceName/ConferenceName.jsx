import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";

class ConferenceName extends Component {
    render() {
        return (
            <div>
                <p className={"bold conference-type"}>
                    <FormattedMessage id={"conference"}/>
                </p>
                <p className={"bold uppercase conference-name"}>
                    <FormattedMessage id={"conference_theme"}/>
                </p>
                <p className={"bold conference-time"}>
                    <FormattedMessage id={"conference_time"}/>
                </p>
            </div>
        )
    }
}

export default ConferenceName;