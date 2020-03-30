const Direction = require('../../../../client/src/game/models/direction');
const MapService = require('../map/map-service');

module.exports = class PlayerService {
  constructor({gameServer, username}) {
    const redisClient = gameServer.redisClient;
    const mapService = new MapService();

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

    this.getPosition = async () => {
      return {
        x: await this.getPositionX(),
        y: await this.getPositionY(),
      };
    };

    this.setPositionX = async (value) => {
      await redisClient.set(`player:${username}:positionX`, value || 0);
    };

    this.setPositionY = async (value) => {
      await redisClient.set(`player:${username}:positionY`, value || 0);
    };

    this.getMapId = async () => {
      return await redisClient.get(`player:${username}:mapId`);
    };

    this.setMapId = async (mapId) => {
      await redisClient.set(`player:${username}:mapId`, mapId);
    };

    this.getSkinColor = async () => {
      return parseInt(await redisClient.get(`player:${username}:skinColor`));
    };

    this.setSkinColor = async (value) => {
      await redisClient.set(`player:${username}:skinColor`, value || 0x000000);
    };

    this.getPlayerData = async () => {
      return {
        direction: await this.getDirection(),
        position: await this.getPosition(),
        mapId: await this.getMapId(),
        skinColor: await this.getSkinColor(),
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
      const currentMapId = await this.getMapId();
      const directionVector = await Direction.getDirectionVector(currentDirection);
      const newPosition = {
        x: currentPosition.x + directionVector.x * amount,
        y: currentPosition.y + directionVector.y * amount,
      };
      const newPositionTileId = mapService.getTileId(newPosition.x, newPosition.y, currentMapId);
      if (mapService.isWalkableTileId(newPositionTileId)) {
        await this.setPositionX(newPosition.x);
        await this.setPositionY(newPosition.y);
        return newPosition;
      }
      return currentPosition;
    };
  }
};
