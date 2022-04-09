import { COIN_STATES, COIN_IMG } from '../../../../../constants.js';
import {
  getVertices,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = COIN_STATES.pickup;

const img = 'url("' + COIN_IMG.pickup + '")';

const dimensions = getDimensions({ height: 16, width: 8 });

const frames = getFrames({ dimensions, number: 6 });


export default {
  name,
  img,
  getVertices: getVertices(dimensions),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
