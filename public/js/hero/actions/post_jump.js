import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import postJumpDust from '../effects/postJumpDust.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.postJump;

const img = 'url("' + HERO_IMG.prePostJump + '")';

const allowedActions = [
    HERO_ACTIONS.idle,
    HERO_ACTIONS.hit,
    HERO_ACTIONS.death,
];

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 2, left: 'scaleX(-1)', right: 'none' });

const effects = [postJumpDust];

export default {
  name,
  loop: false,
  img,
  effects,
  allowedActions,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
