import React from 'react';

import gazprombankLogo from '../../assets/rosatom_images/gazprom.png';
import novaLogo from '../../assets/rosatom_images/nova.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <a href="https://www.gazprombank.ru/" target="_blank">
                    <img
                        className="header__logo"
                        src={gazprombankLogo}
                        alt="gazprombank logo"
                    />
                </a>
                <a href="https://rosatom.ru/" target="_blank">
                    <img
                        className="header__logo"
                        src={novaLogo}
                        alt="nova logo"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
