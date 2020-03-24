const Direction = require('../../../../client/src/game/models/direction');

module.exports = class PlayerService {
  constructor({gameServer, username}) {
    const redisClient = gameServer.redisClient;

    this.getDirection = async () => {
      return parseInt(await redisClient.get(`player:${username}:direction`)) || Direction.Values.NORTH;
    };

    this.setDirection = async (direction) => {
      await redisClient.set(`player:${username}:direction`, direction || Direction.Values.NORTH);
    };

    this.getPositionX = async () => {
      return parseInt(await redisClient.get(`player:${username}:positionX`)) || 0;
    };

    this.getPositionY = async () => {
      return parseInt(await redisClient.get(`player:${username}:positionY`)) || 0;
    };

    this.getPositionZ = async () => {
      return parseInt(await redisClient.get(`player:${username}:positionZ`)) || 0;
    };

    this.getPosition = async () => {
      return {
        x: await this.getPositionX(),
        y: await this.getPositionY(),
        z: await this.getPositionZ(),
      };
    };

    this.setPositionX = async (value) => {
      await redisClient.set(`player:${username}:positionX`, value || 0);
    };

    this.setPositionY = async (value) => {
      await redisClient.set(`player:${username}:positionY`, value || 0);
    };

    this.setPositionZ = async (value) => {
      await redisClient.set(`player:${username}:positionZ`, value || 0);
    };

    this.getPlayerTransform = async () => {
      return {
        direction: await this.getDirection(),
        position: await this.getPosition(),
      };
    };

    this.turn = async (amount) => {
      const currentDirection = await this.getDirection();
      const newDirection = Direction.addDirection(currentDirection, amount);
      await this.setDirection(newDirection);
      return newDirection;
    };

    this.step = async (amount) => {
      const currentPosition = await this.getPosition();
      const currentDirection = await this.getDirection();
      const directionVector = await Direction.getDirectionVector(currentDirection);
      const newPosition = {
        x: currentPosition.x + directionVector.x * amount,
        y: currentPosition.y + directionVector.y * amount,
        z: currentPosition.z,
      };
      await this.setPositionX(newPosition.x);
      await this.setPositionY(newPosition.y);
      await this.setPositionZ(newPosition.z);
      return newPosition;
    };
  }
};
