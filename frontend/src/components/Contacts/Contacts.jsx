import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CONTACTS } from '../../const/mockData';
import './Contacts.css';

const Contacts = ({ use, role }) => {
    const contacts = CONTACTS.filter((c) => c.use.includes(use));

    if (!contacts.length) {
        return <></>;
    }

    return (
        <div className="contacts">
            <h5 className="contacts__title">Контакты:</h5>
            {contacts.map((contact) => (
                <div className="contacts__content" key={contact.phone}>
                    {role && (
                        <span className="contacts__field field-role">
                            <FormattedMessage id={contact.role} />:
                        </span>
                    )}
                    <span className="contacts__field field-name">
                        <FormattedMessage id={contact.name} />
                    </span>
                    <a
                        className="contacts__field field-phone"
                        href={'tel:' + contact.phone}
                    >
                        {contact.phone}
                    </a>
                    <a
                        className="contacts__field field-email"
                        href={'mailto:' + contact.email}
                    >
                        {contact.email}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
