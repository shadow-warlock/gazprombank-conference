import React, {Component} from "react";
import "./Footer.css";
import LogoutButton from "../../LogoutButton/LogoutButton";
import {FormattedMessage} from "react-intl";
import Logo from "../../Logo/Logo";

export default class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <div className={"info bold"}>
                    <div className={"copyright"}>© 2020, ATO Events</div>
                    <div className={"documents"}>
                        <a target={"_blank"}
                           rel="noopener noreferrer"
                           href={"https://events.ato.ru/upload/FILES/privacy_policy_ru.pdf"}>
                            <FormattedMessage id={"privacy_policy"}/>
                        </a> |&nbsp;
                        <a target={"_blank"}
                           rel="noopener noreferrer"
                           href={"https://drive.google.com/file/d/1NIkpg7p6aCoaIuyqJ7-RbU928AxOt34R/view"}>
                            <FormattedMessage id={"personal_data_policy"}/>
                        </a>
                    </div>
                    <div className={"contacts"}>
                        <div>
                            <FormattedMessage id={"contacts"}/>: <a href={"tel:+7 (495) 108-5143"}>+7 (495) 108-5143</a>
                            <a target={"_blank"} rel="noopener noreferrer" href={"https://www.facebook.com/ATOEvents?fref=ts"}>Facebook</a>
                            <a target={"_blank"} rel="noopener noreferrer" href={"https://www.youtube.com/user/eventsatoru"}>Youtube</a>
                        </div>
                    </div>
                    <div className={"logout-button"}><LogoutButton/></div>
                </div>
                <Logo/>
            </div>
        );
    }
}
