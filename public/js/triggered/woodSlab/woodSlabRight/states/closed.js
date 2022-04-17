import { TRIGGERED_STATES, TRIGGERED_IMG } from '../../../../constants.js';
import { createVertices, getVertices } from '../../../../helpers.js';

const name = TRIGGERED_STATES.closed;

const img = 'url("' + TRIGGERED_IMG.woodSlabRight + '")';

const dimensions = { height: 16, width: 32 };

const vertices = createVertices(dimensions)

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
