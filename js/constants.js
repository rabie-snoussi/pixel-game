export const HERO_IMG = {
  idle: './assets/hero/herochar_idle_anim_strip_4.png',
  attack: './assets/hero/herochar_attack_anim_strip_4.png',
  swordAttack: './assets/hero/herochar_sword_attack_anim_strip_4.png',
  run: './assets/hero/herochar_run_anim_strip_6.png',
  prePostJump: './assets/hero/herochar_before_or_after_jump_strip_2.png',
  jump: './assets/hero/herochar_jump_up_anim_strip_3.png',
  doubleJump: './assets/hero/herochar_jump_double_anim_strip_3.png',
  fall: './assets/hero/herochar_jump_down_anim_strip_3.png',
};

export const GOBLIN_IMG = {
  idle: './assets/enemies/goblin/goblin_idle_anim_strip_4.png',
};

export const HERO_SIZE = 4;

export const GOBLIN_SIZE = 4;

export const HERO_SPEED = 16;

export const ANIMATION_INTERVAL = 100;

export const MOVEMENT_INTERVAL = 30;

export const MAX_JUMPS = 2;

export const DIRECTIONS = {
  left: 'left',
  right: 'right',
};

export const HERO_ACTIONS = {
  idle: 'idle',
  attack: 'attack',
  swordAttack: 'swordAttack',
  run: 'run',
  preJump: 'preJump',
  jump: 'jump',
  doubleJump: 'doubleJump',
  postJump: 'postJump',
  fall: 'fall',
};

export const GOBLIN_ACTIONS = {
  idle: 'idle',
};

export const SCREEN_LIMITS = {
  x: {
    start: 0,
    end: 1600,
  },
  y: {
    start: 0,
    end: 896,
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
  },
  [KEY_CODES.left]: {
    [KEY_CODES.up]: true,
  },
};

export const BG_IMG = './assets/tiles_background_foreground/bg_2.png';

export const TILES_IMG =
  './assets/tiles_background_foreground/tileset_64x64.png';

export const TILE_DIMENSIONS = {
  height: 64,
  width: 64,
};

export const GRID_DIMENSIONS = {
  height: 64,
  width: 64,
};
