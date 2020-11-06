import React from 'react';

import Logo from '../Logo/Logo';
import ChangeLocaleButton from '../ChangeLocaleButton/ChangeLocaleButton';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content content">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__lang-switcher">
                    <ChangeLocaleButton />
                </div>
            </div>
        </header>
    );
};

export default Header;
