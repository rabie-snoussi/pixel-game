import {
  COLLECTIBLE_STATES,
  COLLECTIBLE_IMG,
} from '../../../constants.js';
import { createVertices, getVertices } from '../../../helpers.js';

const name = COLLECTIBLE_STATES.initial;

const img = 'url("' + COLLECTIBLE_IMG.healtPotion.initial + '")';

const dimensions = { height: 20, width: 16 };

const vertices = createVertices(dimensions);

const frames = [];

export default {
  name,
  img,
  getVertices: getVertices(vertices),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
