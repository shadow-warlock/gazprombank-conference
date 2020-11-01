import React, { Component } from 'react';

export default class Supporter extends Component {
    render() {
        return (
            <div>
                <p className={'color_pink'}>{this.props.supporter.name}</p>
                <a
                    href={'tel:' + this.props.supporter.phone}
                    className={'white_link'}
                >
                    {this.props.supporter.phone}
                </a>
            </div>
        );
    }
}
