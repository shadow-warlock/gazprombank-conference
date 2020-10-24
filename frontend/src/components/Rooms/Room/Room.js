import React, {Component} from "react";
import "./Room.css";
import Button from "../../Button/Button";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";


export default class Room extends Component {

    render() {
        return (
            <div className={"room_info"}>
                <div className={"form_container"}><p>Имя:</p><p>{this.props.room.name}</p></div>
                {this.props.admin ? <div className={"form_container"}><p>Видимость:</p><p>{this.props.room.visible ? "Видимая":"Скрытая"}</p></div> : ''}
                <br/>
                <div className={"pb_20"}><Button onClick={()=>{window.open("/room/" + this.props.room.code, "_blank")}}>Войти</Button></div>
                {
                    this.props.admin ?
                        <Button onClick={()=>{
                            let self = this;
                            axios.delete(API.ROOM_ID(self.props.room.id), AXIOS_CONFIG).then(self.props.reload).catch(e => {
                                alert("Не удалось удалить комнату")
                            });
                        }}>
                            Удалить
                        </Button> :
                        ""
                }
            </div>
        );
    }
}
