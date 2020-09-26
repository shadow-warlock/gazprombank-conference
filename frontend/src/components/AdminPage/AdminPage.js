import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../const/const";
import User from "./User/User";
import AddUserForm from "./AddUserForm/AddUserForm";
import ChangePoll from "./ChangePoll/ChangePoll";
import "./AdminPage.css";
import LoaderCSV from "./LoadersCSV/LoaderCSV";
import ChangeVideoLink from "./ChangeVideoLink/ChangeVideoLink";
import ChatServerMenu from "./ChatServerMenu/ChatServerMenu";

export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            super: false
        };
    }

    componentDidMount() {
        this.loadUsers();
        this.runOnKeys(() =>{
                this.setState({super:true});

        }, "KeyQ", "KeyW", "KeyO")
        ;
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

    runOnKeys(func, ...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', function (event) {
            pressed.add(event.code);

            for (let code of codes) { // все ли клавиши из набора нажаты?
                if (!pressed.has(code)) {
                    return;
                }
            }
            pressed.clear();

            func();
        });

        document.addEventListener('keyup', function (event) {
            pressed.delete(event.code);
        });

    }

    render() {
        return (
            <div className={"admin_page padding_side color_white"}>
                <p className={"uppercase color_white font_size_very_big bold"}>Админ панель</p>
                {this.state.super ?
                    <>
                        <ChangeVideoLink/>
                        <ChatServerMenu/>
                    </>
                    : ""}
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
