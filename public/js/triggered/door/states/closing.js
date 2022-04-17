import { TRIGGERED_STATES, TRIGGERED_IMG } from '../../../constants.js';
import { getReverseFrames, getVertices, createVertices } from '../../../helpers.js';

const name = TRIGGERED_STATES.closing;

const img = 'url("' + TRIGGERED_IMG.door.opening + '")';

const dimensions = { height: 96, width: 32 };

const vertices = createVertices(dimensions);

const frames = getReverseFrames({ dimensions, number: 14 });

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
