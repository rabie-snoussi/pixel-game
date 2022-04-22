import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { createVertices, getFrames, getVertices } from '../../../helpers.js';

const name = MISC_STATES.closed;

const img = 'url("' + MISC_IMG.door.closed + '")';

const dimensions = { height: 96, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 10 });

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
