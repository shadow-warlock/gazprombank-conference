import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";

export default class AdminPoll extends Component {

    close(){
        axios.delete(API.CONFERENCE_POLL, AXIOS_CONFIG).then(
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
                {"Текущий опрос: " + (this.props.poll ? this.props.poll.question :  "Нет текущего опроса")}
                {this.props.poll ? <button onClick={this.close.bind(this)}>закрыть</button> : ""}
            </div>
        );
    }
}
