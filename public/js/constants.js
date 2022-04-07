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

export const SLIME_IMG = {
  idle: './assets/enemies/slime/slime_idle_anim_strip_5.png',
};

export const RESOLUTION_MULTIPLIER = 1.8;

export const HERO_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const GOBLIN_SIZE = 2 * RESOLUTION_MULTIPLIER;

export const SLIME_SIZE = 2 * RESOLUTION_MULTIPLIER;

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
  death: 'death'
};

export const GOBLIN_ACTIONS = {
  idle: 'idle',
  run: 'run',
  attack: 'attack',
  hit: 'hit',
  death: 'death'
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

export const WATERFALL_IMG = './assets/tiles_background_foreground/waterfall_anim_strip_4.png';

export const WATERFALL_IMG_SIZE = 256 * RESOLUTION_MULTIPLIER + 'px' + ' ' + 64 * RESOLUTION_MULTIPLIER + 'px';

export const WATERFALL_BOTTOM_IMG = './assets/tiles_background_foreground/waterfall_bottom_anim_strip_4.png';

export const WATERFALL_BOTTOM_IMG_SIZE = 128 * RESOLUTION_MULTIPLIER + 'px' + ' ' + 16 * RESOLUTION_MULTIPLIER + 'px';

export const TILES_IMG =
  './assets/tiles_background_foreground/tileset_32x32.png';

export const TILES_IMG_SIZE = 384 * RESOLUTION_MULTIPLIER + 'px';

export const TILE_DIMENSIONS = {
  height: 32 * RESOLUTION_MULTIPLIER,
  width: 32 * RESOLUTION_MULTIPLIER,
};

export const GRID_DIMENSIONS = {
  height: 16 * RESOLUTION_MULTIPLIER,
  width: 16 * RESOLUTION_MULTIPLIER,
};

export const WATERFALL_DIMENSIONS = {
  height: 64 * RESOLUTION_MULTIPLIER,
  width: 32 * RESOLUTION_MULTIPLIER,
};

export const WATERFALL_BOTTOM_DIMENSIONS = {
  height: 16 * RESOLUTION_MULTIPLIER,
  width: 32 * RESOLUTION_MULTIPLIER,
};

export const SMALLER_GRID_DIMENSIONS = {
  height: 16 * RESOLUTION_MULTIPLIER,
  width: 16 * RESOLUTION_MULTIPLIER,
};

export const MAP_MATERIALS = {
  bgTile: {
    name: 'bgTile',
    dimensions: TILE_DIMENSIONS,
    img: TILES_IMG,
    imgSize: TILES_IMG_SIZE,
    animation: false,
    collision: false,
  },
  tile: {
    name: 'tile',
    dimensions: TILE_DIMENSIONS,
    img: TILES_IMG,
    imgSize: TILES_IMG_SIZE,
    animation: false,
    collision: true,
  },
  waterfall: {
    name: 'waterfall',
    dimensions: WATERFALL_DIMENSIONS,
    img: WATERFALL_IMG,
    imgSize: WATERFALL_IMG_SIZE,
    animation: true,
    collision: false,
    zIndex: 1,
  },
  waterfallBottom: {
    name: 'waterfallBottom',
    dimensions: WATERFALL_BOTTOM_DIMENSIONS,
    img: WATERFALL_BOTTOM_IMG,
    imgSize: WATERFALL_BOTTOM_IMG_SIZE,
    animation: true,
    collision: false,
    zIndex: 1,
  },
};

const makeGrid = (dimensions) => {
  const columnsNumber = SCREEN_LIMITS.x.end/dimensions.width;
  const rowsNumber = SCREEN_LIMITS.y.end/dimensions.height;
  const grid = [];

  for (let x = 0; x < columnsNumber; x++) {
    grid.push([]);

    for (let y = 0; y < rowsNumber; y++) {
      const cell = { x: x * dimensions.width, y: y * dimensions.height }
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
        { x: 0 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -2 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    black: [
      [
        { x: -6 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -6 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -6 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -7 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -7 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -7 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -8 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -8 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -8 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    brown: [
      [
        { x: 0 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -2 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
    ],
  },
  reversed: {
    green: [
      [
        { x: -3 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -4 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -5 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    black: [
      [
        { x: -9 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -9 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -9 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    brown: [
      [
        { x: -3 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -4 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -5 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
    ],
  },
  floating: {
    green: [
      { x: -6 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
      { x: -7 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
      { x: -8 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
    ],
    black: [
      { x: -6 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
      { x: -7 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
      { x: -8 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
    ],
  },
};