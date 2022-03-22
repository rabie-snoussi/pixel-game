import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import { getHurtbox, getVerteces, getDimensions, getFrames } from './helpers.js';

const name = HERO_ACTIONS.jump;

const img = 'url("' + HERO_IMG.jump + '")';

const allowedActions = [
    HERO_ACTIONS.doubleJump,
    HERO_ACTIONS.fall,
];

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({ dimensions, number: 3, left: 'scaleX(-1)', right: 'none' });

export default {
  name,
  loop: true,
  canMove: true,
  img,
  allowedActions,
  hurtbox: getHurtbox(verteces),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
