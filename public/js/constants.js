import { makeGrid } from './helpers.js';

// GENERAL

export const ACCELERATION = 1;

export const DIRECTIONS = {
  left: 'left',
  right: 'right',
};

export const SCREEN_LIMITS = {
  x: {
    start: 0,
    end: 800,
  },
  y: {
    start: 0,
    end: 448,
  },
};

export const GRID_DIMENSIONS = {
  height: 16,
  width: 16,
};

export const GRID = makeGrid(GRID_DIMENSIONS, SCREEN_LIMITS);

export const SECRET = 'U2FsdGVkX197GLBi18OkXWz3ayZoKceP+oXcDc4qY3o';

export const STORAGE_KEYS = {
  data: 'data',
  settings: 'settings',
};

export const INITIAL_SETTINGS = {
  grid: false,
  hitbox: false,
  hurtbox: false,
  music: false,
  sfx: true,
};

export const INITIAL_DATA = {
  map: 0,
  hearts: 5,
  coins: 0,
};

// GAME

export const ANIMATION_INTERVAL = 100;

export const MOVEMENT_INTERVAL = 30;

export const GAME_LOOP_INTERVAL = 30;

// HUD

export const HUD_IMG = {
  heart: './assets/hud/heart_hud.png',
  coin: './assets/hud/coin.png',
  font: './assets/hud/font.png',
  arrow: './assets/hud/select_icon_anim_strip_5.png',
};

export const MENU_OPTIONS = {
  start: 'start',
  continue: 'continue',
  resume: 'resume',
  restart: 'restart',
  quit: 'quit',
  grid: 'grid',
  hurtbox: 'hurtbox',
  hitbox: 'hitbox',
  music: 'music',
  sfx: 'sfx',
};

export const ON = 'on';

export const OFF = 'off';

export const MENU_TITLES = {
  plateformGame: 'plateform game',
  gamePaused: 'game paused',
  gameOver: 'game over',
  gameWon: 'game won',
};

// HERO

export const HERO_SPEED = 8;

export const MAX_JUMPS = 2;

export const HERO_JUMP_SPEED = 10;

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
  push: './assets/hero/herochar_pushing_foward_anim_strip_6.png',
  hit: './assets/hero/herochar_hit_anim_strip_3.png',
  death: './assets/hero/herochar_death_anim_strip_8.png',
};

export const HERO_ACTIONS = {
  idle: 'idle',
  attack: 'attack',
  run: 'run',
  jump: 'jump',
  doubleJump: 'doubleJump',
  postJump: 'postJump',
  fall: 'fall',
  push: 'push',
  hit: 'hit',
  death: 'death',
};

export const HERO_EFFECTS = {
  sword: 'sword',
  preJumpDust: 'preJumpDust',
  postJumpDust: 'postJumpDust',
};

// MONSTER

export const MONSTERS = {
  goblin: 'goblin',
};

export const MONSTER_ACTIONS = {
  idle: 'idle',
  run: 'run',
  attack: 'attack',
  hit: 'hit',
  death: 'death',
};

export const MONSTER_SPEED = {
  goblin: 2,
};

export const MONSTER_HEALTH = { goblin: 3 };

export const MONSTER_ATTACK_INTERVAL = { goblin: 1000 };

export const MONSTER_IMG = {
  goblin: {
    idle: './assets/enemies/goblin/goblin_idle_anim_strip_4.png',
    run: './assets/enemies/goblin/goblin_run_anim_strip_6.png',
    attack: './assets/enemies/goblin/goblin_attack_anim_strip_4.png',
    hit: './assets/enemies/goblin/goblin_hit_anim_strip_3.png',
    death: './assets/enemies/goblin/goblin_death_anim_strip_6.png',
  },
};

// MISCS

export const MISCS = {
  door: 'door',
  woodSlabLeft: 'woodSlabLeft',
  woodSlabMiddle: 'woodSlabMiddle',
  woodSlabRight: 'woodSlabRight',
  button: 'button',
  lever: 'lever',
  coin: 'coin',
  apple: 'apple',
  stone: 'stone',
  mushroom: 'mushroom',
  spikes: 'spikes',
  water: 'water',
  orb: 'orb',
};

