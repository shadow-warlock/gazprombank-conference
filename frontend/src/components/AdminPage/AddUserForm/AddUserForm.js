import React, { Component } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import axios from 'axios';
import { API, AXIOS_CONFIG, ROLE } from '../../../const/const';

const buttonText = ['Добавить пользователя', 'Отмена'];

export default class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: '',
            surname: '',
            email: '',
            phone: '',
            role: false,
        };
    }

    create() {
        if (this.state.name === '' || this.state.surname === '') {
            alert('Вы не ввели имя или фамилию');
            return;
        }

        let obj = {
            name: this.state.name,
            surname: this.state.surname,
            role: this.state.role ? ROLE.ADMIN : ROLE.USER,
            email: this.state.email !== '' ? this.state.email : null,
            phone: this.state.phone !== '' ? this.state.phone : null,
        };
        axios
            .post(API.USER, obj, AXIOS_CONFIG)
            .then(() => {
                this.props.reload();
                this.setState({
                    name: '',
                    surname: '',
                    email: '',
                    phone: '',
                    role: false,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className={'pb_20 color_white'}>
                <p className={'uppercase font_size_big pb_20'}>Пользователи</p>
                <Button
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen });
                    }}
                >
                    {buttonText[this.state.isOpen ? 1 : 0]}
                </Button>
                {this.state.isOpen && (
                    <div>
                        <div className={'form_container'}>
                            <p>Имя: </p>
                            <Input
                                value={this.state.name}
                                onChange={(e) => {
                                    this.setState({ name: e.target.value });
                                }}
                            />
                        </div>
                        <div className={'form_container'}>
                            <p>Фамилия: </p>
                            <Input
                                value={this.state.surname}
                                onChange={(e) => {
                                    this.setState({ surname: e.target.value });
                                }}
                            />
                        </div>
                        <div className={'form_container'}>
                            <p>Админ: </p>
                            <Input
                                type="checkbox"
                                checked={this.state.role}
                                onClick={() => {
                                    this.setState({ role: !this.state.role });
                                }}
                            />
                        </div>
                        <div className={'form_container'}>
                            <p>Email: </p>
                            <Input
                                value={this.state.email}
                                onChange={(e) => {
                                    this.setState({ email: e.target.value });
                                }}
                            />
                        </div>
                        <div className={'form_container pb_20'}>
                            <p>Телефон: </p>
                            <Input
                                value={this.state.phone}
                                onChange={(e) => {
                                    this.setState({ phone: e.target.value });
                                }}
                            />
                        </div>
                        <Button onClick={this.create.bind(this)}>
                            Создать
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}
