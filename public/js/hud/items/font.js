import { HUD_IMG } from '../../constants.js';

const img = 'url("' + HUD_IMG.font + '")';

const dimensions = { height: 16, width: 16 };

const backgroundSize = '160px';

const CHARACTERS_POSITION = {
  0: {
    x: 0,
    y: 0,
  },
  1: {
    x: -1,
    y: 0,
  },
  2: {
    x: -2,
    y: 0,
  },
  3: {
    x: -3,
    y: 0,
  },
  4: {
    x: -4,
    y: 0,
  },
  5: {
    x: -5,
    y: 0,
  },
  6: {
    x: -6,
    y: 0,
  },
  7: {
    x: -7,
    y: 0,
  },
  8: {
    x: -8,
    y: 0,
  },
  9: {
    x: -9,
    y: 0,
  },

  a: {
    x: 0,
    y: -1,
  },
  b: {
    x: -1,
    y: -1,
  },
  c: {
    x: -2,
    y: -1,
  },
  d: {
    x: -3,
    y: -1,
  },
  e: {
    x: -4,
    y: -1,
  },
  f: {
    x: -5,
    y: -1,
  },
  g: {
    x: -6,
    y: -1,
  },
  h: {
    x: -7,
    y: -1,
  },
  i: {
    x: -8,
    y: -1,
  },
  j: {
    x: -9,
    y: -1,
  },

  k: {
    x: 0,
    y: -2,
  },
  l: {
    x: -1,
    y: -2,
  },
  m: {
    x: -2,
    y: -2,
  },
  n: {
    x: -3,
    y: -2,
  },
  o: {
    x: -4,
    y: -2,
  },
  p: {
    x: -5,
    y: -2,
  },
  q: {
    x: -6,
    y: -2,
  },
  r: {
    x: -7,
    y: -2,
  },
  s: {
    x: -8,
    y: -2,
  },
  t: {
    x: -9,
    y: -2,
  },

  u: {
    x: 0,
    y: -3,
  },
  v: {
    x: -1,
    y: -3,
  },
  w: {
    x: -2,
    y: -3,
  },
  x: {
    x: -3,
    y: -3,
  },
  y: {
    x: -4,
    y: -3,
  },
  z: {
    x: -5,
    y: -3,
  },
  '!': {
    x: -6,
    y: -3,
  },
  '?': {
    x: -7,
    y: -3,
  },
  '/': {
    x: -8,
    y: -3,
  },
  ' ': {
    x: -9,
    y: -3,
  },
};

const getCharBgPosition = (character) => {
  const { x, y } = CHARACTERS_POSITION[character];
  return `${x * 16}px ${y * 16}px`;
};

export default {
  img,
  backgroundSize,
  getCharBgPosition,
  dimensions,
};
