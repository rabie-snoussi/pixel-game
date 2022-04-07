import { TILES } from '../tiles.js';
import { GRID, SMALLER_GRID } from '../grid.js';
import {
  GRID_DIMENSIONS,
  WATERFALL_BOTTOM_DIMENSIONS,
  WATERFALL_BOTTOM_IMG,
  WATERFALL_DIMENSIONS,
  WATERFALL_IMG,
  WATERFALL_IMG_SIZE,
  WATERFALL_BOTTOM_IMG_SIZE,
} from '../../constants.js';

export default {
  bg2: true,
  fg0: true,
  fg1: true,
  demensions: GRID_DIMENSIONS,
  heroPosition: GRID[5][11],
  enemies: [
    {
      name: 'goblin',
      position: GRID[7][11],
    },
    {
      name: 'goblin',
      position: GRID[13][8],
    },
  ],
  bgTiles: [],
  tiles: [
    // ROW 0

    {
      position: GRID[0][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[1][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[2][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[3][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[4][0],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 1

    {
      position: GRID[0][1],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[1][1],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[2][1],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[3][1],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[4][1],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 2

    {
      position: GRID[0][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[1][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[2][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[3][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[4][2],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 3

    {
      position: GRID[0][3],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[1][3],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[2][3],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[3][3],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[4][3],
      backgroundPosition: TILES.normal.green[2][2],
    },

    // ROW 9

    {
      position: GRID[12][9],
      backgroundPosition: TILES.normal.green[0][0],
    },
    {
      position: GRID[13][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[14][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[15][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[16][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[17][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[18][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[19][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[20][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[21][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[22][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[23][9],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[24][9],
      backgroundPosition: TILES.normal.green[1][0],
    },

    // ROW 10

    {
      position: GRID[12][10],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      position: GRID[13][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[14][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[15][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[16][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[17][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[18][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[19][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[20][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[21][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[22][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[23][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[24][10],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // ROW 11

    {
      position: GRID[12][11],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      position: GRID[13][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[14][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[15][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[16][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[17][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[18][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[19][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[20][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[21][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[22][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[23][11],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[24][11],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // ROW 12

    {
      position: GRID[0][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[1][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[2][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[3][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[4][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[5][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[6][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[7][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[8][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[9][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[10][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[11][12],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[12][12],
      backgroundPosition: TILES.reversed.green[2][2],
    },
    {
      position: GRID[13][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[14][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[15][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[16][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[17][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[18][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[19][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[20][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[21][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[22][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[23][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[24][12],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // ROW 13

    {
      position: GRID[0][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[1][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[2][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[3][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[4][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[5][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[6][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[7][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[8][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[9][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[10][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[11][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[12][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[13][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[14][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[15][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[16][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[17][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[18][13],
      backgroundPosition: TILES.normal.green[1][1],
    },

    {
      position: GRID[19][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[20][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[21][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[22][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[23][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[24][13],
      backgroundPosition: TILES.normal.green[1][1],
    },
  ],
  waterfall: [
    {
      position: GRID[16][0],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][0],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[16][2],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][2],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[16][4],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][4],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[16][6],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][6],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[16][8],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][8],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[16][10],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][10],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[16][11],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: GRID[17][11],
      img: WATERFALL_IMG,
      dimensions: WATERFALL_DIMENSIONS,
      size: WATERFALL_IMG_SIZE,
    },
    {
      position: SMALLER_GRID[32][25],
      img: WATERFALL_BOTTOM_IMG,
      dimensions: WATERFALL_BOTTOM_DIMENSIONS,
      size: WATERFALL_BOTTOM_IMG_SIZE,
    },
    {
      position: SMALLER_GRID[34][25],
      img: WATERFALL_BOTTOM_IMG,
      dimensions: WATERFALL_BOTTOM_DIMENSIONS,
      size: WATERFALL_BOTTOM_IMG_SIZE,
    },
  ],
};
