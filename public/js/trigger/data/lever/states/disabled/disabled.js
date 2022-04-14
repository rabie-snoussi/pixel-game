import { LEVER_STATES, LEVER_IMG } from '../../../../../constants.js';
import { getVertices, getDimensions } from '../../helpers.js';

const name = LEVER_STATES.disabled;

const img = 'url("' + LEVER_IMG.disabled + '")';

const dimensions = getDimensions({ height: 16, width: 16 });

const vertices = {
  a: {
    x: 0,
    y: 0,
  },
  b: {
    x: 16,
    y: 0,
  },
  c: {
    x: 16,
    y: 16,
  },
  d: {
    x: 0,
    y: 16,
  },
};

export default {
  name,
  img,
  collision: false,
  getVertices: getVertices(vertices),
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
