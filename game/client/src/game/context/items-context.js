import assetManifest from '../../../assets/asset-manifest';

const itemsById = assetManifest.items.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default class ItemsContext {
  getItemAssetData = (itemId) => {
    return itemsById[itemId];
  };
}
