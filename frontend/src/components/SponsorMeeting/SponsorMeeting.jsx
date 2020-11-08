import React, {Component} from 'react';
import {SPONSORS} from "../../const/mockData";
import "./SponsorMeeting.css";
import camera from "./../../assets/meeting_icons/camera.svg";
import file from "./../../assets/meeting_icons/file.svg";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../const/const";

class SponsorMeeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            room: null
        }

        this.loadRoom = this.loadRoom.bind(this);
    }

    sponsorName = window.location.pathname
        .replace("meeting", "")
        .replaceAll("/", "");

    sponsor = SPONSORS.findObject("id", this.sponsorName);

    componentDidMount() {
        this.loadRoom();
    }

    loadRoom() {
        let self = this;
        let roomConfig = {
            ...AXIOS_CONFIG,
            params: {
                sponsor: this.sponsorName
            }
        }

        axios.get(API.ROOM, roomConfig).then(
            res => {
                self.setState({
                    room: res.data[0]
                });
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div className={"sponsor-meeting"}>
                <div className={"header"}>
                    <div className={"name bold uppercase"}>
                        <a href={"/"}>ᐸ&nbsp; { this.sponsor.name }</a>
                    </div>
                    <a href={this.sponsor.link.en}>
                        <img className={"logo"} alt={this.sponsor.name} src={this.sponsor.logo.en}/>
                    </a>
                </div>
                <div className={"body"}>
                    <div className={"meeting-video"}>
                        <iframe src={this.sponsor.video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>

                    <div className={"buttons bold"}>
                        <a href={`/room/${this.state.room?.code}`}
                           onClick={(e) => {
                               if (!this.state.room) {
                                   alert("This sponsor have not video meeting room");
                                   e.preventDefault();
                               }
                           }}
                           className={"video-meeting"}>
                            Video meeting
                            <img src={camera} alt={""}/>
                        </a>
                        <a href={this.sponsor.presentation} target={"_blank"} className={"presentation"}>
                            Presentation
                            <img src={file} alt={""}/>
                        </a>
                    </div>

                    <div className={"description bold"}>
                        { this.sponsor.description }
                        <div className={"contacts"}>{ this.sponsor.contacts }</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SponsorMeeting