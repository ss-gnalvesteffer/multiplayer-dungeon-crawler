import * as PIXI from 'pixi.js';
import assetManifest from '../../../../assets/asset-manifest';
import EntityBase from '../entity-base';

export default class ModularCharacter extends EntityBase {
  constructor(container) {
    super(container);

    const characterAssets = assetManifest.character;
    const bodyParts = characterAssets.body_parts;

    this.characterContainer = new PIXI.Container();
    this.characterContainer.pivot.set(characterAssets.pivot_position.x, characterAssets.pivot_position.y);
    this.addDrawable(this.characterContainer);

    const legsAssetData = bodyParts.legs;
    this.legsSprite = new PIXI.Sprite(this.getTexture(legsAssetData.texture_path));
    this.legsSprite.pivot.set(legsAssetData.pivot_position.x, legsAssetData.pivot_position.y);
    this.legsSprite.position.set(legsAssetData.position.x, legsAssetData.position.y);
    this.characterContainer.addChild(this.legsSprite);

    const rightFootAssetData = bodyParts.right_foot;
    this.rightFootSprite = new PIXI.Sprite(this.getTexture(rightFootAssetData.texture_path));
    this.rightFootSprite.pivot.set(rightFootAssetData.pivot_position.x, rightFootAssetData.pivot_position.y);
    this.rightFootSprite.position.set(legsAssetData.right_foot_connection_position.x, legsAssetData.right_foot_connection_position.y);
    this.legsSprite.addChild(this.rightFootSprite);

    const leftFootAssetData = bodyParts.left_foot;
    this.leftFootSprite = new PIXI.Sprite(this.getTexture(leftFootAssetData.texture_path));
    this.leftFootSprite.pivot.set(leftFootAssetData.pivot_position.x, leftFootAssetData.pivot_position.y);
    this.leftFootSprite.position.set(legsAssetData.left_foot_connection_position.x, legsAssetData.left_foot_connection_position.y);
    this.legsSprite.addChild(this.leftFootSprite);

    const rightArmAssetData = bodyParts.right_arm;
    this.rightArmSprite = new PIXI.Sprite(this.getTexture(rightArmAssetData.texture_path));
    this.rightArmSprite.pivot.set(rightArmAssetData.pivot_position.x, rightArmAssetData.pivot_position.y);
    this.rightArmSprite.position.set(rightArmAssetData.position.x, rightArmAssetData.position.y);
    this.characterContainer.addChild(this.rightArmSprite);

    const rightHandLowerAssetData = bodyParts.right_hand_lower;
    this.rightHandLowerSprite = new PIXI.Sprite(this.getTexture(rightHandLowerAssetData.texture_path));
    this.rightHandLowerSprite.pivot.set(rightHandLowerAssetData.pivot_position.x, rightHandLowerAssetData.pivot_position.y);
    this.rightHandLowerSprite.position.set(rightArmAssetData.right_hand_connection_position.x, rightArmAssetData.right_hand_connection_position.y);
    this.rightArmSprite.addChild(this.rightHandLowerSprite);

    const rightHandUpperAssetData = bodyParts.right_hand_upper;
    this.rightHandUpperSprite = new PIXI.Sprite(this.getTexture(rightHandUpperAssetData.texture_path));
    this.rightHandUpperSprite.pivot.set(rightHandUpperAssetData.pivot_position.x, rightHandUpperAssetData.pivot_position.y);
    this.rightHandUpperSprite.position.set(rightArmAssetData.right_hand_connection_position.x, rightArmAssetData.right_hand_connection_position.y);
    this.rightArmSprite.addChild(this.rightHandUpperSprite);

    const torsoAssetData = bodyParts.torso;
    this.torsoSprite = new PIXI.Sprite(this.getTexture(torsoAssetData.texture_path));
    this.torsoSprite.pivot.set(torsoAssetData.pivot_position.x, torsoAssetData.pivot_position.y);
    this.torsoSprite.position.set(torsoAssetData.position.x, torsoAssetData.position.y);
    this.characterContainer.addChild(this.torsoSprite);

    const headAssetData = bodyParts.head;
    this.headSprite = new PIXI.Sprite(this.getTexture(headAssetData.texture_path));
    this.headSprite.pivot.set(headAssetData.pivot_position.x, headAssetData.pivot_position.y);
    this.headSprite.position.set(headAssetData.position.x, headAssetData.position.y);
    this.characterContainer.addChild(this.headSprite);

    const leftArmAssetData = bodyParts.left_arm;
    this.leftArmSprite = new PIXI.Sprite(this.getTexture(leftArmAssetData.texture_path));
    this.leftArmSprite.pivot.set(leftArmAssetData.pivot_position.x, leftArmAssetData.pivot_position.y);
    this.leftArmSprite.position.set(leftArmAssetData.position.x, leftArmAssetData.position.y);
    this.characterContainer.addChild(this.leftArmSprite);

    const leftHandAssetData = bodyParts.left_hand;
    this.leftHandSprite = new PIXI.Sprite(this.getTexture(leftHandAssetData.texture_path));
    this.leftHandSprite.pivot.set(leftHandAssetData.pivot_position.x, leftHandAssetData.pivot_position.y);
    this.leftHandSprite.position.set(leftArmAssetData.left_hand_connection_position.x, leftArmAssetData.left_hand_connection_position.y);
    this.leftArmSprite.addChild(this.leftHandSprite);
  }

  setSkinColor = (skinColor) => {
    this.legsSprite.tint = skinColor;
    this.rightFootSprite.tint = skinColor;
    this.leftFootSprite.tint = skinColor;
    this.rightArmSprite.tint = skinColor;
    this.rightHandLowerSprite.tint = skinColor;
    this.rightHandUpperSprite.tint = skinColor;
    this.torsoSprite.tint = skinColor;
    this.headSprite.tint = skinColor;
    this.leftArmSprite.tint = skinColor;
    this.leftHandSprite.tint = skinColor;
  };

  // setEquipment = (equipment) => {
  //
  // };

  setPosition = (x, y) => {
    this.container.position.set(x, y);
  };

  update() {
    // update displayed equipment
  }
}
