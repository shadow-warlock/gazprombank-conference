import React from 'react';

import gazprombankLogo from '../../assets/fin_images/gazprom.png';
import wweLogo from '../../assets/fin_images/wwe.png';
import lathamLogo from '../../assets/fin_images/latham.png';
import cliffordLogo from '../../assets/fin_images/clifford.png';
import freshfieldsLogo from '../../assets/fin_images/freshfields.png';
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
                <a href="https://wwe-conferences.com/" target="_blank">
                    <img
                        className="header__logo"
                        src={wweLogo}
                        alt="wwe-conferences logo"
                    />
                </a>
                <a href="https://www.lw.com/" target="_blank">
                    <img
                        className="header__logo"
                        src={lathamLogo}
                        alt="latham logo"
                    />
                </a>
                <a
                    href="https://www.cliffordchance.com/people_and_places/places/europe/russia.html"
                    target="_blank"
                >
                    <img
                        className="header__logo"
                        src={cliffordLogo}
                        alt="clifford logo"
                    />
                </a>
                <a href="https://www.freshfields.com/" target="_blank">
                    <img
                        className="header__logo"
                        src={freshfieldsLogo}
                        alt="freshfields logo"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
