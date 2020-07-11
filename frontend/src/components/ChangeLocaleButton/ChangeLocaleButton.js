import React, {Component} from "react";
import "./ChangeLocaleButton.css";
import {getLanguage} from "../../language/language";

class ChangeLocaleButton extends Component {
    render() {
        return (
            <div className={"uppercase bold change_locale_button"}>
                <div className={getLanguage() === "ru" ? "color_white" : ""}>ru</div>
                <div className={getLanguage() === "en" ? "color_white" : ""}>en</div>
            </div>
        );
    }
}

export default ChangeLocaleButton;