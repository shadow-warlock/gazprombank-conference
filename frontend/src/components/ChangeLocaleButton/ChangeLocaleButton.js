import React, {Component} from "react";
import "./ChangeLocaleButton.css";
import {getLanguage} from "../../language/language";
import {LanguageContext} from "../App";

class ChangeLocaleButton extends Component {
    render() {
        return (
            <LanguageContext.Consumer>{
                value =>
                <div className={"uppercase bold change_locale_button"}>
                    <div
                        onClick={value.lang === "ru" ? ()=>{} : value.change}
                        className={value.lang === "ru" ? "color_white" : ""}>
                        ru
                    </div>
                    <div
                        onClick={value.lang === "en" ? ()=>{} : value.change}
                        className={value.lang === "en" ? "color_white" : ""}>
                        en
                    </div>
                </div>
            }
            </LanguageContext.Consumer>

        );
    }
}

export default ChangeLocaleButton;