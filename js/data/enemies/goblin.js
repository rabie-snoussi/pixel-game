import { GOBLIN_IMG, GOBLIN_SIZE, GOBLIN_ACTIONS } from '../../constants.js';

export default {
  idle: {
    name: GOBLIN_ACTIONS.idle,
    loop: true,
    canMove: true,
    img: GOBLIN_IMG.idle,
    possibleActions: [],
    number: 4,
    dimensions: {
      height: 16 * GOBLIN_SIZE,
      width: 16 * GOBLIN_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * GOBLIN_SIZE,
        y: 0 * GOBLIN_SIZE,
      },
      b: {
        x: 16 * GOBLIN_SIZE,
        y: 0 * GOBLIN_SIZE,
      },
      c: {
        x: 16 * GOBLIN_SIZE,
        y: 16 * GOBLIN_SIZE,
      },
      d: {
        x: 0 * GOBLIN_SIZE,
        y: 16 * GOBLIN_SIZE,
      },
    },
  },
};
