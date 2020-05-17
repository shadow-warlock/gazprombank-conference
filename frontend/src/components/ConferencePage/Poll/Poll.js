import React, {Component} from "react";

export default class Poll extends Component {
    render() {
        return (
            <div>
                <p>{this.props.poll.question}</p>
                <input/>
            </div>
        );
    }
}
