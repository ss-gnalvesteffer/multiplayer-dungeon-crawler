import Direction from '../models/direction';
import Game from '../index';
import assetManifest from '../../../assets/asset-manifest';

export default class MapContext {
  constructor() {
    this.game = Game.instance;
  }

  getEnvironmentAssetData = () => {
    const environmentId = this.game.state.map.environmentId;
    return assetManifest.environments.find(environment => environment.id === environmentId);
  };

  getBackgroundTexturePath = () => {
    const environmentAssetData = this.getEnvironmentAssetData();
    const direction = this.game.context.player.getDirection();
    switch (direction) {
      case Direction.Values.NORTH:
        return environmentAssetData.background_north_texture_path;
      case Direction.Values.EAST:
        return environmentAssetData.background_east_texture_path;
      case Direction.Values.SOUTH:
        return environmentAssetData.background_south_texture_path;
      case Direction.Values.WEST:
        return environmentAssetData.background_west_texture_path;
    }
  };

  getWallTexturePaths = () => {
    const environmentAssetData = this.getEnvironmentAssetData();
    const playerPosition = this.game.context.player.getPosition();
    const playerDirection = this.game.context.player.getDirection();
    const textureHash = Math.abs(Math.floor(parseInt(playerPosition.x + playerPosition.y + playerDirection) % 2));
    return {
      wall_back_left_texture_path: environmentAssetData.wall_back_left_texture_path,
      wall_back_middle_texture_path: environmentAssetData.wall_back_middle_texture_path,
      wall_back_right_texture_path: environmentAssetData.wall_back_right_texture_path,
      wall_left_texture_path: environmentAssetData[`wall_left_texture_path_${textureHash}`],
      wall_right_texture_path: environmentAssetData[`wall_right_texture_path_${textureHash}`],
      wall_front_texture_path: environmentAssetData[`wall_front_texture_path_${textureHash}`],
    };
  };

  getMapValueAtPosition = (x, y, {size, mapData}) => {
    return mapData[x + (size * y)] || 0;
  };

  getWallVisibilityFlags = () => {
    const position = this.game.context.player.getPosition();
    const direction = this.game.context.player.getDirection();
    const directionVector = Direction.getDirectionVector(direction);
    const frontTilePosition = {x: position.x + directionVector.x, y: position.y + directionVector.y};
    const backTilePosition = {x: frontTilePosition.x + directionVector.x, y: frontTilePosition.y + directionVector.y};

    const map = this.game.state.map;
    const getWallFlag = (x, y) => this.getMapValueAtPosition(x, y, {size: map.size, mapData: map.wallMap});

    const frontWall = getWallFlag(frontTilePosition.x, frontTilePosition.y);
    const leftWall = getWallFlag(frontTilePosition.x + directionVector.y, frontTilePosition.y - directionVector.x);
    const rightWall = getWallFlag(frontTilePosition.x - directionVector.y, frontTilePosition.y + directionVector.x);
    const backWallMiddle = getWallFlag(backTilePosition.x, backTilePosition.y);
    const backWallLeft = getWallFlag(backTilePosition.x - directionVector.y, backTilePosition.y - directionVector.x);
    const backWallRight = getWallFlag(backTilePosition.x + directionVector.y, backTilePosition.y + directionVector.x);

    return {
      frontWall,
      leftWall,
      rightWall,
      backWallMiddle,
      backWallLeft,
      backWallRight,
    };
  };
}
