import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import preJumpDust from '../effects/preJumpDust.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.jump;

const img = 'url("' + HERO_IMG.jump + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 3, left: 'scaleX(-1)', right: 'none' });

const effects = [preJumpDust];

export default {
  name,
  loop: true,
  img,
  effects,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
