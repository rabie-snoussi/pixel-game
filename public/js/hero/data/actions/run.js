import { HERO_ACTIONS, HERO_IMG } from '../../../constants.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = HERO_ACTIONS.run;

const img = 'url("' + HERO_IMG.run + '")';

const allowedActions = [
    HERO_ACTIONS.idle,
    HERO_ACTIONS.preJump,
    HERO_ACTIONS.attack,
];

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({ dimensions, number: 6, left: 'scaleX(-1)', right: 'none' });

const effects = [];

export default {
  name,
  loop: true,
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
