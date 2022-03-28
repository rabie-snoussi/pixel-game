import { HERO_EFFECTS, HERO_IMG } from '../../../../constants.js';
import {
  getHitbox,
  getDimensions,
  getFrames,
  getPosition,
  getEffectPosition,
} from '../helpers.js';

const name = HERO_EFFECTS.sword;

const img = 'url("' + HERO_IMG.sword + '")';

const dimensions = getDimensions({ height: 16, width: 16 });

const hitboxDimensions = [
  { height: 11, width: 15 },
  { height: 9, width: 16 },
  { height: 3, width: 4 },
  { height: 3, width: 4 },
];

const hitboxInitialPositions = {
  right: [
    { x: 16, y: 5 },
    { x: 16, y: 5 },
    { x: 16, y: 5 },
    { x: 16, y: 5 },
  ],
  left: [
    { x: -15, y: 5 },
    { x: -16, y: 5 },
    { x: -4, y: 5 },
    { x: -4, y: 5 },
  ],
};

const hitbox = getHitbox(hitboxDimensions, hitboxInitialPositions);

const swordPosition = { left: getPosition(-16, 0), right: getPosition(16, 0) };

const position = getEffectPosition(swordPosition);

const frames = getFrames({
  dimensions,
  number: 4,
  left: 'scaleX(-1)',
  right: 'none',
});

export default {
  name,
  img,
  frames,
  hitbox,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
  position,
};
