import React, { Component } from 'react';
import axios from 'axios';
import { API, AXIOS_CONFIG } from '../../../const/const';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import './AuthForm.css';
import { FormattedMessage, injectIntl } from 'react-intl';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            error: '',
        };
        this.changeCode = this.changeCode.bind(this);
        this.sendAuthFrom = this.sendAuthFrom.bind(this);
    }

    changeCode(e) {
        this.setState({
            code: e.target.value,
        });
    }

    sendAuthFrom() {
        this.setState({ error: '' });
        axios
            .post(API.SESSION, { code: this.state.code }, AXIOS_CONFIG)
            .then((res) => {
                this.props.setUser(res.data);
            })
            .catch(() => {
                this.setState({ error: 'Не удалось войти' });
            });
    }

    render() {
        return (
            <div className={'auth-form'}>
                <div className={'auth-form__form'}>
                    <Input
                        value={this.state.code}
                        onChange={this.changeCode}
                        type={'number'}
                        placeholder={this.props.intl.formatMessage({
                            id: 'password',
                        })}
                    />
                    <Button onClick={this.sendAuthFrom}>
                        <FormattedMessage id={'sign_in'} />
                    </Button>
                </div>
                <p className="auth-form__error">{this.state.error}</p>
            </div>
        );
    }
}

export default injectIntl(AuthForm);
