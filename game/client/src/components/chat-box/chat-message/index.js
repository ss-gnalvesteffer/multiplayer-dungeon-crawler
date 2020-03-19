import React from 'react';
import style from './style.less';

const ChatMessage = ({username, message}) => {
  return (
    <div className={style['chat-message']}>
      <div className={style.username}>{username}:&nbsp;</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
