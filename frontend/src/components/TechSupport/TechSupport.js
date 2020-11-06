import React, { Component } from 'react';
import './TechSupport.css';
import { TECH_SUPPORTERS } from '../../const/mockData';
import { FormattedMessage } from 'react-intl';

export default class TechSupport extends Component {
    render() {
        const techSupporters = TECH_SUPPORTERS.filter((ts) =>
            ts.use.includes(this.props.use)
        );

        if (!techSupporters.length) return <></>;

        return (
            <div className="tech-support">
                <h3 className="tech-support__title">
                    <FormattedMessage id={'technical_support'} />
                </h3>
                <div className={'tech-support__supporters'}>
                    {techSupporters.map((techSupporter) => (
                        <div
                            key={techSupporter.phone}
                            className="tech-support__support"
                        >
                            <span className="tech-support__field field-name">
                                {this.props.role && (
                                    <>
                                        <span className="tech-support__field field-role">
                                            <FormattedMessage
                                                id={techSupporter.role}
                                            />
                                        </span>
                                        :&nbsp;
                                    </>
                                )}
                                <FormattedMessage id={techSupporter.name} />
                            </span>
                            <a
                                className="tech-support__field field-phone"
                                href={'tel:' + techSupporter.phone}
                            >
                                {techSupporter.phone}
                            </a>
                            <a
                                className="tech-support__field field-mail"
                                href={'mailto:' + techSupporter.email}
                            >
                                {techSupporter.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
