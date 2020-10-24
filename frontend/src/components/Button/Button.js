import React, {Component} from "react";
import "./Button.css";

export const OFF = "off";

export default class Button extends Component {
    render() {
        return (
            <button className={"button " + this.props.className ?? ""} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}
