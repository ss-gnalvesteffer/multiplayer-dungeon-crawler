const clamp = require('../../math/clamp');

module.exports = async ({message, playerService, socket}) => {
  const {amount} = message.data;
  const newDirection = await playerService.turn(Math.floor(clamp(amount, -1, 1)));
  socket.emit('message', {
    type: 'player-turned',
    data: {
      direction: newDirection,
    },
  });
};
