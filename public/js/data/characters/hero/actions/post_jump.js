import { HERO_ACTIONS, HERO_IMG } from '../../../../constants.js';
import postJumpDust from '../effects/postJumpDust.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = HERO_ACTIONS.postJump;

const img = 'url("' + HERO_IMG.prePostJump + '")';

const allowedActions = [
    HERO_ACTIONS.idle,
];

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({ dimensions, number: 2, left: 'scaleX(-1)', right: 'none' });

const effects = [postJumpDust];

export default {
  name,
  loop: false,
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
