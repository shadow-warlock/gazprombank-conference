import React, {Component} from "react";
import "./Broadcast.css";

export default class Broadcast extends Component {
    render() {
        return (
            <div className={"broadcast"}>
                <p className={"bold font_size_big text_center color_white"}>Трансляция</p>
                <div>
                    <iframe src={this.props.url}
                            className={"iframe"}
                            title={"translation"}
                            allowFullScreen>
                        Your browser must be updated
                    </iframe>
                </div>
            </div>
        );
    }
}
