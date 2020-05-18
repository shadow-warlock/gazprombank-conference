import React, {Component} from "react";
import Button from "../../Button/Button";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";

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
            <div>
                <p>ID: {this.props.user.id}</p>
                <p>Имя: {this.props.user.name}</p>
                <p>Фамилия: {this.props.user.surname}</p>
                <p>Роль: {this.props.user.role}</p>
                <p>Email: {this.props.user.email ?? "Не задан"}</p>
                <p>Телефон: {this.props.user.phone ?? "Не задан"}</p>
                <p>Код: {this.props.user.code}</p>
                <Button
                    onClick={this.generatePassword.bind(this)}>
                    Сгенерировать новый пароль
                </Button>
                <Button
                    onClick={this.delete.bind(this)}>
                    Удалить
                </Button>

            </div>
        );
    }
}
