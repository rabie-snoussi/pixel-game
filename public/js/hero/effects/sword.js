import { HERO_EFFECTS, HERO_IMG } from '../../constants.js';
import { getFrames, getEffectPosition, getHitbox } from '../../helpers.js';

const name = HERO_EFFECTS.sword;

const img = 'url("' + HERO_IMG.sword + '")';

const dimensions = { height: 32, width: 32 };

const hitboxDimensions = [
  { height: 22, width: 30 },
  { height: 18, width: 32 },
  { height: 6, width: 8 },
  { height: 6, width: 8 },
];

const hitboxInitialPositions = {
  right: [
    { x: 32, y: 10 },
    { x: 32, y: 10 },
    { x: 32, y: 10 },
    { x: 32, y: 10 },
  ],
  left: [
    { x: -30, y: 10 },
    { x: -32, y: 10 },
    { x: -8, y: 10 },
    { x: -8, y: 10 },
  ],
};

const hitbox = getHitbox(hitboxDimensions, hitboxInitialPositions);

const imgPosition = { left: { x: -32, y: 0 }, right: { x: 32, y: 0 } };

const getPosition = getEffectPosition(imgPosition);

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
  getPosition,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
