import { TRIGGER_STATES, TRIGGER_IMG } from '../../../constants.js';
import { getVertices } from '../../../helpers.js';

const name = TRIGGER_STATES.disabled;

const img = 'url("' + TRIGGER_IMG.button.disabled + '")';

const dimensions = { height: 8, width: 32 };

const vertices = {
  a: {
    x: 0,
    y: 2,
  },
  b: {
    x: 32,
    y: 2,
  },
  c: {
    x: 32,
    y: 8,
  },
  d: {
    x: 0,
    y: 8,
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
