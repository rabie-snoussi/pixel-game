import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.hit;

const img = 'url("' + HERO_IMG.hit + '")';

const allowedActions = [
  HERO_ACTIONS.postJump,
  HERO_ACTIONS.attack,
  HERO_ACTIONS.idle,
  HERO_ACTIONS.run,
  HERO_ACTIONS.death,
];

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({
  dimensions,
  number: 9,
  left: 'scaleX(-1)',
  right: 'none',
});

const effects = [];

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
