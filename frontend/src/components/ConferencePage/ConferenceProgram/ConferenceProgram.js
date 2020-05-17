import React, {Component} from "react";
import ConferenceItem from "./ConferenceItem/ConferenceItem";

export default class ConferenceProgram extends Component {
    render() {
        return (
            <div>
                <p>Программа конференции</p>
                <div>
                    {this.props.items.map((item) => <ConferenceItem item={item} key={item.id}/>)}
                </div>
            </div>
        );
    }
}
