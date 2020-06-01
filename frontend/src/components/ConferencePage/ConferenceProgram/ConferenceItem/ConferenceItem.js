import React, {Component} from "react";
import "./ConferenceItem.css";

export default class ConferenceItem extends Component {
    render() {
        return (
            <div className={"conference_item"}>
                <div className={"description_container"}>
                    <div>
                        {this.props.item.image &&
                        <div className={"rectangle_image"}>
                            <img className={"conf_item_image"} alt={"img"} src={this.props.item.image}/>
                        </div>}
                    </div>
                    <div>
                        <p className={"color_blue font_size_big uppercase bold"}>{Array.isArray(this.props.item.name) ? this.props.item.name.map(name =>
                            <p>{name}</p>) : this.props.item.name}</p>
                        <p className={"font_size_big bold"}>{this.props.item.speaker}</p>
                        <p>{this.props.item.description}</p>
                    </div>
                </div>
                <div>
                    {this.props.item.time && <div className={"time"}>
                        <p className={"font_size_very_big"}>{this.props.item.time}</p>
                    </div>}
                </div>
            </div>
        );
    }
}
