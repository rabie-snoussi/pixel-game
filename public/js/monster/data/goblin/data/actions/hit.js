import { GOBLIN_ACTIONS, GOBLIN_IMG } from '../../../../../constants.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
  addPosition,
} from '../helpers.js';

const name = GOBLIN_ACTIONS.hit;

const img = 'url("' + GOBLIN_IMG.hit + '")';

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({ dimensions, number: 4, left: 'scaleX(-1)', right: 'none' });

const effects = [];

const position = {
  right: { x: 0, y: 0 },
  left: { x: 0, y: 0 },
};

const getPosition = addPosition(position);

export default {
  name,
  loop: false,
  img,
  effects,
  hurtbox: getBox(verteces),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
  getPosition
};
