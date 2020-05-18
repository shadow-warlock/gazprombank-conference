import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import AdminPoll from "./AdminPoll/AdminPoll";
import AddPollForm from "./AddPollForm/AddPollForm";
import "./ChangePoll.css";

export default class ChangePoll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poll: null
        };
    }

    componentDidMount() {
        this.loadPoll();
    }

    loadPoll() {
        let self = this;
        axios.get(API.CONFERENCE, AXIOS_CONFIG).then(
            res => {
                self.setState({
                    poll: res.data.poll
                });
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div className={"change_poll"}>
                <AdminPoll reload={this.loadPoll.bind(this)} poll={this.state.poll}/>
                <AddPollForm/>
            </div>
        );
    }
}
