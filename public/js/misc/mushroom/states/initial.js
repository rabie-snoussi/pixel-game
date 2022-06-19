import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { createVertices, getFrames, getVertices } from '../../../helpers.js';

const name = MISC_STATES.initial;

const img = 'url("' + MISC_IMG.mushroom.initial + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions, { x: 0, y: 8 });

const frames = getFrames({ dimensions, number: 6 });

export default {
  name,
  img,
  collision: true,
  getVertices: getVertices(vertices),
  frames,
  dimensions,
};
