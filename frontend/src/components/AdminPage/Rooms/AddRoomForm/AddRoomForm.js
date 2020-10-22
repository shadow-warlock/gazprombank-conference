import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

const buttonText = [
    "Добавить комнату",
    "Отмена"
];

export default class AddRoomForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: "",
            visible: true
        };
    }

    create() {
        if (this.state.name === "") {
            alert("Вы не ввели название");
            return;
        }

        let obj = {
            name: this.state.name,
            visible: this.state.visible
        };
        axios.post(API.ROOM, obj, AXIOS_CONFIG).then(res => {
            this.props.reload();
            this.setState({
                name: "",
                visible: true
            })
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <div className={"pb_20 color_white"}>
                <Button onClick={() => {
                    this.setState({isOpen: !this.state.isOpen})
                }}>
                    {buttonText[this.state.isOpen ? 1 : 0]}
                </Button>
                {
                    this.state.isOpen
                    &&
                    <div>
                        <div className={"form_container"}>
                            <p>Название: </p>
                            <Input value={this.state.name}
                                   onChange={(e) => {
                                       this.setState({name: e.target.value})
                                   }}/>
                        </div>
                        <div className={"form_container"}>
                            <p>Видимость: </p>
                            <Input type="checkbox" checked={this.state.visible}
                                   onChange={(e) => {
                                       this.setState({visible: !this.state.visible})
                                   }}/>
                        </div>
                        <Button onClick={this.create.bind(this)}>
                            Создать
                        </Button>
                    </div>
                }
            </div>
        );
    }
}
