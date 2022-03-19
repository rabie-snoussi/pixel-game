import { GRID_DIMENSIONS } from "../constants.js";

export const TILES = {
  transparent: { x: -4, y: -1 },
  normal: {
    green: [
      [
        { x: 0 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: 0 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: 0 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -1 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -2 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -2 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -2 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
    ],
    black: [
      [
        { x: -6 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -6 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -6 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -7 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -7 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -7 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -8 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -8 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -8 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
    ],
    brown: [
      [
        { x: 0 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
        { x: 0 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
        { x: 0 * GRID_DIMENSIONS.width, y: -5 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -1 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -5 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -2 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
        { x: -2 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
        { x: -2 * GRID_DIMENSIONS.width, y: -5 * GRID_DIMENSIONS.height },
      ],
    ],
  },
  reversed: {
    green: [
      [
        { x: -3 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -3 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -3 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -4 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -4 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -4 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -5 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -5 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -5 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
    ],
    black: [
      [
        { x: -9 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -9 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -9 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -1 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -1 * GRID_DIMENSIONS.width, y: 0 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -1 * GRID_DIMENSIONS.height },
        { x: -1 * GRID_DIMENSIONS.width, y: -2 * GRID_DIMENSIONS.height },
      ],
    ],
    brown: [
      [
        { x: -3 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
        { x: -3 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
        { x: -3 * GRID_DIMENSIONS.width, y: -5 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -4 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
        { x: -4 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
        { x: -4 * GRID_DIMENSIONS.width, y: -5 * GRID_DIMENSIONS.height },
      ],
      [
        { x: -5 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
        { x: -5 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
        { x: -5 * GRID_DIMENSIONS.width, y: -5 * GRID_DIMENSIONS.height },
      ],
    ],
  },
  floating: {
    green: [
      { x: -6 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
      { x: -7 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
      { x: -8 * GRID_DIMENSIONS.width, y: -3 * GRID_DIMENSIONS.height },
    ],
    black: [
      { x: -6 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
      { x: -7 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
      { x: -8 * GRID_DIMENSIONS.width, y: -4 * GRID_DIMENSIONS.height },
    ],
  },
};
