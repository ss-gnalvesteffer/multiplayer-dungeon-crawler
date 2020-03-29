import Direction from '../models/direction';
import Game from '../index';
import assetManifest from '../../../assets/asset-manifest';

const maps = assetManifest.maps.reduce((acc, map) => {
  acc[map.id] = map;
  return acc;
}, {});

export default class MapContext {
  constructor() {
    this.game = Game.instance;
  }

  getMapData = () => {
    return maps[this.game.state.player.mapId || 'start'];
  };

  getEnvironmentAssetData = () => {
    const environmentId = this.getMapData().environment_id;
    return assetManifest.environments.find(environment => environment.id === environmentId);
  };

  getTextureHash = () => {
    const playerPosition = this.game.context.player.getPosition();
    const playerDirection = this.game.context.player.getDirection();
    return Math.abs(Math.floor(parseInt(playerPosition.x + playerPosition.y + playerDirection) % 2));
  };

  getBackgroundTexturePath = () => {
    const environmentAssetData = this.getEnvironmentAssetData();
    const direction = this.game.context.player.getDirection();
    const textureHash = this.getTextureHash();
    switch (direction) {
      case Direction.Values.NORTH:
        return environmentAssetData[`background_north_texture_path_${textureHash}`];
      case Direction.Values.EAST:
        return environmentAssetData[`background_east_texture_path_${textureHash}`];
      case Direction.Values.SOUTH:
        return environmentAssetData[`background_south_texture_path_${textureHash}`];;
      case Direction.Values.WEST:
        return environmentAssetData[`background_west_texture_path_${textureHash}`];
    }
  };

  getWallTexturePaths = () => {
    const environmentAssetData = this.getEnvironmentAssetData();
    const textureHash = this.getTextureHash();
    return {
      wall_back_left_texture_path: environmentAssetData.wall_back_left_texture_path,
      wall_back_middle_texture_path: environmentAssetData.wall_back_middle_texture_path,
      wall_back_right_texture_path: environmentAssetData.wall_back_right_texture_path,
      wall_left_texture_path: environmentAssetData[`wall_left_texture_path_${textureHash}`],
      wall_right_texture_path: environmentAssetData[`wall_right_texture_path_${textureHash}`],
      wall_front_texture_path: environmentAssetData[`wall_front_texture_path_${textureHash}`],
    };
  };

  getMapValueAtPosition = (x, y, size, mapData) => {
    if (x < 0 || y < 0 || x >= size || y >= size) {
      return 0;
    }
    return mapData[x + (size * y)];
  };

  getWallVisibilityFlags = () => {
    const position = this.game.context.player.getPosition();
    const direction = this.game.context.player.getDirection();
    const directionVector = Direction.getDirectionVector(direction);
    const frontTilePosition = {x: position.x + directionVector.x, y: position.y + directionVector.y};
    const backTilePosition = {x: frontTilePosition.x + directionVector.x, y: frontTilePosition.y + directionVector.y};

    const map = this.getMapData();
    const getWallFlag = (x, y) => this.getMapValueAtPosition(x, y, map.size, map.tile_id_map);

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
