import React, {Component} from "react";
import axios from "axios";
import {API_SESSION, SERVER_URL} from "../../../const/const";

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
        };
        this.changeCode = this.changeCode.bind(this);
        this.sendAuthFrom = this.sendAuthFrom.bind(this);
    }

    changeCode(e) {
        let key = e.target.name;
        let target = e.target;
        this.setState({
            [key]: e.target.value
        }, () => {
            target.value = this.state[key]
        });
    }

    sendAuthFrom() {
        axios.post(SERVER_URL + API_SESSION, {code: this.state.code}, {withCredentials: true}).then(
            res => {
                this.props.setUser(res.data)
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div>
                <p>Вход</p>
                <input
                    name={"code"}
                    onChange={this.changeCode}
                    type={"number"}
                    placeholder={"Пароль"}/>
                <button onClick={this.sendAuthFrom}>Войти</button>
            </div>
        );
    }
}
