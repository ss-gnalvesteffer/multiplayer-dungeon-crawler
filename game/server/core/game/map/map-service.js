const assetManifest = require('../../../../client/assets/asset-manifest');

const maps = assetManifest.maps.reduce((acc, map) => {
  acc[map.id] = map;
  return acc;
}, {});

module.exports = class MapService {
  constructor() {
    this.getMapData = (mapId) => {
      return maps[mapId];
    };

    this.getMapValueAtPosition = (x, y, size, mapData) => {
      if (x < 0 || y < 0 || x >= size || y >= size) {
        return 0;
      }
      return mapData[x + (size * y)];
    };

    this.getTileId = (x, y, mapId) => {
      const mapData = this.getMapData(mapId);
      return this.getMapValueAtPosition(x, y, mapData.size, mapData.tile_id_map);
    };

    this.isWalkableTileId = (tileId) => {
      return tileId === 0;
    };
  }
};
