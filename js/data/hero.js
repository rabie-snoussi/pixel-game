const HERO_IDLE_IMG = './assets/hero/herochar_idle_anim_strip_4.png';
const HERO_ATTACK_IMG = './assets/hero/herochar_attack_anim_strip_4.png';
const HERO_SWORD_ATTACK_IMG =
  './assets/hero/herochar_sword_attack_anim_strip_4.png';
const HERO_RUN_IMG = './assets/hero/herochar_run_anim_strip_6.png';

export const HERO_ACTIONS = {
  idle: 'idle',
  attack: 'attack',
  sword_attack: 'sword_attack',
  run: 'run',
};

export const HERO_SPRITS = {
  idle: {
    img: HERO_IDLE_IMG,
    possible_actions: [
      HERO_ACTIONS.idle,
      HERO_ACTIONS.attack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.sword_attack,
    ],
    sprits: 4,
    dimensions: {
      height: 16,
      width: 16,
    },
    hurtbox: {
      a: {
        x: 0,
        y: 0,
      },
      b: {
        x: 16,
        y: 0,
      },
      c: {
        x: 16,
        y: 16,
      },
      d: {
        x: 0,
        y: 16,
      },
    },
  },
  attack: {
    img: HERO_ATTACK_IMG,
    possible_actions: [],
    sprits: 4,
    dimensions: {
      height: 16,
      width: 16,
    },
    hurtbox: {
      a: {
        x: 0,
        y: 0,
      },
      b: {
        x: 16,
        y: 0,
      },
      c: {
        x: 16,
        y: 16,
      },
      d: {
        x: 0,
        y: 16,
      },
    },
  },
  sword_attack: {
    img: HERO_SWORD_ATTACK_IMG,
    possible_actions: [],
    sprits: 4,
    dimensions: {
      height: 16,
      width: 32,
    },
    hurtbox: {
      a: {
        x: 0,
        y: 0,
      },
      b: {
        x: 16,
        y: 0,
      },
      c: {
        x: 16,
        y: 16,
      },
      d: {
        x: 0,
        y: 16,
      },
    },
  },
  run: {
    img: HERO_RUN_IMG,
    possible_actions: [
      HERO_ACTIONS.attack,
      HERO_ACTIONS.idle,
      HERO_ACTIONS.sword_attack,
    ],
    sprits: 6,
    dimensions: {
      height: 16,
      width: 16,
    },
    hurtbox: {
      a: {
        x: 0,
        y: 0,
      },
      b: {
        x: 16,
        y: 0,
      },
      c: {
        x: 16,
        y: 16,
      },
      d: {
        x: 0,
        y: 16,
      },
    },
  },
};
