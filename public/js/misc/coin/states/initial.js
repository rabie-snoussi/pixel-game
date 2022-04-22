import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { createVertices, getFrames, getVertices } from '../../../helpers.js';

const name = MISC_STATES.initial;

const img = 'url("' + MISC_IMG.coin.initial + '")';

const dimensions = { height: 16, width: 16 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 4 });

export default {
  name,
  img,
  getVertices: getVertices(vertices),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
