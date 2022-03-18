import {
  HERO_ACTIONS,
  HERO_ATTACK_IMG,
  HERO_FALL_IMG,
  HERO_IDLE_IMG,
  HERO_JUMP_IMG,
  HERO_RUN_IMG,
  HERO_SWORD_ATTACK_IMG,
} from '../constants.js';

export const HERO_SPRITS = {
  idle: {
    loop: true,
    can_move: true,
    img: HERO_IDLE_IMG,
    possible_actions: [
      HERO_ACTIONS.attack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.sword_attack,
      HERO_ACTIONS.jump,
      HERO_ACTIONS.fall,
    ],
    number: 4,
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
    loop: false,
    can_move: false,
    img: HERO_ATTACK_IMG,
    possible_actions: [],
    number: 4,
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
    loop: false,
    can_move: false,
    img: HERO_SWORD_ATTACK_IMG,
    possible_actions: [HERO_ACTIONS.idle],
    number: 4,
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
    loop: true,
    can_move: true,
    img: HERO_RUN_IMG,
    possible_actions: [
      HERO_ACTIONS.idle,
      HERO_ACTIONS.sword_attack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.jump,
      HERO_ACTIONS.fall,
    ],
    number: 6,
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
  jump: {
    loop: true,
    can_move: true,
    img: HERO_JUMP_IMG,
    possible_actions: [HERO_ACTIONS.idle, HERO_ACTIONS.fall],
    number: 3,
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
  fall: {
    loop: true,
    can_move: true,
    img: HERO_FALL_IMG,
    possible_actions: [HERO_ACTIONS.idle],
    number: 3,
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
