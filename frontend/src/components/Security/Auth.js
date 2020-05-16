import React, {Component} from "react";
import axios from "axios";
import {SERVER_URL} from "../../const/server";
import {API_SESSION} from "../../const/api";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ""
        };
        this.change = this.change.bind(this);
        this.send = this.send.bind(this);
    }

    change(e){
        let key = e.target.name;
        let target = e.target;
        this.setState({
            [key]: e.target.value
        }, ()=>{target.value = this.state[key]});
    }

    send(){
        axios.post(SERVER_URL + API_SESSION, {code: this.state.code}).then(
            res => {
                console.log(res.data);
            }
        ).catch(e => {
        })
    }

    render() {
        return (
            <>
                <input name={"code"} onChange={this.change}/>
                <button onClick={this.send}>
                    send
                </button>
            </>
        );
    }
}

export default Auth;
