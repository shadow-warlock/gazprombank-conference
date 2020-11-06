import React, {Component} from 'react';
import ChangeLocaleButton from "../../ChangeLocaleButton/ChangeLocaleButton";
import alfa from "../../../assets/sponsors/alfa.svg";
import lufthansa from "../../../assets/sponsors/lufthansa.svg";
import embraer from "../../../assets/sponsors/embraer.svg";
import whiteNcase from "../../../assets/sponsors/whiteNcase.svg";
import sita from "../../../assets/sponsors/sita.svg";
import "./Sponsors.css";

class Sponsors extends Component {
    render() {
        return (
            <div className={"sponsors"}>
                <div className={"logos"}>
                    <div><img src={alfa} alt={"alfa"}/></div>
                    <div><img src={lufthansa} alt={"lufthansa"}/></div>
                    <div><img src={embraer} alt={"embraer"}/></div>
                    <div><img src={whiteNcase} alt={"whiteNcase"}/></div>
                    <div><img src={sita} alt={"sita"}/></div>
                </div>
                <div><ChangeLocaleButton/></div>
            </div>
        )
    }
}

export default Sponsors