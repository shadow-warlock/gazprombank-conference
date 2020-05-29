import React, {Component} from "react";
import ConferenceItem from "./ConferenceItem/ConferenceItem";
import "./ConferenceProgram.css";

export default class ConferenceProgram extends Component {
    render() {
        return (
            <div className={"conference_program"}>
                <div className={"conference_program_title"}>
                    <div>
                        <p className={"color_blue font_size_very_big uppercase bold"}>Программа</p>
                        <p className={"color_blue font_size_very_big uppercase bold"}>конференции</p>
                    </div>
                </div>
                <div>
                    {this.props.items.map((item) => <ConferenceItem item={item} key={item.id}/>)}
                </div>
            </div>
        );
    }
}
