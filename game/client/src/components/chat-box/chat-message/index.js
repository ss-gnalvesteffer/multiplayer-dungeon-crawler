import React from 'react';
import style from './style.less';

const ChatMessage = ({author, message}) => {
  return (
    <div className={style['chat-message']}>
      <div className={style.author}>{author}:&nbsp;</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
