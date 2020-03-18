module.exports = {
  audio: {
    music: [
      {
        midi_path: 'audio/music/1 - Into The Unknown.mid',
      },
    ],
  },
  character: {
    head_texture_path: 'character/head.png',
    torso_texture_path: 'character/torso.png',
    left_arm_texture_path: 'character/left-arm.png',
    left_hand_texture_path: 'character/left-hand.png',
    right_arm_texture_path: 'character/right-arm.png',
    right_hand_texture_path: 'character/right-hand.png',
    legs_texture_path: 'character/legs.png',
    left_foot_texture_path: 'character/left-foot.png',
    right_foot_texture_path: 'character/right-foot.png',
    hair_styles: [
      {
        id: 'swept_right',
        name: 'Swept Right',
        equipped_texture_path: 'character/hair/swept-right/equipped.png'
      }
    ],
    facial_hair_styles: [
      {
        id: 'ducktail',
        name: 'Ducktail',
        equipped_texture_path: 'character/facial-hair/ducktail/equipped.png'
      }
    ]
  },
  items: {
    back: [
      {
        id: 'red_cape',
        name: 'Red Cape',
        equipped_texture_path: 'equipment/back/capes/red-cape/equipped.png',
        stats: {
          melee_accuracy: 0,
          melee_strength: 0,
          melee_defense: 2,
          ranged_accuracy: 0,
          ranged_strength: 0,
          ranged_defense: 2,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: 0
        }
      }
    ],
    head: [
      {
        id: 'kettle_hat_helmet',
        name: 'Kettle Hat Helmet',
        equipped_texture_path: 'equipment/head/helmets/kettle-hat-helmet/equipped.png',
        does_hide_facial_hair: false,
        stats: {
          melee_accuracy: 0,
          melee_strength: 0,
          melee_defense: 10,
          ranged_accuracy: -5,
          ranged_strength: 0,
          ranged_defense: 25,
          magic_accuracy: -5,
          magic_strength: 0,
          magic_defense: -10
        }
      },
      {
        id: 'winged_full_helm',
        name: 'Winged Full Helm',
        equipped_texture_path: 'equipment/head/helmets/winged-full-helm/equipped.png',
        does_hide_facial_hair: true,
        stats: {
          melee_accuracy: -5,
          melee_strength: 0,
          melee_defense: 30,
          ranged_accuracy: -30,
          ranged_strength: 0,
          ranged_defense: 50,
          magic_accuracy: -30,
          magic_strength: 0,
          magic_defense: -15
        }
      }
    ],
    neck: [
      {
        id: 'brass_necklace',
        name: 'Brass Necklace',
        equipped_texture_path: 'equipment/neck/brass-necklace/equipped.png'
      }
    ],
    torso: [
      {
        id: 'green_peasant_shirt',
        name: 'Green Peasant Shirt',
        equipped_texture_path: 'equipment/torso/shirts/green-peasant-shirt/equipped.png',
        stats: {
          melee_accuracy: 0,
          melee_strength: 0,
          melee_defense: 1,
          ranged_accuracy: 0,
          ranged_strength: 0,
          ranged_defense: 1,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: 0
        }
      },
      {
        id: 'platebody',
        name: 'Platebody',
        equipped_texture_path: 'equipment/torso/armor/platebody/equipped.png',
        stats: {
          melee_accuracy: -10,
          melee_strength: 0,
          melee_defense: 70,
          ranged_accuracy: -50,
          ranged_strength: 0,
          ranged_defense: 120,
          magic_accuracy: -30,
          magic_strength: 0,
          magic_defense: -50
        }
      }
    ],
    left_gloves: [
      {
        id: 'leather_glove_left',
        name: 'Leather Glove (left)',
        equipped_texture_path: 'equipment/gloves/leather-gloves/equipped-left.png',
        stats: {
          melee_accuracy: 0,
          melee_strength: 2,
          melee_defense: 2,
          ranged_accuracy: -2,
          ranged_strength: 2,
          ranged_defense: 1,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: -2
        }
      }
    ],
    right_gloves: [
      {
        id: 'leather_glove_right',
        name: 'Leather Glove (right)',
        equipped_texture_path: 'equipment/gloves/leather-gloves/equipped-right.png',
        stats: {
          melee_accuracy: 0,
          melee_strength: 2,
          melee_defense: 2,
          ranged_accuracy: -2,
          ranged_strength: 2,
          ranged_defense: 1,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: -2
        }
      }
    ],
    left_hand: [
      {
        id: 'steel_buckler',
        name: 'Steel Buckler',
        equipped_texture_path: 'equipment/left-hand/shields/steel-buckler/equipped.png',
        does_hide_hand: true,
        stats: {
          melee_accuracy: -10,
          melee_strength: 0,
          melee_defense: 50,
          ranged_accuracy: -100,
          ranged_strength: -50,
          ranged_defense: 50,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: -20
        }
      }
    ],
    right_hand: [
      {
        id: 'steel_arming_sword',
        name: 'Steel Arming Sword',
        does_hide_hand: false,
        equipped_texture_path: 'equipment/right-hand/swords/steel-arming-sword/equipped.png',
        stats: {
          melee_accuracy: 120,
          melee_strength: 100,
          melee_defense: 0,
          ranged_accuracy: 0,
          ranged_strength: 0,
          ranged_defense: 0,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: 0
        }
      }
    ],
    legs: [
      {
        id: 'brown_peasant_pants',
        name: 'Brown Peasant Pants',
        equipped_texture_path: 'equipment/legs/brown-peasant-pants/equipped.png',
        stats: {
          melee_accuracy: 0,
          melee_strength: 0,
          melee_defense: 10,
          ranged_accuracy: -5,
          ranged_strength: 0,
          ranged_defense: 25,
          magic_accuracy: -5,
          magic_strength: 0,
          magic_defense: -10
        }
      },
      {
        id: 'platelegs',
        name: 'Platelegs',
        equipped_texture_path: 'equipment/legs/platelegs/equipped.png',
        stats: {
          melee_accuracy: -5,
          melee_strength: 0,
          melee_defense: 50,
          ranged_accuracy: -20,
          ranged_strength: 0,
          ranged_defense: 80,
          magic_accuracy: -20,
          magic_strength: 0,
          magic_defense: -45
        }
      }
    ],
    left_foot: [
      {
        id: 'leather_boot_left',
        name: 'Leather Boot (left)',
        equipped_texture_path: 'equipment/feet/leather-boots/equipped-left.png',
        stats: {
          melee_accuracy: 2,
          melee_strength: 0,
          melee_defense: 2,
          ranged_accuracy: 2,
          ranged_strength: 0,
          ranged_defense: 2,
          magic_accuracy: 2,
          magic_strength: 0,
          magic_defense: -2
        }
      },
      {
        id: 'sabaton_left',
        name: 'Sabaton (left)',
        equipped_texture_path: 'equipment/feet/sabatons/equipped-left.png',
        stats: {
          melee_accuracy: -2,
          melee_strength: 0,
          melee_defense: 10,
          ranged_accuracy: -15,
          ranged_strength: 0,
          ranged_defense: 10,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: -10
        }
      }
    ],
    right_foot: [
      {
        id: 'leather_boot_right',
        name: 'Leather Boot (right)',
        equipped_texture_path: 'equipment/feet/leather-boots/equipped-right.png',
        stats: {
          melee_accuracy: 2,
          melee_strength: 0,
          melee_defense: 2,
          ranged_accuracy: 2,
          ranged_strength: 0,
          ranged_defense: 2,
          magic_accuracy: 2,
          magic_strength: 0,
          magic_defense: -2
        }
      },
      {
        id: 'sabaton_right',
        name: 'Sabaton (right)',
        equipped_texture_path: 'equipment/feet/sabatons/equipped-right.png',
        stats: {
          melee_accuracy: -2,
          melee_strength: 0,
          melee_defense: 10,
          ranged_accuracy: -15,
          ranged_strength: 0,
          ranged_defense: 10,
          magic_accuracy: 0,
          magic_strength: 0,
          magic_defense: -10
        }
      }
    ]
  }
};
