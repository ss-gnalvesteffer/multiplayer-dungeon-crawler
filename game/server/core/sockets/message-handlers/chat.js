module.exports = (message, socket) => {
  socket.broadcast.emit('message', {
    type: 'chat',
    data: message.data,
  });
};
