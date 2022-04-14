export const HERO_IMG = {
  idle: './assets/hero/herochar_idle_anim_strip_4.png',
  attack: './assets/hero/herochar_attack_anim_strip_4.png',
  sword: './assets/hero/sword_effect_strip_4.png',
  run: './assets/hero/herochar_run_anim_strip_6.png',
  prePostJump: './assets/hero/herochar_before_or_after_jump_strip_2.png',
  jump: './assets/hero/herochar_jump_up_anim_strip_3.png',
  doubleJump: './assets/hero/herochar_jump_double_anim_strip_3.png',
  fall: './assets/hero/herochar_jump_down_anim_strip_3.png',
  preJumpDust: './assets/hero/herochar_before_jump_dust_anim_strip_4.png',
  postJumpDust: './assets/hero/herochar_after_jump_dust_anim_strip_4.png',
};

export const GOBLIN_IMG = {
  idle: './assets/enemies/goblin/goblin_idle_anim_strip_4.png',
  run: './assets/enemies/goblin/goblin_run_anim_strip_6.png',
  attack: './assets/enemies/goblin/goblin_attack_anim_strip_4.png',
  hit: './assets/enemies/goblin/goblin_hit_anim_strip_3.png',
  death: './assets/enemies/goblin/goblin_death_anim_strip_6.png',
};

export const COIN_IMG = {
  initial: './assets/miscellaneous/coin_anim_strip_6.png',
  collect: './assets/miscellaneous/coin_collected_anim_strip_6.png',
};

export const HEALTH_POTION_IMG = {
  initial: './assets/miscellaneous/health_potion.png',
};

export const BUTTON_IMG = {
  enabled: './assets/miscellaneous/button_pressed.png',
  disabled: './assets/miscellaneous/button.png',
};

export const LEVER_IMG = {
  enabled: './assets/miscellaneous/lever_turned_right.png',
  disabled: './assets/miscellaneous/lever_turned_left.png',
};

export const SLIME_IMG = {
  idle: './assets/enemies/slime/slime_idle_anim_strip_5.png',
};

export const RESOLUTION_MULTIPLIER = 1.8;

export const HERO_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const GOBLIN_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const COIN_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const HEALTH_POTION_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const SLIME_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const BUTTON_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const LEVER_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const HERO_SPEED = 8 * RESOLUTION_MULTIPLIER;

export const HERO_JUMP_SPEED = 10 * RESOLUTION_MULTIPLIER;

export const GOBLIN_SPEED = 2 * RESOLUTION_MULTIPLIER;

export const GOBLIN_HEALTH = 2;

export const GOBLIN_ATTACK_INTERVAL = 1000;

export const ANIMATION_INTERVAL = 100;

export const MOVEMENT_INTERVAL = 30;

export const GAME_LOOP_INTERVAL = 30;

export const MAX_JUMPS = 2;

export const ACCELERATION = 2;

export const DIRECTIONS = {
  left: 'left',
  right: 'right',
};

export const HERO_ACTIONS = {
  idle: 'idle',
  attack: 'attack',
  run: 'run',
  preJump: 'preJump',
  jump: 'jump',
  doubleJump: 'doubleJump',
  postJump: 'postJump',
  fall: 'fall',
};

export const HERO_EFFECTS = {
  sword: 'sword',
  preJumpDust: 'preJumpDust',
  postJumpDust: 'postJumpDust',
};

export const MONSTER_ACTIONS = {
  idle: 'idle',
  run: 'run',
  attack: 'attack',
  hit: 'hit',
  death: 'death',
};

export const GOBLIN_ACTIONS = {
  idle: 'idle',
  run: 'run',
  attack: 'attack',
  hit: 'hit',
  death: 'death',
};

export const COIN_STATES = {
  initial: 'initial',
  collect: 'collect',
};

export const HEALTH_POTION_STATES = {
  initial: 'initial',
};

export const BUTTON_STATES = {
  enabled: 'enabled',
  disabled: 'disabled',
};

export const LEVER_STATES = {
  enabled: 'enabled',
  disabled: 'disabled',
};

export const SLIME_ACTIONS = {
  idle: 'idle',
};

