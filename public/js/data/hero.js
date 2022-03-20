import { HERO_ACTIONS, HERO_IMG, HERO_SIZE } from '../constants.js';

export default {
  idle: {
    name: HERO_ACTIONS.idle,
    loop: true,
    canMove: true,
    img: HERO_IMG.idle,
    possibleActions: [
      HERO_ACTIONS.attack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.swordAttack,
      HERO_ACTIONS.preJump,
      HERO_ACTIONS.fall,
    ],
    number: 4,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  attack: {
    name: HERO_ACTIONS.attack,
    loop: false,
    canMove: false,
    img: HERO_IMG.attack,
    possibleActions: [],
    number: 4,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  swordAttack: {
    name: HERO_ACTIONS.swordAttack,
    loop: false,
    canMove: false,
    img: HERO_IMG.swordAttack,
    possibleActions: [HERO_ACTIONS.idle],
    number: 4,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 32 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  run: {
    name: HERO_ACTIONS.run,
    loop: true,
    canMove: true,
    img: HERO_IMG.run,
    possibleActions: [
      HERO_ACTIONS.idle,
      HERO_ACTIONS.swordAttack,
      HERO_ACTIONS.run,
      HERO_ACTIONS.preJump,
      HERO_ACTIONS.fall,
    ],
    number: 6,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  preJump: {
    name: HERO_ACTIONS.preJump,
    loop: false,
    canMove: false,
    img: HERO_IMG.prePostJump,
    possibleActions: [HERO_ACTIONS.jump],
    number: 2,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  jump: {
    name: HERO_ACTIONS.jump,
    loop: true,
    canMove: true,
    img: HERO_IMG.jump,
    possibleActions: [HERO_ACTIONS.fall, HERO_ACTIONS.doubleJump],
    number: 3,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  doubleJump: {
    name: HERO_ACTIONS.doubleJump,
    loop: true,
    canMove: true,
    img: HERO_IMG.doubleJump,
    possibleActions: [HERO_ACTIONS.fall],
    number: 3,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  postJump: {
    name: HERO_ACTIONS.postJump,
    loop: false,
    canMove: false,
    img: HERO_IMG.prePostJump,
    possibleActions: [HERO_ACTIONS.idle],
    number: 2,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
  fall: {
    name: HERO_ACTIONS.fall,
    loop: true,
    canMove: true,
    img: HERO_IMG.fall,
    possibleActions: [
      HERO_ACTIONS.idle,
      HERO_ACTIONS.doubleJump,
      HERO_ACTIONS.postJump,
    ],
    number: 3,
    dimensions: {
      height: 16 * HERO_SIZE,
      width: 16 * HERO_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      b: {
        x: 16 * HERO_SIZE,
        y: 0 * HERO_SIZE,
      },
      c: {
        x: 16 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
      d: {
        x: 0 * HERO_SIZE,
        y: 16 * HERO_SIZE,
      },
    },
  },
};
