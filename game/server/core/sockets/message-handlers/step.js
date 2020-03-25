const clamp = require('../../math/clamp');

module.exports = async ({message, playerService, socket}) => {
  const {amount} = message.data;
  const newPosition = await playerService.step(Math.floor(clamp(amount, -1, 1)));
  socket.emit('message', {
    type: 'player-stepped',
    data: {
      position: newPosition,
    },
  });
};
