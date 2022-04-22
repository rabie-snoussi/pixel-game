import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { createVertices, getVertices } from '../../../helpers.js';

const name = MISC_STATES.closed;

const img = 'url("' + MISC_IMG.woodSlabMiddle + '")';

const dimensions = { height: 16, width: 32 };

const vertices = createVertices(dimensions);

const frames = [];

export default {
  name,
  collision: true,
  img,
  getVertices: getVertices(vertices),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
