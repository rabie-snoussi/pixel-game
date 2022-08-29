import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.death;

const img = 'url("' + HERO_IMG.death + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({
  dimensions,
  number: 8,
  left: 'scaleX(-1)',
  right: 'none',
});

const effects = [];

export default {
  name,
  loop: false,
  img,
  effects,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
