
export const getPosition = (x, y) => ({
  x: x,
  y: y,
});

export const getDimensions = ({ height, width }) => ({
  height: height,
  width: width,
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

export const getReverseFrames = ({ dimensions, number }) => {
  const frames = Array.apply(null, Array(number)).map((item, i) => ({
    backgroundPositionX: getBackgroundPositionX(dimensions, number -1 - i),
  }));

  return frames;
};