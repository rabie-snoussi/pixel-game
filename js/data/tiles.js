export const TILES_IMG =
  './assets/tiles_background_foreground/tileset_64x64.png';

export const TILE_DIMENSIONS = {
  height: 64,
  width: 64,
};

export const TILES = {
  transparent: { x: -4, y: -1 },
  normal: {
    green: [
      [
        { x: 0 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -2 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    black: [
      [
        { x: -6 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -6 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -6 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -7 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -7 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -7 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -8 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -8 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -8 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    brown: [
      [
        { x: 0 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: 0 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -2 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -2 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
    ],
  },
  reversed: {
    green: [
      [
        { x: -3 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -4 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -5 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    black: [
      [
        { x: -9 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -9 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -9 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -1 * TILE_DIMENSIONS.width, y: 0 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -1 * TILE_DIMENSIONS.height },
        { x: -1 * TILE_DIMENSIONS.width, y: -2 * TILE_DIMENSIONS.height },
      ],
    ],
    brown: [
      [
        { x: -3 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -3 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -4 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -4 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
      [
        { x: -5 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
        { x: -5 * TILE_DIMENSIONS.width, y: -5 * TILE_DIMENSIONS.height },
      ],
    ],
  },
  floating: {
    green: [
      { x: -6 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
      { x: -7 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
      { x: -8 * TILE_DIMENSIONS.width, y: -3 * TILE_DIMENSIONS.height },
    ],
    black: [
      { x: -6 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
      { x: -7 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
      { x: -8 * TILE_DIMENSIONS.width, y: -4 * TILE_DIMENSIONS.height },
    ],
  },
};
