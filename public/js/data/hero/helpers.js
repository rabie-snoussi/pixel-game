import { HERO_SIZE } from '../../constants.js';

export const getPosition = (x, y) => ({
  x: x * HERO_SIZE,
  y: y * HERO_SIZE,
});

export const getHurtbox =
  ({ a, b, c, d }) =>
  (heroPos) => {
    const verteces = {
      a: { x: heroPos.x + a.x, y: heroPos.y + a.y },
      b: { x: heroPos.x + b.x, y: heroPos.y + b.y },
      c: { x: heroPos.x + c.x, y: heroPos.y + c.y },
      d: { x: heroPos.x + d.x, y: heroPos.y + d.y },
    };

    const position = {
      top: verteces.a.y + 'px',
      left: verteces.a.x + 'px',
    };

    const dimensions = {
      width: verteces.b.x - verteces.a.x + 'px',
      height: verteces.c.y - verteces.a.y + 'px',
    };

    return {
      verteces,
      position,
      dimensions,
    };
  };

export const getDimensions = ({ height, width }) => ({
  height: height * HERO_SIZE,
  width: width * HERO_SIZE,
});

export const getVerteces = ({ height, width }) => ({
  a: { x: 0, y: 0 },
  b: { x: width, y: 0 },
  c: { x: width, y: height },
  d: { x: 0, y: height },
});

export const getBackgroundPositionX = (dimensions, i) => dimensions.width * -i + 'px';

export const getFrames = ({ dimensions, number, left, right }) => {
  const rightFrames = Array.apply(null, Array(number)).map((item, i) => ({
    transform: right,
    backgroundPositionX: getBackgroundPositionX(dimensions, i),
  }));

  const leftFrames = Array.apply(null, Array(number)).map((item, i) => ({
    transform: left,
    backgroundPositionX: getBackgroundPositionX(dimensions, i),
  }));

  return { right: rightFrames, left: leftFrames };
};
