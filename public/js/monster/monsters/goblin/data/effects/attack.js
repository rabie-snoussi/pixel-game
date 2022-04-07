import {
  getHitbox,
} from '../helpers.js';

const name =  "attack";

const hitboxDimensions = [
  { height: 5, width: 5 },
  { height: 5, width: 11 },
  { height: 5, width: 6 },
  { height: 5, width: 5 },
];

const hitboxInitialPositions = {
  right: [
    { x: 10, y: 8 },
    { x: 10, y: 8 },
    { x: 16, y: 8 },
    { x: 16, y: 8 },
  ],
  left: [
    { x: 1, y: 8 },
    { x: -5, y: 8 },
    { x: -7, y: 8 },
    { x: -7, y: 8 },
  ],
};

const hitbox = getHitbox(hitboxDimensions, hitboxInitialPositions);

export default {
  name,
  hitbox,
};
