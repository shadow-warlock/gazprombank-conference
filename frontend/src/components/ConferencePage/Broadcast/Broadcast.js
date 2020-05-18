import React, {Component} from "react";
import "./Broadcast.css";

export default class Broadcast extends Component {
    render() {
        return (
            <div className={"broadcast"}>
                <p className={"bold font_size_big text_center"}>Трансляция</p>
                <iframe className={"iframe"} src={this.props.url}
                        frameBorder="0"
                        title={"translation"}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    Your browser must be updated
                </iframe>
            </div>
        );
    }
}
