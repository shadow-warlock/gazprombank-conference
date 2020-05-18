import React, {Component} from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import axios from "axios";
import {API, AXIOS_CONFIG, ROLE} from "../../../const/const";

const buttonText = [
    "Добавить пользвателя",
    "Скрыть форму"
];

export default class AddUserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: "",
            surname: "",
            email: "",
            phone: "",
            role: false
        };
    }

    create(){
        if(this.state.name === "" || this.state.surname === ""){
            alert("Вы не ввели имя или фамилию");
            return;
        }

        let obj = {
            name: this.state.name,
            surname: this.state.surname,
            role: this.state.role ? ROLE.ADMIN : ROLE.USER,
            email: this.state.email !== "" ? this.state.email : null,
            phone: this.state.phone !== "" ? this.state.phone : null
        };
        axios.post(API.USER, obj, AXIOS_CONFIG).then(res => {
            this.props.reload();
            this.setState({
                name: "",
                surname: "",
                email: "",
                phone: "",
                role: false
            })
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <>
                <Button onClick={()=>{this.setState({isOpen: !this.state.isOpen})}}>
                    {buttonText[this.state.isOpen ? 1 : 0]}
                </Button>
                {
                    this.state.isOpen
                    &&
                    <div style={{background: "red"}}>
                        <p>Имя: <Input value={this.state.name}
                                       onChange={(e)=>{this.setState({name: e.target.value})}}
                        /></p>
                        <p>Фамилия: <Input value={this.state.surname}
                                           onChange={(e)=>{this.setState({surname: e.target.value})}}
                        /></p>
                        <p>Админ: <input type="checkbox"
                                         checked={this.state.role}
                                         onClick={(e)=>{this.setState({role: !this.state.role})}}
                        /></p>
                        <p>Email: <Input  value={this.state.email}
                                          onChange={(e)=>{this.setState({email: e.target.value})}}
                        /></p>
                        <p>Телефон: <Input  value={this.state.phone}
                                            onChange={(e)=>{this.setState({phone: e.target.value})}}
                        /></p>
                        <Button onClick={this.create.bind(this)}>
                            Создать
                        </Button>
                    </div>
                }
            </>
        );
    }
}
