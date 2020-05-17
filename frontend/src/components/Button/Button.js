import React, {Component} from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <button className={"button"} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}
