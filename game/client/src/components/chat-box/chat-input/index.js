import React from 'react';
import style from './style.less';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    return (
      <div className={style['chat-input']}>
        {this.props.username && <div>{this.props.username}:&nbsp;</div>}
        <div
          className={style.input}
          onKeyDown={this.onKeyDown}
          contentEditable
        />
        <div className={style.cursor}>*</div>
      </div>
    );
  }
}
