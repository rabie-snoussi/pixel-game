import { HERO_ACTIONS, HERO_IMG } from '../../../constants.js';
import sword from '../effects/sword.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = HERO_ACTIONS.attack;

const img = 'url("' + HERO_IMG.attack + '")';

const allowedActions = [
  HERO_ACTIONS.idle,
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

const effects = [sword];

export default {
  name,
  loop: false,
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
