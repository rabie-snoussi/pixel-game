import { COIN_STATES, COIN_IMG } from '../../../../../constants.js';
import {
  getVertices,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = COIN_STATES.initial;

const img = 'url("' + COIN_IMG.initial + '")';

const dimensions = getDimensions({ height: 8, width: 8 });

const frames = getFrames({ dimensions, number: 4 });


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
