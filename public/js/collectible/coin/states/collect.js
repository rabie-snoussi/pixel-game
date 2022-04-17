import { COLLECTIBLE_STATES, COLLECTIBLE_IMG } from '../../../constants.js';
import { getFrames, getVertices, createVertices } from '../../../helpers.js';

const name = COLLECTIBLE_STATES.collect;

const img = 'url("' + COLLECTIBLE_IMG.coin.collect + '")';

const dimensions = { height: 32, width: 16 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 6 });

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
