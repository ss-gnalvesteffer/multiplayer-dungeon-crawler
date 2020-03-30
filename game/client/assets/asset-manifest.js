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
    buttons: {
      interact: {
        inactive_texture_path: 'assets/ui/buttons/interact-inactive.png',
        active_texture_path: 'assets/ui/buttons/interact-active.png',
      },
      inventory: {
        inactive_texture_path: 'assets/ui/buttons/inventory-inactive.png',
        active_texture_path: 'assets/ui/buttons/inventory-active.png',
      },
      move_forward: {
        inactive_texture_path: 'assets/ui/buttons/move-forward-inactive.png',
        active_texture_path: 'assets/ui/buttons/move-forward-active.png',
      },
      move_backward: {
        inactive_texture_path: 'assets/ui/buttons/move-backward-inactive.png',
        active_texture_path: 'assets/ui/buttons/move-backward-active.png',
      },
      turn_left: {
        inactive_texture_path: 'assets/ui/buttons/turn-left-inactive.png',
        active_texture_path: 'assets/ui/buttons/turn-left-active.png',
      },
      turn_right: {
        inactive_texture_path: 'assets/ui/buttons/turn-right-inactive.png',
        active_texture_path: 'assets/ui/buttons/turn-right-active.png',
      },
    },
  },
  environments: [
    {
      id: 'dungeon',
      name: 'Dungeon',
      background_north_texture_path_0: 'assets/environment/dungeon/background-north-0.png',
      background_north_texture_path_1: 'assets/environment/dungeon/background-north-1.png',
      background_east_texture_path_0: 'assets/environment/dungeon/background-east-0.png',
      background_east_texture_path_1: 'assets/environment/dungeon/background-east-1.png',
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
    pivot_position: {x: 10, y: 103},
    body_parts: {
      head: {
        texture_path: 'assets/character/base/head.png',
        position: {x: 10, y: 2},
        pivot_position: {x: 6, y: 16},
      },
      left_arm: {
        texture_path: 'assets/character/base/left-arm.png',
        position: {x: 20, y: 6},
        pivot_position: {x: 2, y: 5},
        left_hand_connection_position: {x: 5, y: 31},
      },
      legs: {
        texture_path: 'assets/character/base/legs.png',
        position: {x: 10, y: 28},
        pivot_position: {x: 10, y: 5},
        left_foot_connection_position: {x: 26, y: 56},
        right_foot_connection_position: {x: 8, y: 49},
      },
      left_foot: {
        texture_path: 'assets/character/base/left-foot.png',
        pivot_position: {x: 2, y: 1},
      },
      right_foot: {
        texture_path: 'assets/character/base/right-foot.png',
        pivot_position: {x: 12, y: 1},
      },
      left_hand: {
        texture_path: 'assets/character/base/left-hand.png',
        pivot_position: {x: 7, y: 2},
      },
      right_arm: {
        texture_path: 'assets/character/base/right-arm.png',
        position: {x: 2, y: 8},
        pivot_position: {x: 9, y: 4},
        right_hand_connection_position: {x: 2, y: 28},
      },
      right_hand_lower: {
        texture_path: 'assets/character/base/right-hand-lower.png',
        pivot_position: {x: 6, y: 2},
      },
      right_hand_upper: {
        texture_path: 'assets/character/base/right-hand-upper.png',
        pivot_position: {x: 6, y: 1},
      },
      torso: {
        texture_path: 'assets/character/base/torso.png',
        position: {x: 10, y: 29},
        pivot_position: {x: 10, y: 29},
      },
    }
  },
};
