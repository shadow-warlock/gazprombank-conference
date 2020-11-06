import React, { Component } from 'react';
import './Footer.css';
import TechSupport from '../../TechSupport/TechSupport';
import { FormattedMessage } from 'react-intl';
import { USE } from '../../../const/mockData';
import LogoutButton from '../../LogoutButton/LogoutButton';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__privacy privacy">
                        <span className="privacy__title">
                            © 2020, ATO Events
                        </span>
                        <a
                            className="privacy__policy privacy__link"
                            target={'_blank'}
                            href={
                                'https://events.ato.ru/upload/FILES/privacy_policy_ru.pdf'
                            }
                        >
                            <FormattedMessage id={'privacy_policy'} />
                        </a>
                        <a
                            className="privacy__data privacy__link"
                            target={'_blank'}
                            href={
                                'https://drive.google.com/file/d/1NIkpg7p6aCoaIuyqJ7-RbU928AxOt34R/view'
                            }
                        >
                            <FormattedMessage id={'personal_data_policy'} />
                        </a>
                        <span className="privacy__contacts">
                            <FormattedMessage id={'contacts'} />
                            {': '}
                            <a
                                className="privacy__link"
                                href={'tel:+7 (495) 108-5143'}
                            >
                                {'+7 (495) 108-5143'}
                            </a>
                        </span>
                        <span className="privacy__media">
                            <a
                                className="privacy__link"
                                target={'_blank'}
                                href={
                                    'https://www.facebook.com/ATOEvents?fref=ts'
                                }
                            >
                                Facebook
                            </a>
                            <a
                                className="privacy__link"
                                target={'_blank'}
                                href={
                                    'https://www.youtube.com/user/eventsatoru'
                                }
                            >
                                Youtube
                            </a>
                        </span>
                        <div className="footer__logout-btn">
                            <LogoutButton />
                        </div>
                    </div>
                    <div className="footer__tech-support">
                        <TechSupport role={true} use={USE.MAIN} />
                    </div>
                </div>
            </div>
        );
    }
}
