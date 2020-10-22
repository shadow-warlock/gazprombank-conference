import React, {Component} from "react";
import Button from "../../Button/Button";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import "./User.css";
import Moment from "react-moment";

export default class User extends Component {

    generatePassword() {
        axios.put(API.USER_CODE(this.props.user.id), {}, AXIOS_CONFIG).then(
            res => {
                this.props.reload();
            }
        ).catch(e => {
            console.error(e);
        });
    }

    delete() {
        axios.delete(API.USER + "/" + this.props.user.id, AXIOS_CONFIG).then(
            res => {
                this.props.reload();
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div className={"user_info"}>
                <div className={"pb_20 mx_auto"}>
                    <div className={"form_container"}><p>ID:</p><p> {this.props.user.id}</p></div>
                    <div className={"form_container"}><p>Имя:</p><p>{this.props.user.name}</p></div>
                    <div className={"form_container"}><p>Фамилия:</p><p>{this.props.user.surname}</p></div>
                    <div className={"form_container"}><p>Роль:</p><p>{this.props.user.role}</p></div>
                    <div className={"form_container"}><p>Email:</p><p>{this.props.user.email ?? "Не задан"}</p></div>
                    <div className={"form_container"}><p>Телефон:</p><p>{this.props.user.phone ?? "Не задан"}</p></div>
                    <div className={"form_container"}><p>Код:</p><p>{this.props.user.code}</p></div>
                    <div className={"form_container"}><p>Присоединился:</p>
                        {this.props.user.joinTime ? <Moment format={"D.MM.Y (H:m)"} date={this.props.user.joinTime}/> : <p>нет</p>}
                    </div>
                </div>
                <div className={"pb_20"}>
                    <Button
                        onClick={this.generatePassword.bind(this)}>Сменить код
                    </Button>
                </div>
                <Button
                    onClick={this.delete.bind(this)}>
                    Удалить
                </Button>

            </div>
        );
    }
}
