import React, {Component} from "react";
import axios from "axios";
import {SERVER_URL} from "../../const/server";
import Auth from "./Auth";
import {API_SESSION} from "../../const/api";

class Security extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAccess: false
        };
    }


    componentDidMount() {
        axios.get(SERVER_URL + API_SESSION).then(
            res => {
                console.log(res.data);
                this.setState({isAccess: res.data.role === this.props.role});
            }
        ).catch(e => {
            this.setState({isAccess: false});
        })
    }

    render() {
        return this.state.isAccess ? this.props.children : <Auth/>;
    }
}

export default Security;
