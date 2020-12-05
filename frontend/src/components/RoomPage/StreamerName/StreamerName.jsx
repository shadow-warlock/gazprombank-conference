import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";

class StreamerName extends Component {
    render() {
        let { streamer } = this.props;
        let name = streamer?.stream?.connection?.data;

        return (
            <div className={"name bold"}>
                { (name) ? JSON.parse(name)?.clientData : "" }
            {this.props.publisher !== undefined ? (<> (<FormattedMessage id={"you"}/>)</>) : ""}
            </div>
        )
    }
}

export default StreamerName