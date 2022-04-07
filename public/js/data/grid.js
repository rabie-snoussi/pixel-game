import { GRID_DIMENSIONS, SCREEN_LIMITS, SMALLER_GRID_DIMENSIONS } from '../constants.js';

const makeGrid = (dimensions) => {
  const columnsNumber = SCREEN_LIMITS.x.end/dimensions.width;
  const rowsNumber = SCREEN_LIMITS.y.end/dimensions.height;
  const grid = [];

  for (let x = 0; x < columnsNumber; x++) {
    grid.push([]);

    for (let y = 0; y < rowsNumber; y++) {
      const cell = { x: x * dimensions.width, y: y * dimensions.height }
      grid[x].push(cell);
    }
  }
  return grid;
};

export const SMALLER_GRID = makeGrid(SMALLER_GRID_DIMENSIONS);

export const GRID = makeGrid(GRID_DIMENSIONS);