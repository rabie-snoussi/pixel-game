import { BUTTON_SIZE } from '../../../constants.js';

export const getPosition = (x, y) => ({
  x: x * BUTTON_SIZE,
  y: y * BUTTON_SIZE,
});

export const getDimensions = ({ height, width }) => ({
  height: height * BUTTON_SIZE,
  width: width * BUTTON_SIZE,
});

export const getVertices =
  (vertices) =>
  (position = { x: 0, y: 0 }) => ({
    a: {
      x: vertices.a.x * BUTTON_SIZE + position.x,
      y: vertices.a.y * BUTTON_SIZE + position.y,
    },
    b: {
      x: vertices.b.x * BUTTON_SIZE + position.x,
      y: vertices.b.y * BUTTON_SIZE + position.y,
    },
    c: {
      x: vertices.c.x * BUTTON_SIZE + position.x,
      y: vertices.c.y * BUTTON_SIZE + position.y,
    },
    d: {
      x: vertices.d.x * BUTTON_SIZE + position.x,
      y: vertices.d.y * BUTTON_SIZE + position.y,
    },
  });
