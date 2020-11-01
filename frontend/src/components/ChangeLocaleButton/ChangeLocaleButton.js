import React, { Component } from 'react';
import './ChangeLocaleButton.css';
import { LanguageContext } from '../App';

class ChangeLocaleButton extends Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {(value) => (
                    <div className="lang-switcher">
                        <div
                            onClick={
                                value.lang === 'ru' ? () => {} : value.change
                            }
                            className={'lang-switcher__item '.concat(
                                value.lang === 'ru'
                                    ? 'lang-switcher__item--active'
                                    : ''
                            )}
                        >
                            ru
                        </div>
                        <div
                            onClick={
                                value.lang === 'en' ? () => {} : value.change
                            }
                            className={'lang-switcher__item '.concat(
                                value.lang === 'en'
                                    ? 'lang-switcher__item--active'
                                    : ''
                            )}
                        >
                            en
                        </div>
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    }
}

export default ChangeLocaleButton;