export const SCREEN_LIMITS = {
  x: {
    start: 0,
    end: 800 * RESOLUTION_MULTIPLIER,
  },
  y: {
    start: 0,
    end: 448 * RESOLUTION_MULTIPLIER,
  },
};

export const KEY_CODES = {
  spacebar: 32,
  right: 39,
  left: 37,
  up: 38,
  down: 40,
};

export const SIMULTANOUS_KEYS = {
  [KEY_CODES.up]: {
    [KEY_CODES.right]: true,
    [KEY_CODES.left]: true,
  },
  [KEY_CODES.right]: {
    [KEY_CODES.up]: true,
    [KEY_CODES.spacebar]: true,
    [KEY_CODES.down]: true,
  },
  [KEY_CODES.left]: {
    [KEY_CODES.up]: true,
    [KEY_CODES.spacebar]: true,
    [KEY_CODES.down]: true,
  },
  [KEY_CODES.spacebar]: {
    [KEY_CODES.left]: true,
    [KEY_CODES.right]: true,
  },
  [KEY_CODES.down]: {
    [KEY_CODES.left]: true,
    [KEY_CODES.right]: true,
  },
};

export const BG_2_IMG = './assets/tiles_background_foreground/bg_2.png';

export const FG_0_IMG = './assets/tiles_background_foreground/fg_0.png';

export const FG_1_IMG = './assets/tiles_background_foreground/fg_1.png';

const MATERIALS_IMG = {
  waterfall: './assets/tiles_background_foreground/waterfall_anim_strip_4.png',
  waterfallBottom:
    './assets/tiles_background_foreground/waterfall_bottom_anim_strip_4.png',
  tiles: './assets/tiles_background_foreground/tileset_32x32.png',
  woodenPlate: './assets/miscellaneous/wooden_plate.png',
  woodSlabRight: './assets/miscellaneous/wood_slab_right.png',
  woodSlabMiddle: './assets/miscellaneous/wood_slab_middle.png',
  woodSlabLeft: './assets/miscellaneous/wood_slab_left.png',
  torch: './assets/miscellaneous/tiki_torch_props_strip_12.png',
  root: './assets/miscellaneous/root_props.png',
  grass: './assets/miscellaneous/grass_props.png',
  flowers: './assets/miscellaneous/flowers_props.png',
  drygrass: './assets/miscellaneous/drygrass_props.png',
  bigflowers: './assets/miscellaneous/bigflowers_props.png',
  arrowPlateLeft: './assets/miscellaneous/arrow_plate_left.png',
  arrowPlateRight: './assets/miscellaneous/arrow_plate_right.png',
};

const MATERIALS_SIZE = {
  waterfall: 256 * RESOLUTION_MULTIPLIER + 'px',
  waterfallBottom: 128 * RESOLUTION_MULTIPLIER + 'px',
  tiles: 384 * RESOLUTION_MULTIPLIER + 'px',
  woodenPlate: 32 * RESOLUTION_MULTIPLIER + 'px',
  woodSlab: 32 * RESOLUTION_MULTIPLIER + 'px',
  torch: 192 * RESOLUTION_MULTIPLIER + 'px',
  root: 32 * RESOLUTION_MULTIPLIER + 'px',
  grass: 32 * RESOLUTION_MULTIPLIER + 'px',
  flowers: 32 * RESOLUTION_MULTIPLIER + 'px',
  drygrass: 32 * RESOLUTION_MULTIPLIER + 'px',
  bigflowers: 32 * RESOLUTION_MULTIPLIER + 'px',
  arrowPlateLeft: 32 * RESOLUTION_MULTIPLIER + 'px',
  arrowPlateRight: 32 * RESOLUTION_MULTIPLIER + 'px',
};

