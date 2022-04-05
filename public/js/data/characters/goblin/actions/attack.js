import { GOBLIN_ACTIONS, GOBLIN_IMG } from '../../../../constants.js';
import attack from '../effects/attack.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
  addPosition,
} from '../helpers.js';

const name = GOBLIN_ACTIONS.attack;

const img = 'url("' + GOBLIN_IMG.attack + '")';

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frameDimensions = getDimensions({ height: 16, width: 24 });

const frames = getFrames({ dimensions: frameDimensions, number: 4, left: 'scaleX(-1)', right: 'none' });

const effects = [attack];

const position = {
  right: { x: 0, y: 0 },
  left: { x: -8, y: 0 },
};

const getPosition = addPosition(position);

export default {
  name,
  loop: false,
  canMove: true,
  img,
  effects,
  hurtbox: getBox(verteces),
  frames,
  dimensions: {
    height: frameDimensions.height + 'px',
    width: frameDimensions.width + 'px',
  },
  getPosition
};
