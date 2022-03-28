import { HERO_SIZE } from '../../../constants.js';

export const getPosition = (x, y) => ({
  x: x * HERO_SIZE,
  y: y * HERO_SIZE,
});

export const getBox =
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

export const getVerteces = ({ height, width }, initial = { x: 0, y: 0 }) => ({
  a: { x: initial.x, y: initial.y },
  b: { x: initial.x + width, y: initial.y },
  c: { x: initial.x + width, y: initial.y + height },
  d: { x: initial.x, y: initial.y + height },
});

export const getBackgroundPositionX = (dimensions, i) =>
  dimensions.width * -i + 'px';

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

export const getHitbox = (dimensionsArray, initialPositionsArray) => {
  const dimensions = dimensionsArray.map((item) => getDimensions(item));

  const rightPositions = initialPositionsArray.right.map(({ x, y }) =>
    getPosition(x, y)
  );
  const leftPositions = initialPositionsArray.left.map(({ x, y }) =>
    getPosition(x, y)
  );

  const rightVerteces = rightPositions.map((item, i) =>
    getVerteces(dimensions[i], rightPositions[i])
  );
  const leftVerteces = leftPositions.map((item, i) =>
    getVerteces(dimensions[i], leftPositions[i])
  );

  const rightHitboxs = rightVerteces.map((item, i) => getBox(rightVerteces[i]));
  const leftHitboxs = leftVerteces.map((item, i) => getBox(leftVerteces[i]));

  return { right: rightHitboxs, left: leftHitboxs };
};

export const getEffectPosition = (position) => (heroPos) => ({
  right: {
    top: heroPos.y + position.right.y + 'px',
    left: heroPos.x + position.right.x + 'px',
  },
  left: {
    top: heroPos.y + position.left.y + 'px',
    left: heroPos.x + position.left.x + 'px',
  },
});
