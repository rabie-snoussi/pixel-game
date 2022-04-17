import { getHitbox } from '../../../helpers.js';

const name = 'attack';

const hitboxDimensions = [
  { height: 10, width: 10 },
  { height: 10, width: 22 },
  { height: 10, width: 12 },
  { height: 10, width: 10 },
];

const hitboxInitialPositions = {
  right: [
    { x: 20, y: 16 },
    { x: 20, y: 16 },
    { x: 32, y: 16 },
    { x: 32, y: 16 },
  ],
  left: [
    { x: 2, y: 16 },
    { x: -10, y: 16 },
    { x: -14, y: 16 },
    { x: -14, y: 16 },
  ],
};

const hitbox = getHitbox(hitboxDimensions, hitboxInitialPositions);

export default {
  name,
  hitbox,
};