const MATERIALS_DIMENSIONS = {
  tiles: {
    height: 32 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  waterfall: {
    height: 64 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  waterfallBottom: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  woodenPlate: {
    height: 32 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  woodSlab: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  torch: {
    height: 48 * RESOLUTION_MULTIPLIER,
    width: 16 * RESOLUTION_MULTIPLIER,
  },
  root: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  grass: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  flowers: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  drygrass: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  bigflowers: {
    height: 16 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  },
  arrowPlate: {
    height: 32 * RESOLUTION_MULTIPLIER,
    width: 32 * RESOLUTION_MULTIPLIER,
  }
};

export const GRID_DIMENSIONS = {
  height: 16 * RESOLUTION_MULTIPLIER,
  width: 16 * RESOLUTION_MULTIPLIER,
};

export const SMALLER_GRID_DIMENSIONS = {
  height: 16 * RESOLUTION_MULTIPLIER,
  width: 16 * RESOLUTION_MULTIPLIER,
};

export const MAP_MATERIALS = {
  bgTile: {
    name: 'bgTile',
    dimensions: MATERIALS_DIMENSIONS.tiles,
    img: MATERIALS_IMG.tiles,
    imgSize: MATERIALS_SIZE.tiles,
    animation: false,
    collision: false,
  },
  tile: {
    name: 'tile',
    dimensions: MATERIALS_DIMENSIONS.tiles,
    img: MATERIALS_IMG.tiles,
    imgSize: MATERIALS_SIZE.tiles,
    animation: false,
    collision: true,
  },
  waterfall: {
    name: 'waterfall',
    dimensions: MATERIALS_DIMENSIONS.waterfall,
    img: MATERIALS_IMG.waterfall,
    imgSize: MATERIALS_SIZE.waterfall,
    animation: true,
    collision: false,
    zIndex: 1,
  },
  waterfallBottom: {
    name: 'waterfallBottom',
    dimensions: MATERIALS_DIMENSIONS.waterfallBottom,
    img: MATERIALS_IMG.waterfallBottom,
    imgSize: MATERIALS_SIZE.waterfallBottom,
    animation: true,
    collision: false,
    zIndex: 1,
  },
  woodenPlate: {
    name: 'woodenPlate',
    dimensions: MATERIALS_DIMENSIONS.woodenPlate,
    img: MATERIALS_IMG.woodenPlate,
    imgSize: MATERIALS_SIZE.woodenPlate,
    animation: false,
    collision: false,
  },
  woodSlabRight: {
    name: 'woodSlabRight',
    dimensions: MATERIALS_DIMENSIONS.woodSlab,
    img: MATERIALS_IMG.woodSlabRight,
    imgSize: MATERIALS_SIZE.woodSlab,
    animation: false,
    collision: true,
  },
  woodSlabMiddle: {
    name: 'woodSlabMiddle',
    dimensions: MATERIALS_DIMENSIONS.woodSlab,
    img: MATERIALS_IMG.woodSlabMiddle,
    imgSize: MATERIALS_SIZE.woodSlab,
    animation: false,
    collision: true,
  },
  woodSlabLeft: {
    name: 'woodSlabLeft',
    dimensions: MATERIALS_DIMENSIONS.woodSlab,
    img: MATERIALS_IMG.woodSlabLeft,
    imgSize: MATERIALS_SIZE.woodSlab,
    animation: false,
    collision: true,
  },
  torch: {
    name: 'torch',
    dimensions: MATERIALS_DIMENSIONS.torch,
    img: MATERIALS_IMG.torch,
    imgSize: MATERIALS_SIZE.torch,
    animation: true,
    collision: false,
  },
  root: {
    name: 'root',
    dimensions: MATERIALS_DIMENSIONS.root,
    img: MATERIALS_IMG.root,
    imgSize: MATERIALS_SIZE.root,
    animation: false,
    collision: false,
  },
  grass: {
    name: 'grass',
    dimensions: MATERIALS_DIMENSIONS.grass,
    img: MATERIALS_IMG.grass,
    imgSize: MATERIALS_SIZE.grass,
    animation: false,
    collision: false,
  },
  flowers: {
    name: 'flowers',
    dimensions: MATERIALS_DIMENSIONS.flowers,
    img: MATERIALS_IMG.flowers,
    imgSize: MATERIALS_SIZE.flowers,
    animation: false,
    collision: false,
  },
  drygrass: {
    name: 'drygrass',
    dimensions: MATERIALS_DIMENSIONS.drygrass,
    img: MATERIALS_IMG.drygrass,
    imgSize: MATERIALS_SIZE.drygrass,
    animation: false,
    collision: false,
  },
  bigflowers: {
    name: 'bigflowers',
    dimensions: MATERIALS_DIMENSIONS.bigflowers,
    img: MATERIALS_IMG.bigflowers,
    imgSize: MATERIALS_SIZE.bigflowers,
    animation: false,
    collision: false,
  },
  arrowPlateLeft: {
    name: 'arrowPlateLeft',
    dimensions: MATERIALS_DIMENSIONS.arrowPlate,
    img: MATERIALS_IMG.arrowPlateLeft,
    imgSize: MATERIALS_SIZE.arrowPlateLeft,
    animation: false,
    collision: false,
  },
  arrowPlateRight: {
    name: 'arrowPlateRight',
    dimensions: MATERIALS_DIMENSIONS.arrowPlate,
    img: MATERIALS_IMG.arrowPlateRight,
    imgSize: MATERIALS_SIZE.arrowPlateRight,
    animation: false,
    collision: false,
  }
};

const makeGrid = (dimensions) => {
  const columnsNumber = SCREEN_LIMITS.x.end / dimensions.width;
  const rowsNumber = SCREEN_LIMITS.y.end / dimensions.height;
  const grid = [];

  for (let x = 0; x < columnsNumber; x++) {
    grid.push([]);

    for (let y = 0; y < rowsNumber; y++) {
      const cell = { x: x * dimensions.width, y: y * dimensions.height };
      grid[x].push(cell);
    }
  }
  return grid;
};

export const GRID = makeGrid(GRID_DIMENSIONS);

export const TILES = {
  normal: {
    green: [
      [
        {
          x: 0 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: 0 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: 0 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -2 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -2 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -2 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
    ],
    black: [
      [
        {
          x: -6 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -6 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -6 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -7 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -7 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -7 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -8 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -8 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -8 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
    ],
    brown: [
      [
        {
          x: 0 * MATERIALS_DIMENSIONS.tiles.width,
          y: -3 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: 0 * MATERIALS_DIMENSIONS.tiles.width,
          y: -4 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: 0 * MATERIALS_DIMENSIONS.tiles.width,
          y: -5 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -3 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -4 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -5 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -2 * MATERIALS_DIMENSIONS.tiles.width,
          y: -3 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -2 * MATERIALS_DIMENSIONS.tiles.width,
          y: -4 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -2 * MATERIALS_DIMENSIONS.tiles.width,
          y: -5 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
    ],
  },
  reversed: {
    green: [
      [
        {
          x: -3 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -3 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -3 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -4 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -4 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -4 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -5 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -5 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -5 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
    ],
    black: [
      [
        {
          x: -9 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -9 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -9 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -1 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
    ],
    brown: [
      [
        {
          x: -3 * MATERIALS_DIMENSIONS.tiles.width,
          y: -3 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -3 * MATERIALS_DIMENSIONS.tiles.width,
          y: -4 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -3 * MATERIALS_DIMENSIONS.tiles.width,
          y: -5 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -4 * MATERIALS_DIMENSIONS.tiles.width,
          y: -3 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -4 * MATERIALS_DIMENSIONS.tiles.width,
          y: -4 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -4 * MATERIALS_DIMENSIONS.tiles.width,
          y: -5 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -5 * MATERIALS_DIMENSIONS.tiles.width,
          y: -3 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -5 * MATERIALS_DIMENSIONS.tiles.width,
          y: -4 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -5 * MATERIALS_DIMENSIONS.tiles.width,
          y: -5 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
    ],
  },
  floating: {
    green: [
      {
        x: -6 * MATERIALS_DIMENSIONS.tiles.width,
        y: -3 * MATERIALS_DIMENSIONS.tiles.height,
      },
      {
        x: -7 * MATERIALS_DIMENSIONS.tiles.width,
        y: -3 * MATERIALS_DIMENSIONS.tiles.height,
      },
      {
        x: -8 * MATERIALS_DIMENSIONS.tiles.width,
        y: -3 * MATERIALS_DIMENSIONS.tiles.height,
      },
    ],
    black: [
      {
        x: -6 * MATERIALS_DIMENSIONS.tiles.width,
        y: -4 * MATERIALS_DIMENSIONS.tiles.height,
      },
      {
        x: -7 * MATERIALS_DIMENSIONS.tiles.width,
        y: -4 * MATERIALS_DIMENSIONS.tiles.height,
      },
      {
        x: -8 * MATERIALS_DIMENSIONS.tiles.width,
        y: -4 * MATERIALS_DIMENSIONS.tiles.height,
      },
    ],
  },
};
