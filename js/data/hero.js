import {
  HERO_ACTIONS,
  HERO_ATTACK_IMG,
  HERO_FALL_IMG,
  HERO_IDLE_IMG,
  HERO_JUMP_IMG,
  HERO_RUN_IMG,
  HERO_SWORD_ATTACK_IMG,
  HERO_DOUBLE_JUMP_IMG,
  HERO_PRE_POST_JUMP_IMG,
} from '../constants.js';

export const HERO_SPRITS = {
  idle: {
    name: HERO_ACTIONS.idle,
    loop: true,
    canMove: true,
    img: HERO_IDLE_IMG,
    possibleActions: [
      HERO_ACTIONS.attack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.swordAttack,
      HERO_ACTIONS.preJump,
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
    name: HERO_ACTIONS.attack,
    loop: false,
    canMove: false,
    img: HERO_ATTACK_IMG,
    possibleActions: [],
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
  swordAttack: {
    name: HERO_ACTIONS.swordAttack,
    loop: false,
    canMove: false,
    img: HERO_SWORD_ATTACK_IMG,
    possibleActions: [HERO_ACTIONS.idle],
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
    name: HERO_ACTIONS.run,
    loop: true,
    canMove: true,
    img: HERO_RUN_IMG,
    possibleActions: [
      HERO_ACTIONS.idle,
      HERO_ACTIONS.swordAttack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.preJump,
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
  preJump: {
    name: HERO_ACTIONS.preJump,
    loop: false,
    canMove: false,
    img: HERO_PRE_POST_JUMP_IMG,
    possibleActions: [HERO_ACTIONS.jump],
    number: 2,
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
    name: HERO_ACTIONS.jump,
    loop: true,
    canMove: true,
    img: HERO_JUMP_IMG,
    possibleActions: [HERO_ACTIONS.fall, HERO_ACTIONS.doubleJump],
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
  doubleJump: {
    name: HERO_ACTIONS.doubleJump,
    loop: true,
    canMove: true,
    img: HERO_DOUBLE_JUMP_IMG,
    possibleActions: [HERO_ACTIONS.postJump],
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
  postJump: {
    name: HERO_ACTIONS.postJump,
    loop: false,
    canMove: false,
    img: HERO_PRE_POST_JUMP_IMG,
    possibleActions: [HERO_ACTIONS.idle],
    number: 2,
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
    name: HERO_ACTIONS.fall,
    loop: true,
    canMove: true,
    img: HERO_FALL_IMG,
    possibleActions: [
      HERO_ACTIONS.idle,
      HERO_ACTIONS.doubleJump,
      HERO_ACTIONS.postJump,
    ],
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
