import React, { Component } from 'react';
import './TechSupport.css';
import { TECH_SUPPORTERS } from '../../const/mockData';
import { FormattedMessage } from 'react-intl';

export default class TechSupport extends Component {
    render() {
        return (
            <div className="tech-support">
                <h3 className="tech-support__title auth-white">
                    <FormattedMessage id={'technical_support'} />
                </h3>
                <div className={'tech-support__supporters'}>
                    {TECH_SUPPORTERS.map((techSupporter) =>
                        techSupporter.use.includes(this.props.use) ? (
                            <ul
                                key={techSupporter.phone}
                                className="tech-support__support"
                            >
                                <li className="tech-support__item auth-white">
                                    {this.props.role ? (
                                        <>
                                            <FormattedMessage
                                                id={techSupporter.role}
                                            />
                                            {': '}
                                        </>
                                    ) : (
                                        ''
                                    )}
                                    <FormattedMessage id={techSupporter.name} />
                                </li>
                                <li className="tech-support__item">
                                    <a
                                        className="auth-white"
                                        href={'tel:' + techSupporter.phone}
                                    >
                                        {techSupporter.phone}
                                    </a>
                                </li>
                                <li className="tech-support__item">
                                    <a
                                        className="tech-support__mail auth-white"
                                        href={'mailto:' + techSupporter.email}
                                    >
                                        {techSupporter.email}
                                    </a>
                                </li>
                            </ul>
                        ) : (
                            ''
                        )
                    )}
                </div>
            </div>
        );
    }
}
