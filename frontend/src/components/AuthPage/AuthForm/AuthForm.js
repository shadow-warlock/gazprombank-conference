import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import "./AuthForm.css";
import TechSupport from "../../TechSupport/TechSupport";
import {FormattedMessage, injectIntl} from "react-intl";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            error: ""
        };
        this.changeCode = this.changeCode.bind(this);
        this.sendAuthFrom = this.sendAuthFrom.bind(this);
    }

    changeCode(e) {
        this.setState({
            code: e.target.value
        });
    }

    sendAuthFrom() {
        this.setState({error: ""})
        axios.post(API.SESSION, {code: this.state.code}, AXIOS_CONFIG).then(
            res => {
                this.props.setUser(res.data)
            }
        ).catch(e => {
            this.setState({error: "Не удалось войти"})
        });
    }

    render() {
        return (
            <div className={"auth_form"}>
                <div className={"form_div"}>
                    <Input
                        value={this.state.code}
                        onChange={this.changeCode}
                        type={"number"}
                        placeholder={this.props.intl.formatMessage({id:"password"})}/>
                    <Button onClick={this.sendAuthFrom}>
                        <FormattedMessage id={"sign_in"}/>
                    </Button>
                </div>
                <p>{this.state.error}</p>
                <br/>
                <TechSupport role={false}/>
            </div>
        );
    }
}

export default injectIntl(AuthForm);
