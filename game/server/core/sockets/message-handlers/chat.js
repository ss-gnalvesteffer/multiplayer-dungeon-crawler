const ChatMessageHandlingService = require('./chat-message-handling/chat-message-handling-service');

module.exports = ({message, socketIo, socket, redisClient}) => {
  console.log(`[CHAT] ${message.data.username}: ${message.data.message}`);
  new ChatMessageHandlingService({socketIo, socket, redisClient}).handleChatMessage(message.data);
};
