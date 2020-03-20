import React from 'react';
import { v4 } from 'uuid';
import style from './style.less';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);

    this.id = `chat-input-${v4()}`;

    this.onKeyDown = (event) => {
      if (event.key === 'Enter') {
        const message = event.target.innerText.trim();
        if (message.length > 0) {
          this.props.onSendChatMessage(message);
          event.target.innerText = '';
          event.preventDefault();
        }
      }
    };

    this.onClick = () => {
      document.getElementById(this.id).focus();
    }
  }

  render() {
    return (
      <div className={style['chat-input']} onClick={this.onClick}>
        {this.props.username && <div>{this.props.username}:&nbsp;</div>}
        <div
          id={this.id}
          className={style.input}
          onKeyDown={this.onKeyDown}
          contentEditable
        />
        <div className={style.cursor}>*</div>
      </div>
    );
  }
}
