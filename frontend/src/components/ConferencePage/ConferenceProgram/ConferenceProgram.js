import React, {Component} from "react";
import ConferenceItem from "./ConferenceItem/ConferenceItem";
import "./ConferenceProgram.css";

export default class ConferenceProgram extends Component {
    render() {
        return (
            <div className={"conference_program"}>
                <div className={"conference_program_title"}>
                    <p className={"color_white font_size_very_big uppercase"}>Программа</p>
                    <p className={"color_pink font_size_very_big uppercase"}>Онлайн семинара</p>
                </div>
                <div>
                    {this.props.items.map((item) => <ConferenceItem item={item} key={item.id}/>)}
                </div>
            </div>
        );
    }
}
