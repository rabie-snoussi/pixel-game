import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import postJumpDust from '../effects/postJumpDust.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.postJump;

const img = 'url("' + HERO_IMG.prePostJump + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 2, left: 'scaleX(-1)', right: 'none' });

const effects = [postJumpDust];

export default {
  name,
  loop: false,
  img,
  effects,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
