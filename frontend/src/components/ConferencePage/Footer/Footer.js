import React, { Component } from 'react';
import './Footer.css';
import TechSupport from '../../TechSupport/TechSupport';
import { FormattedMessage } from 'react-intl';
import { USE } from '../../../const/mockData';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__privacy privacy">
                        <h5 className="privacy__title">© 2020, ATO Events</h5>
                        <span className="privacy__policy-row">
                            <a
                                target={'_blank'}
                                href={
                                    'https://events.ato.ru/upload/FILES/privacy_policy_ru.pdf'
                                }
                            >
                                <FormattedMessage id={'privacy_policy'} />
                            </a>
                            <a
                                target={'_blank'}
                                href={
                                    'https://drive.google.com/file/d/1NIkpg7p6aCoaIuyqJ7-RbU928AxOt34R/view'
                                }
                            >
                                <FormattedMessage id={'personal_data_policy'} />
                            </a>
                        </span>
                        <span className="privacy__contacts">
                            <FormattedMessage id={'contacts'} />
                            <a href={'tel:+7 (495) 108-5143'}>
                                {' '}
                                {': +7 (495) 108-5143'}
                            </a>
                            <a
                                target={'_blank'}
                                href={
                                    'https://www.facebook.com/ATOEvents?fref=ts'
                                }
                            >
                                Facebook
                            </a>
                            <a
                                target={'_blank'}
                                href={
                                    'https://www.youtube.com/user/eventsatoru'
                                }
                            >
                                Youtube
                            </a>
                        </span>
                        {/* <LogoutButton/> */}
                    </div>
                    <div className="footer__tech-support">
                        <TechSupport role={true} use={USE.MAIN} />
                    </div>
                </div>
            </div>
        );
    }
}
