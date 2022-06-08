import { MONSTER_ACTIONS, MONSTER_IMG } from '../../../constants.js';
import attack from '../effects/attack.js';
import {
  getBox,
  createVertices,
  getFrames,
  addPosition,
} from '../../../helpers.js';

const name = MONSTER_ACTIONS.attack;

const img = 'url("' + MONSTER_IMG.goblin.attack + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frameDimensions = { height: 32, width: 48 };

const frames = getFrames({ dimensions: frameDimensions, number: 4, left: 'scaleX(-1)', right: 'none' });

const effects = [attack];

const position = {
  right: { x: 0, y: 0 },
  left: { x: -16, y: 0 },
};

const getPosition = addPosition(position);

const getHurtbox = getBox(vertices);

export default {
  name,
  loop: false,
  img,
  effects,
  frames,
  getHurtbox,
  getPosition,
  dimensions: {
    height: frameDimensions.height,
    width: frameDimensions.width,
  },
};
