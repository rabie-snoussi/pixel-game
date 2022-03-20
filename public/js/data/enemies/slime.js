import { SLIME_IMG, SLIME_SIZE, SLIME_ACTIONS } from '../../constants.js';

export default {
  idle: {
    name: SLIME_ACTIONS.idle,
    loop: true,
    canMove: true,
    img: SLIME_IMG.idle,
    possibleActions: [],
    number: 5,
    dimensions: {
      height: 16 * SLIME_SIZE,
      width: 16 * SLIME_SIZE,
    },
    hurtbox: {
      a: {
        x: 0 * SLIME_SIZE,
        y: 0 * SLIME_SIZE,
      },
      b: {
        x: 16 * SLIME_SIZE,
        y: 0 * SLIME_SIZE,
      },
      c: {
        x: 16 * SLIME_SIZE,
        y: 16 * SLIME_SIZE,
      },
      d: {
        x: 0 * SLIME_SIZE,
        y: 16 * SLIME_SIZE,
      },
    },
  },
};
