import React from 'react';
import ChatLog from './chat-log';
import ChatInput from './chat-input';
import style from './style.less';

const ChatBox = ({chatMessages, onSendChatMessage}) => {
  return (
    <div className={style['chat-box']}>
      <div className={style['chat-log-container']}>
        <ChatLog chatMessages={chatMessages}/>
      </div>
      <div className={style['chat-input-container']}>
        <ChatInput onSendChatMessage={onSendChatMessage}/>
      </div>
    </div>
  );
};

export default ChatBox;
