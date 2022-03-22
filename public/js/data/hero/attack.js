import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import {
  getHurtbox,
  getVerteces,
  getDimensions,
  getFrames,
} from './helpers.js';

const name = HERO_ACTIONS.attack;

const img = 'url("' + HERO_IMG.attack + '")';

const allowedActions = [
  HERO_ACTIONS.idle,
  HERO_ACTIONS.run,
  HERO_ACTIONS.preJump,
];

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({
  dimensions,
  number: 4,
  left: 'scaleX(-1)',
  right: 'none',
});

export default {
  name,
  loop: false,
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
