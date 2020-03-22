import * as PIXI from 'pixi.js';
import assetManifest from '../../../../assets/asset-manifest.js';

const flattenObject = (object, path = '', res = undefined) => {
  if (!Array.isArray(res)) {
    res = [];
  }
  if (object !== null && typeof object === 'object') {
    if (Array.isArray(object)) {
      for (let i = 0; i < object.length; i++) {
        flattenObject(object[i], path + '[' + i + ']', res)
      }
    } else {
      const keys = Object.keys(object);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        flattenObject(object[key], path ? path + '.' + key : key, res)
      }
    }
  } else {
    if (path) {
      res[path] = object
    }
  }
  return res
};

const loadAllTexturesFromAssetManifest = (onComplete) => {
  const flattenedAssetManifest = flattenObject(assetManifest);
  const texturesPathsToLoad = Object.keys(flattenedAssetManifest).reduce((texturePaths, key) => {
    if (key.includes('texture_path')) {
      const texturePath = flattenedAssetManifest[key];
      texturePaths.push(texturePath);
      console.log(`[AssetLoader] loading "${texturePath}"`)
    }
    return texturePaths;
  }, []);
  PIXI.Loader.shared.add(texturesPathsToLoad).load(onComplete);
};

export default class AssetLoader {
  loadAssets(onAssetsLoaded) {
    loadAllTexturesFromAssetManifest(onAssetsLoaded);
  }
}
