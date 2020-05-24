import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../../const/const";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan} from "@fortawesome/free-solid-svg-icons";

export default class AdminPoll extends Component {

    close() {
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
                <p className={"uppercase color_white font_size_big pb_20"}>Опрос</p>
                <div className={"actual_poll"}>
                    {this.props.poll && <p className={"uppercase color_pink"}>
                        Текущий опрос: <span
                        className={"color_white"}>{this.props.poll.name}</span>
                    </p>}
                    {this.props.poll &&
                    <FontAwesomeIcon icon={faBan} className={"close_poll_button"} onClick={this.close.bind(this)}/>
                    }
                </div>
            </div>
        );
    }
}
