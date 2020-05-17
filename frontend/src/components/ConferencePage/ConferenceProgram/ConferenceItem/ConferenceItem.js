import React, {Component} from "react";
import "./ConferenceItem.css";
import rectangle from "./../../../../assets/rectangle.png";

export default class ConferenceItem extends Component {
    render() {
        return (
            <div className={"conference_item"}>
                <div className={"description_container"}>
                    <div>
                        <div>
                            <img className={"conf_item_image"} alt={"conf item image"} src={rectangle}/>
                        </div>
                    </div>
                    <div>
                        <p className={"color_pink font_size_big uppercase"}>{this.props.item.name}</p>
                        <p className={"color_white font_size_big"}>{this.props.item.speaker}</p>
                        <p className={"color_white"}>{this.props.item.description}</p>
                    </div>
                </div>
                <div>
                    <div className={"time"}>
                        <p className={"font_size_very_big color_white bold"}>{this.props.item.time}</p>
                    </div>
                </div>
            </div>
        );
    }
}
