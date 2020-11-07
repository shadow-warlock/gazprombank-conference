import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import {sponsors} from "../../../const/mockData";

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
            visible: true,
            sponsor: ""
        };
    }

    create() {
        if (this.state.name === "") {
            alert("Вы не ввели название");
            return;
        }

        let obj = {
            name: this.state.name,
            visible: this.state.visible,
            sponsor: sponsors.indexOf(this.state.sponsor) !== -1 ? this.state.sponsor : null
        };
        axios.post(API.ROOM, obj, AXIOS_CONFIG).then(res => {
            this.props.reload();
            this.setState({
                name: "",
                visible: true
            })
        }).catch(e => {
            if(e.response && e.response.status){
                switch (e.response.status){
                    case 400:
                        alert("Достигнуто максимальное количество комнат");
                        break;
                    default:
                        alert("Не удалось получить доступ к комнате");
                }
            }
        });
    }

    render() {
        let options = sponsors.map((sponsor)=>{return <option key={sponsor} value={sponsor}>{sponsor}</option>});
        options.push(<option key={-1} value={null}>Без спонсора</option>);
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
                            <p>Спонсор: </p>
                            <select value={this.state.sponsor}
                                   onChange={(e) => {
                                       this.setState({sponsor: e.target.value})
                                   }}>
                                {options}
                            </select>
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
