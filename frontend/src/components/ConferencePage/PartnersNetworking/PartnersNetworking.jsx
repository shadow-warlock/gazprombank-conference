import React, {Component} from 'react';
import "./PartnersNetworking.css";
import {FormattedMessage} from "react-intl";
import {SPONSORS} from "../../../const/mockData";
import {LanguageContext} from "../../App";

class PartnersNetworking extends Component {
    render() {
        return (
            <div className={"partners-networking"}>
                <h3 className={"bold"}><FormattedMessage id={"partners_networking"}/></h3>
                <div className={"partners"}>
                    {
                        SPONSORS.map(sponsor =>
                            <div className={"partner"} key={sponsor.id}>
                                <div className={"role bold"}><FormattedMessage id={sponsor.role}/></div>

                                <LanguageContext.Consumer>{
                                    value =>
                                        <div className={"logo"}>
                                            <img src={value.lang === "ru" ? sponsor.logo.ru : sponsor.logo.en}
                                                 alt={sponsor.id}/>
                                        </div>
                                }</LanguageContext.Consumer>

                                <a href={`/meeting/${sponsor.id}`} className={"button"}>
                                    <FormattedMessage id={"sign_in"}/>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default PartnersNetworking