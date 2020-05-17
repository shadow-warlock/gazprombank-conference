import React, {Component} from "react";
import "./Input.css";

export default class Input extends Component {
    render() {
        return (
            <input autoComplete={"nope"}
                   className={"input"}
                   value={this.props.value}
                   placeholder={this.props.placeholder}
                   onChange={this.props.onChange}
                   type={this.props.type}/>
        );
    }
}
