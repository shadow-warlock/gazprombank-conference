import React, { Component } from 'react';
import './Footer.css';
import TechSupport from '../../TechSupport/TechSupport';
import { USE } from '../../../const/mockData';
import LogoutButton from '../../LogoutButton/LogoutButton';
import Contacts from '../../Contacts/Contacts';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__contacts">
                        <Contacts role={true} use={USE.MAIN} />
                        <div className="footer__logout-btn">
                            <LogoutButton />
                        </div>
                    </div>
                    <div className="footer__tech-support">
                        <TechSupport role={false} use={USE.MAIN} />
                    </div>
                </div>
            </div>
        );
    }
}
