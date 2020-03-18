import ChatMessage from '../chat-message';
import React from 'react';

const ChatLog = ({chatMessages}) => {
  return chatMessages.map(({id, username, message}) => {
    return (
      <ChatMessage
        key={id}
        username={username}
        message={message}
      />
    );
  })
};

export default ChatLog;
