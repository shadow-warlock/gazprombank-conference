import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { changeLanguage, getLanguage, getMessages } from '../language/language';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import Router from './Router/Router';

export const LanguageContext = React.createContext({
    change: () => {},
    lang: 'ru',
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: getLanguage(),
            messages: getMessages(),
        };
    }

    changeLanguage() {
        changeLanguage();
        this.setState({
            locale: getLanguage(),
            messages: getMessages(),
        });
    }

    render() {
        Moment.globalLocale = this.state.locale;
        return (
            <LanguageContext.Provider
                value={{
                    change: this.changeLanguage.bind(this),
                    lang: this.state.locale,
                }}
            >
                <IntlProvider
                    locale={this.state.locale}
                    messages={this.state.messages}
                >
                    <Router />
                </IntlProvider>
            </LanguageContext.Provider>
        );
    }
}
