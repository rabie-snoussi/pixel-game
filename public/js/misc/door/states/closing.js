import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { getReverseFrames, getVertices, createVertices } from '../../../helpers.js';

const name = MISC_STATES.closing;

const img = 'url("' + MISC_IMG.door.opening + '")';

const dimensions = { height: 96, width: 32 };

const vertices = createVertices(dimensions);

const frames = getReverseFrames({ dimensions, number: 14 });

export default {
  name,
  collision: true,
  img,
  getVertices: getVertices(vertices),
  frames,
  dimensions,
};
