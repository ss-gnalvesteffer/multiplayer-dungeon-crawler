const ChatMessageHandlingService = require('./chat-message-handling/chat-message-handling-service');

module.exports = ({message, socketIo, socket}) => {
  console.log(`[CHAT] ${message.data.username}: ${message.data.message}`);
  new ChatMessageHandlingService({socketIo, socket}).handleChatMessage(message.data);
};
