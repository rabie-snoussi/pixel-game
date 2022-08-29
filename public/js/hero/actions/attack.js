import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import sword from '../effects/sword.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.attack;

const img = 'url("' + HERO_IMG.attack + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({
  dimensions,
  number: 4,
  left: 'scaleX(-1)',
  right: 'none',
});

const effects = [sword];

export default {
  name,
  loop: false,
  img,
  effects,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
