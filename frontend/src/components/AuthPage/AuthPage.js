import React, {Component} from "react";
import AuthForm from "./AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import "./AuthPage.css";
import {USE} from "../../const/mockData";
import planeAndTransport from "../../assets/plane_and_transport.png";
import TechSupport from "../TechSupport/TechSupport";
import Sponsors from "./Sponsors";
import ConferenceName from "../ConferenceName/ConferenceName";

class AuthPage extends Component {
    render() {
        return (
            <div className={"auth_container"}>
                <Sponsors/>
                <div className={"auth_page color_white"}>
                    <div className={"info"}>
                        <div>
                            <ConferenceName/>
                            <AuthForm setUser={this.props.setUser}/>
                        </div>
                        <TechSupport role={false} use={USE.AUTH}/>
                    </div>
                    <div className={"image"}>
                        <img src={planeAndTransport} alt={"plane and transport"}/>
                        <Logo/>
                    </div>
                </div>
            </div>
        );
    }
}
export default AuthPage;