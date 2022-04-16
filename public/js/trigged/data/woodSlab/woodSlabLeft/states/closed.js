import { WOOD_SLAB_STATES, WOOD_SLAB_IMGS } from '../../../../../constants.js';
import {
  getVertices,
  getDimensions,
} from '../../helpers.js';

const name = WOOD_SLAB_STATES.closed;

const img = 'url("' + WOOD_SLAB_IMGS.left + '")';

const dimensions = getDimensions({ height: 16, width: 32 });

const frames = [];

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
