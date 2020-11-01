import React, { Component } from 'react';
import Message from './Message/Message';
import './Chat.css';
import MessageSender from './MessageSender/MessageSender';
import { FormattedMessage } from 'react-intl';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: null,
        };
    }

    render() {
        return (
            <div className={'chat'}>
                <h1 className="chat__title">
                    <FormattedMessage id={'chat'} />
                </h1>
                <div className={'chat__body'}>
                    <MessageSender
                        deleteReply={() => {
                            this.setState({ reply: null });
                        }}
                        reply={this.state.reply}
                        chatId={this.props.chat.id}
                    />
                    <div className={'chat__messages'}>
                        {this.props.chat.messages.map((message) => (
                            <Message
                                onReply={(reply) => {
                                    this.setState({ reply: reply });
                                }}
                                user={this.props.user}
                                key={message.id}
                                message={message}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
