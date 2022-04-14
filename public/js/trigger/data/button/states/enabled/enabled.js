import { BUTTON_STATES, BUTTON_IMG } from '../../../../../constants.js';
import { getVertices, getDimensions } from '../../helpers.js';

const name = BUTTON_STATES.enabled;

const img = 'url("' + BUTTON_IMG.enabled + '")';

const dimensions = getDimensions({ height: 4, width: 16 });

const vertices = {
  a: {
    x: 0,
    y: 1,
  },
  b: {
    x: 16,
    y: 1,
  },
  c: {
    x: 16,
    y: 4,
  },
  d: {
    x: 0,
    y: 4,
  },
};

export default {
  name,
  img,
  collision: true,
  getVertices: getVertices(vertices),
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
