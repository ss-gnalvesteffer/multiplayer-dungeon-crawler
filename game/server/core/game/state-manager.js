module.exports = class StateManager {
  constructor() {
    this.state = {
      players: {},
    };

    this.getPlayer = (authToken) => {
      return this.state.players[authToken];
    };

    this.loadPlayer = (authToken) => {
      this.state.players[authToken] = {
        ...(this.state.players[authToken] || {}),

      };
    };
  }
};
