import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <span className="cart__message">
                {message}
            </span>
        );
    }
}

export default Message;
