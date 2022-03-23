import { HERO_ACTIONS, HERO_IMG } from '../../../constants.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = HERO_ACTIONS.doubleJump;

const img = 'url("' + HERO_IMG.doubleJump + '")';

const allowedActions = [
    HERO_ACTIONS.fall,
    HERO_ACTIONS.attack,
];

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({ dimensions, number: 3, left: 'scaleX(-1)', right: 'none' });

const effects = [];

export default {
  name,
  loop: true,
  canMove: true,
  img,
  effects,
  allowedActions,
  hurtbox: getBox(verteces),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
