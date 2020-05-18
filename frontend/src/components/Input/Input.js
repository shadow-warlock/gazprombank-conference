import React, {Component} from "react";
import "./Input.css";

export default class Input extends Component {
    render() {
        return (
            <input autoComplete={"nope"}
                   className={"input"}
                   {...this.props}/>
        );
    }
}
