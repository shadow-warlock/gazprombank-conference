import React, { Component } from 'react';
import './UserVideo.css';
import Video from "./Video/Video";

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        // Gets the nickName of the user
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    render() {
        return (
            <>
            {this.props.streamManager !== undefined ? (
                    <div className={"streamcomponent" + (this.props.publisher ? " publisher" : "")} onClick={this.props.onClick ? this.props.onClick : ()=>{}}>
                        <Video streamManager={this.props.streamManager} />
                        <div><p>{this.getNicknameTag()}</p></div>
                    </div>
                ) : null}
            </>
        );
    }
}
