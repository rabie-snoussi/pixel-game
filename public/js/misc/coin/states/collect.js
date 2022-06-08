import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { getFrames, getVertices, createVertices } from '../../../helpers.js';

const name = MISC_STATES.collect;

const img = 'url("' + MISC_IMG.coin.collect + '")';

const dimensions = { height: 32, width: 16 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 6 });

export default {
  name,
  img,
  getVertices: getVertices(vertices),
  frames,
  dimensions,
};
