import React from 'react';

import gazprombankLogo from '../../assets/fin_images/logo_blue.png';
import wweLogo from '../../assets/fin_images/wwe.png';
import lathamLogo from '../../assets/fin_images/latham.png';
import cliffordLogo from '../../assets/fin_images/clifford.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <img
                    className="header__logo"
                    src={gazprombankLogo}
                    alt="gazprombank logo"
                />
                <img
                    className="header__logo"
                    src={wweLogo}
                    alt="gazprombank logo"
                />
                <img
                    className="header__logo"
                    src={lathamLogo}
                    alt="gazprombank logo"
                />
                <img
                    className="header__logo"
                    src={cliffordLogo}
                    alt="gazprombank logo"
                />
            </div>
        </header>
    );
};

export default Header;
