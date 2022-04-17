import { TRIGGERED_STATES, TRIGGERED_IMG } from '../../../constants.js';
import { createVertices, getFrames, getVertices } from '../../../helpers.js';

const name = TRIGGERED_STATES.opening;

const img = 'url("' + TRIGGERED_IMG.door.opening + '")';

const dimensions = { height: 96, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 14 });

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
