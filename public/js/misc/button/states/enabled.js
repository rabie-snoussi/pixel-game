import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { getVertices } from '../../../helpers.js';

const name = MISC_STATES.enabled;

const img = 'url("' + MISC_IMG.button.enabled + '")';

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
  dimensions,
};
