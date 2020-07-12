import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Security from "./Security/Security";
import {ROLE} from "../const/const";
import ConferencePage from "./ConferencePage/ConferencePage";
import "./App.css";
import AdminPage from "./AdminPage/AdminPage";
import "./mobile.css";
import {FormattedMessage, IntlProvider} from "react-intl";
import {changeLanguage, getLanguage, getMessages} from "../language/language";
import Button from "./Button/Button";

export const LanguageContext = React.createContext({"change": ()=>{}, "lang": "ru"});

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            locale: getLanguage(),
            messages: getMessages()
        }
    }

    changeLanguage(){
        changeLanguage();
        this.setState({
            locale: getLanguage(),
            messages: getMessages()
        });
    }

    render(){
        return (
            <LanguageContext.Provider value={{"change": this.changeLanguage.bind(this), "lang": this.state.locale}}>
                <IntlProvider locale={this.state.locale} messages={this.state.messages}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/">
                                <Security roles={[ROLE.USER, ROLE.ADMIN]}>
                                    {user => <ConferencePage user={user}/>}
                                </Security>
                            </Route>
                            <Route exact path="/admin">
                                <Security roles={[ROLE.ADMIN]}>
                                    {user => <AdminPage/>}
                                </Security>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </IntlProvider>
            </LanguageContext.Provider>
        );
    }
}
