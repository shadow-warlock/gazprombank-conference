import React, {Component} from "react";
import {API, AXIOS_CONFIG} from "../../const/const";
import axios from "axios";
import Room from "./Room/Room";
import AddRoomForm from "./AddRoomForm/AddRoomForm";

export default class Rooms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.loadRooms = this.loadRooms.bind(this);
    }

    componentDidMount() {
        this.loadRooms();
        if(this.props.handlerSetter){
            this.props.handlerSetter(this.handleData.bind(this));
        }
    }

    handleData(data){
        switch (data.type) {
            case "delete room":
            case "create room":
                this.loadRooms.bind(this)();
                break;
        }
    }


    loadRooms(){
        let self = this;
        axios.get(API.ROOM, AXIOS_CONFIG).then(
            res => {
                self.setState({
                    rooms: res.data
                });
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <>
                <br/>
                <p className={"uppercase font_size_big pb_20"}>Комнаты</p>
                {this.props.admin ? <AddRoomForm reload={this.loadRooms}/> : ""}
                <div className={"user_list"}>
                    {
                        this.state.rooms.map((item)=>{
                            return (<Room admin={this.props.admin} key={item.id} room={item} reload={this.loadRooms}/>)
                        })
                    }

                </div>
            </>
        );
    }
}
