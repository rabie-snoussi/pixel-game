import { HEALTH_POTION_STATES, HEALTH_POTION_IMG } from '../../../../../constants.js';
import {
  getVertices,
  getDimensions,
} from '../helpers.js';

const name = HEALTH_POTION_STATES.initial;

const img = 'url("' + HEALTH_POTION_IMG.initial + '")';

const dimensions = getDimensions({ height: 8, width: 6.75 });

const frames = [];

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
