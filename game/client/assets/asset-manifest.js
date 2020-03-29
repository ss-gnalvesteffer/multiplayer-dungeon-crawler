module.exports = {
  audio: {
    music: [
      {
        title: 'Into The Unknown',
        midi_path: 'assets/audio/music/1 - Into The Unknown.mid',
      },
      {
        title: 'Uncertain Lands',
        midi_path: 'assets/audio/music/2 - Uncertain Lands.mid',
      },
    ],
  },
  ui: {
    layout_texture_path: 'assets/ui/ui-layout.png',
  },
  environments: [
    {
      id: 'dungeon',
      name: 'Dungeon',
      background_north_texture_path_0: 'assets/environment/dungeon/background-north-0.png',
      background_north_texture_path_1: 'assets/environment/dungeon/background-north-1.png',
      background_east_texture_path_0: 'assets/environment/dungeon/background-east-0.png',      background_east_texture_path_1: 'assets/environment/dungeon/background-east-1.png',
      background_south_texture_path_0: 'assets/environment/dungeon/background-south-0.png',
      background_south_texture_path_1: 'assets/environment/dungeon/background-south-1.png',
      background_west_texture_path_0: 'assets/environment/dungeon/background-west-0.png',
      background_west_texture_path_1: 'assets/environment/dungeon/background-west-1.png',
      wall_back_left_texture_path: 'assets/environment/dungeon/wall-back-left.png',
      wall_back_middle_texture_path: 'assets/environment/dungeon/wall-back-middle.png',
      wall_back_right_texture_path: 'assets/environment/dungeon/wall-back-right.png',
      wall_left_texture_path_0: 'assets/environment/dungeon/wall-left-0.png',
      wall_left_texture_path_1: 'assets/environment/dungeon/wall-left-1.png',
      wall_right_texture_path_0: 'assets/environment/dungeon/wall-right-0.png',
      wall_right_texture_path_1: 'assets/environment/dungeon/wall-right-1.png',
      wall_front_texture_path_0: 'assets/environment/dungeon/wall-front-0.png',
      wall_front_texture_path_1: 'assets/environment/dungeon/wall-front-1.png',
    },
  ],
  maps: [
    {
      id: 'start',
      name: 'Dungeon',
      environment_id: 'dungeon',
      size: 10,
      tile_id_map: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      id: 'dungeon-0',
      name: 'Dungeon',
      environment_id: 'dungeon',
      size: 10,
      tile_id_map: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
  ],
  character: {
    base: {
      head: {
        texture_path: 'assets/character/base/head.png',
      },
      left_arm: {
        texture_path: 'assets/character/base/left-arm.png',
      },
      left_foot: {
        texture_path: 'assets/character/base/left-foot.png',
      },
      left_hand: {
        texture_path: 'assets/character/base/left-hand.png',
      },
      legs: {
        texture_path: 'assets/character/base/legs.png',
      },
      right_arm: {
        texture_path: 'assets/character/base/right-arm.png',
      },
      right_foot: {
        texture_path: 'assets/character/base/right-foot.png',
      },
      right_hand_lower: {
        texture_path: 'assets/character/base/right-hand-lower.png',
      },
      right_hand_upper: {
        texture_path: 'assets/character/base/right-hand-upper.png',
      },
      torso: {
        texture_path: 'assets/character/base/torso.png',
      },
    }
  },
};
