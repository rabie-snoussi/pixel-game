import { HEALTH_POTION_SIZE } from '../../../../constants.js';

export const getPosition = (x, y) => ({
  x: x * HEALTH_POTION_SIZE,
  y: y * HEALTH_POTION_SIZE,
});

export const getDimensions = ({ height, width }) => ({
  height: height * HEALTH_POTION_SIZE,
  width: width * HEALTH_POTION_SIZE,
});

export const getVertices =
  ({ height, width }) =>
  (position = { x: 0, y: 0 }) => ({
    a: { x: position.x, y: position.y },
    b: { x: position.x + width, y: position.y },
    c: { x: position.x + width, y: position.y + height },
    d: { x: position.x, y: position.y + height },
  });
