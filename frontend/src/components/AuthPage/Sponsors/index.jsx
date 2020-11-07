import React, {Component} from 'react';
import ChangeLocaleButton from "../../ChangeLocaleButton/ChangeLocaleButton";
import alfa_ru from "../../../assets/sponsors/alfa_ru.svg";
import alfa_en from "../../../assets/sponsors/alfa_en.svg";
import lufthansa from "../../../assets/sponsors/lufthansa.svg";
import embraer from "../../../assets/sponsors/embraer.svg";
import whiteNcase from "../../../assets/sponsors/whiteNcase.svg";
import sita from "../../../assets/sponsors/sita.svg";
import "./Sponsors.css";
import {LanguageContext} from "../../App";

class Sponsors extends Component {
    render() {
        return (
            <div className={"sponsors"}>
                <div className={"logos"}>
                    <LanguageContext.Consumer>{
                        value =>
                            <div>
                                <img src={value.lang === "ru" ? alfa_ru : alfa_en}
                                      alt={"alfa"}/>
                            </div>
                    }</LanguageContext.Consumer>

                    <div><img src={lufthansa} alt={"lufthansa"}/></div>
                    <div><img src={embraer} alt={"embraer"}/></div>
                    <div><img src={whiteNcase} alt={"whiteNcase"}/></div>
                    <div><img src={sita} alt={"sita"}/></div>
                </div>
                <div><ChangeLocaleButton onWhiteBg={true}/></div>
            </div>
        )
    }
}

export default Sponsors