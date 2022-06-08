import { MISC_STATES, MISC_IMG } from '../../../constants.js';
import { createVertices, getVertices } from '../../../helpers.js';

const name = MISC_STATES.disabled;

const img = 'url("' + MISC_IMG.lever.disabled + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

export default {
  name,
  img,
  collision: false,
  getVertices: getVertices(vertices),
  dimensions,
};
