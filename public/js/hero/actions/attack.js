import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import sword from '../effects/sword.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';

const name = HERO_ACTIONS.attack;

const img = 'url("' + HERO_IMG.attack + '")';

const allowedActions = [
  HERO_ACTIONS.idle,
  HERO_ACTIONS.jump,
  HERO_ACTIONS.hit,
  HERO_ACTIONS.death,
];

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
  allowedActions,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
