import { MONSTER_ACTIONS, MONSTER_IMG } from '../../../constants.js';
import {
  getBox,
  createVertices,
  getFrames,
  addPosition,
} from '../../../helpers.js';

const name = MONSTER_ACTIONS.death;

const img = 'url("' + MONSTER_IMG.goblin.death + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 6, left: 'scaleX(-1)', right: 'none' });

const effects = [];

const position = {
  right: { x: 0, y: 0 },
  left: { x: 0, y: 0 },
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
  dimensions,
};
