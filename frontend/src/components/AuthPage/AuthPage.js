import React, { Component } from 'react';
import AuthForm from './AuthForm/AuthForm';
import './AuthPage.css';
import { FormattedMessage, injectIntl } from 'react-intl';
import Moment from 'react-moment';
import { conferenceDate, conferenceTime, USE } from '../../const/mockData';
import TechSupport from '../TechSupport/TechSupport';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';

class AuthPage extends Component {
    render() {
        return (
            <div className="auth-page">
                <Header />
                <section className="auth-page__content">
                    <div className="auth-page__main-block">
                        <div className="auth-page__general">
                            <h1 className="auth-page__title subtitle">
                                <FormattedMessage id={'conference'} />
                            </h1>
                            <h1 className="auth-page__conf-theme title">
                                {/* <FormattedMessage id={'conference_theme'} /> */}
                                <FormattedMessage id={'theme-part-1'} />
                                <br />
                                <FormattedMessage id={'theme-part-2'} />
                                <br />
                                <FormattedMessage id={'theme-part-3'} />
                            </h1>
                            <div className="auth-page__time text">
                                <Moment
                                    className={'upper'}
                                    format={this.props.intl.formatMessage({
                                        id: 'date_format',
                                    })}
                                    date={conferenceDate}
                                />
                                {', '}
                                {conferenceTime}
                            </div>
                            <div className="auth-page__form">
                                <AuthForm setUser={this.props.setUser} />
                            </div>
                        </div>
                    </div>
                    <footer className="auth-page__tech-block">
                        <div className="auth-page__tech-content">
                            <div className="auth-page__contacts">
                                <Contacts role={true} use={USE.AUTH} />
                            </div>
                            <div className="auth-page__tech-support">
                                <TechSupport role={false} use={USE.AUTH} />
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        );
    }
}
export default injectIntl(AuthPage);
