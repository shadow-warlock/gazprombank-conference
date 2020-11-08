import React, {Component} from 'react';
import "./CommonNetworking.css";
import onlineNetworking from "./../../../assets/online-networking.svg";
import {FormattedMessage} from "react-intl";
import Rotation from "react-rotation";
import {SPONSORS} from "../../../const/mockData";
import {LanguageContext} from "../../App";
import {API, AXIOS_CONFIG} from "../../../const/const";
import axios from "axios";

class CommonNetworking extends Component {
    constructor(props) {
        super(props);

        this.updateScreenWidth = this.updateScreenWidth.bind(this);

        this.state = {
            screenWidth: 0,
            room: null
        }
        this.loadRoom = this.loadRoom.bind(this);
        window.document.body.onresize = () => this.updateScreenWidth();
    }

    updateScreenWidth() {
        this.setState({ screenWidth: document.documentElement.offsetWidth });
    }

    componentDidMount() {
        this.updateScreenWidth();
        this.loadRoom();
    }

    loadRoom() {
        let self = this;
        let roomConfig = {
            ...AXIOS_CONFIG,
            params: {
                sponsor: "null"
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
        let isMobile = this.state.screenWidth <= 768;

        return (
            <div className={"common-networking"}>
                <LanguageContext.Consumer>{
                    value =>
                    <Rotation autoPlay={15000} cycle={true} scroll={false}>
                        {
                            SPONSORS.map(sponsor =>
                                <a href={value.lang === "ru" ? sponsor.link.ru : sponsor.link.en}
                                   target={"_blank"} key={sponsor.id} className={"sponsor-banner"}>
                                    <img alt={sponsor.id}
                                         src={`/assets/sponsors_banners/${sponsor.id}/${value.lang}/${isMobile ? "mob" : "pc"}.jpg`} />
                                </a>
                            )
                        }
                    </Rotation>
                }</LanguageContext.Consumer>

                <div className={"log-in"}>
                    <div className={'header bold'}><FormattedMessage id={"online_networking"}/></div>
                    <img src={onlineNetworking} alt={"Online networking"} className={"icon"}/>
                    <a href={`/room/${this.state.room?.code}`}
                       onClick={(e) => {
                           if (!this.state.room) {
                               alert("No video meeting room");
                               e.preventDefault();
                           }
                       }}
                       className={"button"}>
                        <FormattedMessage id={"sign_in"}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default CommonNetworking