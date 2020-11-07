import React, {Component} from 'react';
import "./CommonNetworking.css";
import onlineNetworking from "./../../../assets/online-networking.svg";
import {FormattedMessage} from "react-intl";
import Rotation from "react-rotation";
import {SPONSORS} from "../../../const/mockData";
import {LanguageContext} from "../../App";

class CommonNetworking extends Component {
    constructor(props) {
        super(props);

        this.updateScreenWidth = this.updateScreenWidth.bind(this);

        this.state = {
            screenWidth: 0
        }
        window.document.body.onresize = () => this.updateScreenWidth();
    }

    updateScreenWidth() {
        this.setState({ screenWidth: document.documentElement.offsetWidth });
    }

    componentDidMount() {
        this.updateScreenWidth();
    }

    render() {
        let isMobile = this.state.screenWidth <= 768;

        return (
            <div className={"common-networking"}>
                <LanguageContext.Consumer>{
                    value =>
                    <Rotation autoPlay={2000} cycle={true} scroll={false}>
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
                    <a href={"#"} className={"button"}><FormattedMessage id={"sign_in"}/></a>
                </div>
            </div>
        )
    }
}

export default CommonNetworking