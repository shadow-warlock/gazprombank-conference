import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../const/const";
import User from "./User/User";
import AddUserForm from "./AddUserForm/AddUserForm";
import ChangePoll from "./ChangePoll/ChangePoll";
import "./AdminPage.css";
import LoaderCSV from "./LoadersCSV/LoaderCSV";

export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers() {
        let self = this;
        axios.get(API.USER, AXIOS_CONFIG).then(
            res => {
                self.setState({
                    users: res.data
                });
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div className={"admin_page padding_side color_white"}>
                <p className={"uppercase font_size_very_big bold"}>Админ панель</p>
                <LoaderCSV/>
                <ChangePoll/>
                <AddUserForm reload={this.loadUsers.bind(this)}/>
                <div className={"user_list"}>{this.state.users.map(user =>
                    <User
                        key={user.id}
                        reload={this.loadUsers.bind(this)}
                        user={user}/>
                )}</div>
            </div>
        );
    }
}
