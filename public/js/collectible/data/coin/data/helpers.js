import { COIN_SIZE } from '../../../../constants.js';

export const getPosition = (x, y) => ({
  x: x * COIN_SIZE,
  y: y * COIN_SIZE,
});

export const getBox =
  ({ a, b, c, d }) =>
  (item) => {
    const verteces = {
      a: { x: item.x + a.x, y: item.y + a.y },
      b: { x: item.x + b.x, y: item.y + b.y },
      c: { x: item.x + c.x, y: item.y + c.y },
      d: { x: item.x + d.x, y: item.y + d.y },
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
  height: height * COIN_SIZE,
  width: width * COIN_SIZE,
});

export const getVertices =
  ({ height, width }) =>
  (position = { x: 0, y: 0 }) => ({
    a: { x: position.x, y: position.y },
    b: { x: position.x + width, y: position.y },
    c: { x: position.x + width, y: position.y + height },
    d: { x: position.x, y: position.y + height },
  });

export const getBackgroundPositionX = (dimensions, i) =>
  dimensions.width * -i + 'px';

export const getFrames = ({ dimensions, number }) => {
  const frames = Array.apply(null, Array(number)).map((item, i) => ({
    backgroundPositionX: getBackgroundPositionX(dimensions, i),
  }));

  return frames;
};
