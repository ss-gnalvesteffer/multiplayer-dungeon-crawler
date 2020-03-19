import React from 'react';
import ChatMessage from '../chat-message';
import style from './style.less';

const ChatLog = ({chatMessages}) => {
  return (
    <div className={style['chat-log']}>
      {
        chatMessages.sort((messageA, messageB) => messageB.timestamp - messageA.timestamp).map(({id, username, message}) => {
          return (
            <ChatMessage
              key={id}
              username={username}
              message={message}
            />
          );
        })
      }
    </div>
  )
    ;
};

export default ChatLog;
