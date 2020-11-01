import React, { Component } from 'react';
import axios from 'axios';
import { API, AXIOS_CONFIG } from '../../const/const';
import AuthPage from '../AuthPage/AuthPage';

export default class Security extends Component {
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.setUser = this.setUser.bind(this);
        this.checkAccess = this.checkAccess.bind(this);
        this.state = {
            user: null,
        };
    }

    getUser() {
        let self = this;
        axios
            .get(API.SESSION, AXIOS_CONFIG)
            .then((res) => {
                self.setState({ user: res.data });
            })
            .catch((e) => {
                console.error(e);
            });
    }

    setUser(user) {
        this.setState({ user: user });
    }

    componentDidMount() {
        this.getUser();
    }

    checkAccess() {
        return (
            this.state.user && this.props.roles.includes(this.state.user.role)
        );
    }

    render() {
        return this.checkAccess() ? (
            this.props.children(this.state.user)
        ) : (
            <AuthPage setUser={this.setUser} />
        );
    }
}
