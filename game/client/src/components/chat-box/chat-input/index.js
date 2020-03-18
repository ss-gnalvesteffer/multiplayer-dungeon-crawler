import React from 'react';
import style from './style.less';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.onKeyDown = (event) => {
      if (event.key === 'Enter') {
        const message = this.state.message.trim();
        if (message.length > 0) {
          this.props.onSendChatMessage(message);
          this.setState({
            message: '',
          });
        }
      }
    };

    this.onInput = (event) => {
      this.setState({
        message: event.target.value,
      });
    };
  }

  render() {
    return (
      <input
        type='text'
        maxLength={200}
        onKeyDown={this.onKeyDown}
        onChange={this.onInput}
        value={this.state.message}
        placeholder='Type a message and press Enter to send...'
        className={style['chat-input']}
      />
    );
  }
}
