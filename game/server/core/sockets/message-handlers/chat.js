const uuid = require('uuid').v4;

module.exports = (message, socket) => {
  console.log(`[CHAT] ${message.data.username}: ${message.data.message}`);
  socket.broadcast.emit('message', {
    type: 'chat',
    data: {
      id: uuid(),
      username: message.data.username,
      message: message.data.message,
    },
  });
};
