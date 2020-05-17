import React, {Component} from "react";

export default class Broadcast extends Component {
    render() {
        return (
            <div>
                <iframe width="560" height="315"
                        src={this.props.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    Your browser must be updated
                </iframe>
            </div>
        );
    }
}