export const MISC_IMG = {
  door: {
    closed: './assets/miscellaneous/strange_door_closed_anim_strip_10.png',
    opening: './assets/miscellaneous/strange_door_opening_anim_strip_14.png',
  },
  button: {
    enabled: './assets/miscellaneous/button_pressed.png',
    disabled: './assets/miscellaneous/button.png',
  },
  lever: {
    enabled: './assets/miscellaneous/lever_turned_right.png',
    disabled: './assets/miscellaneous/lever_turned_left.png',
  },
  coin: {
    initial: './assets/miscellaneous/coin_anim_strip_6.png',
    collect: './assets/miscellaneous/coin_collected_anim_strip_6.png',
  },
  apple: {
    initial: './assets/miscellaneous/apple_item.png',
  },
  stone: {
    initial: './assets/miscellaneous/stone.png',
  },
  woodSlabLeft: './assets/miscellaneous/wood_slab_left.png',
  woodSlabMiddle: './assets/miscellaneous/wood_slab_middle.png',
  woodSlabRight: './assets/miscellaneous/wood_slab_right.png',
  mushroom: {
    initial: './assets/enemies/mushroom/mushroom_crushed_anim_strip_6.png',
  },
  spikes: {
    initial: './assets/miscellaneous/spikes.png',
  },
  water: {
    initial: './assets/miscellaneous/water_32x32.png',
  },
  orb: {
    initial: './assets/miscellaneous/save_point_anim_strip_9.png',
    activated: './assets/miscellaneous/save_point_saving_anim_strip_3.png',
  },
};

export const MISC_STATES = {
  closed: 'closed',
  opening: 'opening',
  closing: 'closing',
  enabled: 'enabled',
  disabled: 'disabled',
  initial: 'initial',
  collect: 'collect',
  activated: 'activated',
};

// CONTROLS

export const KEY_CODES = {
  spacebar: 32,
  right: 39,
  left: 37,
  up: 38,
  down: 40,
  escape: 27,
};

// MAP

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
  waterfall: 256 + 'px',
  waterfallBottom: 128 + 'px',
  tiles: 384 + 'px',
  woodenPlate: 32 + 'px',
  woodSlab: 32 + 'px',
  torch: 192 + 'px',
  root: 32 + 'px',
  grass: 32 + 'px',
  flowers: 32 + 'px',
  drygrass: 32 + 'px',
  bigflowers: 32 + 'px',
  arrowPlateLeft: 32 + 'px',
  arrowPlateRight: 32 + 'px',
};

const MATERIALS_DIMENSIONS = {
  tiles: {
    height: 32,
    width: 32,
  },
  waterfall: {
    height: 64,
    width: 32,
  },
  waterfallBottom: {
    height: 16,
    width: 32,
  },
  woodenPlate: {
    height: 32,
    width: 32,
  },
  woodSlab: {
    height: 16,
    width: 32,
  },
  torch: {
    height: 48,
    width: 16,
  },
  root: {
    height: 16,
    width: 32,
  },
  grass: {
    height: 16,
    width: 32,
  },
  flowers: {
    height: 16,
    width: 32,
  },
  drygrass: {
    height: 16,
    width: 32,
  },
  bigflowers: {
    height: 16,
    width: 32,
  },
  arrowPlate: {
    height: 32,
    width: 32,
  },
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
  },
};

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
          x: -10 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -10 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -10 * MATERIALS_DIMENSIONS.tiles.width,
          y: -2 * MATERIALS_DIMENSIONS.tiles.height,
        },
      ],
      [
        {
          x: -11 * MATERIALS_DIMENSIONS.tiles.width,
          y: 0 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -11 * MATERIALS_DIMENSIONS.tiles.width,
          y: -1 * MATERIALS_DIMENSIONS.tiles.height,
        },
        {
          x: -11 * MATERIALS_DIMENSIONS.tiles.width,
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
