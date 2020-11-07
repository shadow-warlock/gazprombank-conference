import React, {Component} from 'react';
import "./PartnersNetworking.css";
import {FormattedMessage} from "react-intl";
import {PARTNERS} from "../../../const/mockData";
import {LanguageContext} from "../../App";

class PartnersNetworking extends Component {
    render() {
        return (
            <div className={"partners-networking"}>
                <h3 className={"bold"}><FormattedMessage id={"partners_networking"}/></h3>
                <div className={"partners"}>
                    {
                        PARTNERS.map(partner =>
                            <div className={"partner"} key={partner.id}>
                                <div className={"role bold"}><FormattedMessage id={partner.role}/></div>

                                <LanguageContext.Consumer>{
                                    value =>
                                        <div className={"logo"}>
                                            <img src={value.lang === "ru" ? partner.logo.ru : partner.logo.en}
                                                 alt={partner.id}/>
                                        </div>
                                }</LanguageContext.Consumer>

                                <a href={`/meeting/${partner.id}`} className={"button"}>
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