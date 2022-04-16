import { DOOR_STATES, DOOR_IMG } from '../../../../constants.js';
import {
  getVertices,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = DOOR_STATES.closed;

const img = 'url("' + DOOR_IMG.closed + '")';

const dimensions = getDimensions({ height: 48, width: 16 });

const frames = getFrames({ dimensions, number: 10 });

export default {
  name,
  collision: true,
  img,
  getVertices: getVertices(dimensions),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
