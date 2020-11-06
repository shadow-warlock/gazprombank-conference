import React, { Component } from 'react';
import AuthForm from './AuthForm/AuthForm';
import './AuthPage.css';
import { FormattedMessage, injectIntl } from 'react-intl';
import Moment from 'react-moment';
import { conferenceDate, conferenceTime, USE } from '../../const/mockData';
import planeAndTransport from '../../assets/plane_and_transport.png';
import TechSupport from '../TechSupport/TechSupport';
import Header from '../Header/Header';

class AuthPage extends Component {
    render() {
        return (
            <div className="auth-page">
                <Header />
                <section className="auth-page__content content">
                    <div className="auth-page__left-triangles">
                        <span className="triangle auth-page__left-triangle"></span>
                        <span className="triangle auth-page__left-triangle"></span>
                    </div>
                    <img
                        className="auth-page__main-img"
                        src={planeAndTransport}
                        alt={'plane and transport'}
                    />
                    <div className="auth-page__info-block">
                        <h1 className="auth-page__title">
                            <FormattedMessage id={'conference'} />
                        </h1>
                        <h1 className="auth-page__conf-theme">
                            <FormattedMessage id={'conference_theme'} />
                        </h1>
                        <span className="auth-page__time">
                            <Moment
                                className={'upper'}
                                format={this.props.intl.formatMessage({
                                    id: 'date_format',
                                })}
                                date={conferenceDate}
                            />
                            {', '}
                            {conferenceTime} (GMT+3,{' '}
                            <FormattedMessage id={'moscow'} />)
                        </span>
                        <div className="auth-page__form">
                            <AuthForm setUser={this.props.setUser} />
                        </div>
                    </div>
                </section>
                <footer className="auth-page__footer">
                    <TechSupport role={false} use={USE.AUTH} />
                    <div className="auth-page__bottom-triangles">
                        <span className="small-triangle auth-page__bottom-triangle"></span>
                        <span className="small-triangle auth-page__bottom-triangle"></span>
                    </div>
                </footer>
            </div>
        );
    }
}
export default injectIntl(AuthPage);
