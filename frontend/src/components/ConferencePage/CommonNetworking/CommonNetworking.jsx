import React, {Component} from 'react';
import "./CommonNetworking.css";
import alfa from "./../../../assets/sponsors/alfa_ru.svg";
import {FormattedMessage} from "react-intl";

class CommonNetworking extends Component {
    render() {
        return (
            <div className={"common-networking"}>
                <img src={alfa}/>
                <div className={"log-in"}>
                    <div className={'header'}><FormattedMessage id={"online_networking"}/></div>
                    <div className={"icon"}></div>
                    <a href={"#"} className={"button"}><FormattedMessage id={"sign_in"}/></a>
                </div>
            </div>
        )
    }
}

export default CommonNetworking