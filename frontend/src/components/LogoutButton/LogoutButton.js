import React, {Component} from "react";
import "./LogoutButton.css";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../const/const";

export default class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        axios.delete(API.SESSION, AXIOS_CONFIG).finally(() => document.location.reload());
    }

    render() {
        return (
            <button className={"logout_button font_size_less"} onClick={this.logout}>Выйти</button>
        );
    }
}
