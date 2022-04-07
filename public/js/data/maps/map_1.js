import { TILES } from '../tiles.js';
import { GRID } from '../grid.js';
import {
  TILE_DIMENSIONS,
  WATERFALL_BOTTOM_DIMENSIONS,
  WATERFALL_DIMENSIONS,
} from '../../constants.js';

export default {
  bg2: true,
  fg0: true,
  fg1: true,
  dimensions: {
    tiles: TILE_DIMENSIONS,
    waterfall: WATERFALL_DIMENSIONS,
    waterfallBottom: WATERFALL_BOTTOM_DIMENSIONS,
  },
  heroPosition: GRID[10][22],
  enemies: [
    {
      name: 'goblin',
      position: GRID[14][22],
    },
    {
      name: 'goblin',
      position: GRID[26][16],
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
      position: GRID[2][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[4][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[6][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[8][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[10][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[12][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[14][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[16][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[18][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[20][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[22][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[24][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[26][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[28][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[30][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[32][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[34][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[36][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[38][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[40][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[42][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[44][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[46][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[48][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    

    // ROW 2

    {
      position: GRID[0][2],
      backgroundPosition: TILES.reversed.green[0][0],
    },
    {
      position: GRID[2][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[4][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[6][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[8][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[10][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[12][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[14][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[16][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[18][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[20][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[22][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[24][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[26][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[28][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[30][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[32][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[34][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[36][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[38][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[40][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[42][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[44][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[46][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      position: GRID[48][2],
      backgroundPosition: TILES.normal.green[1][2],
    },

    // ROW 4

    {
      position: GRID[0][4],
      backgroundPosition: TILES.normal.green[2][1],
    },


    // ROW 6

    {
      position: GRID[0][6],
      backgroundPosition: TILES.normal.green[2][1],
    },


    // ROW 8

    {
      position: GRID[0][8],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 10

    {
      position: GRID[0][10],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 12

    {
      position: GRID[0][12],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 14

    {
      position: GRID[0][14],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 16

    {
      position: GRID[0][16],
      backgroundPosition: TILES.normal.green[2][1],
    },


    // ROW 18

    {
      position: GRID[0][18],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      position: GRID[24][18],
      backgroundPosition: TILES.normal.green[0][0],
    },
    {
      position: GRID[26][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[28][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[30][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[32][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[34][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[36][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[38][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[40][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[42][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[44][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[46][18],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[48][18],
      backgroundPosition: TILES.normal.green[1][0],
    },

    // ROW 20

    {
      position: GRID[24][20],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      position: GRID[26][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[28][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[30][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[32][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[34][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[36][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[38][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[40][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[42][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[44][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[46][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[48][20],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // ROW 20

    {
      position: GRID[0][20],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // ROW 22

    {
      position: GRID[0][22],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      position: GRID[24][22],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      position: GRID[26][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[28][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[30][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[32][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[34][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[36][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[38][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[40][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[42][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[44][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[46][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[48][22],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // ROW 24

    {
      position: GRID[0][24],
      backgroundPosition: TILES.reversed.green[0][2],
    },
    {
      position: GRID[2][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[4][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[6][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[8][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[10][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[12][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[14][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[16][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[18][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[20][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[22][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      position: GRID[24][24],
      backgroundPosition: TILES.reversed.green[2][2],
    },
    {
      position: GRID[26][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[28][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[30][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[32][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[34][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[36][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[38][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[40][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[42][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[44][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[46][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[48][24],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // ROW 26

    {
      position: GRID[0][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[2][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[4][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[6][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[8][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[10][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[12][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[14][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[16][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[18][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[20][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[22][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[24][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[26][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[28][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[30][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[32][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[34][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[36][26],
      backgroundPosition: TILES.normal.green[1][1],
    },

    {
      position: GRID[38][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[40][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[42][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[44][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[46][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      position: GRID[48][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
  ],
  waterfall: [
    {
      position: GRID[32][0],
    },
    {
      position: GRID[34][0],
    },
    {
      position: GRID[32][4],
    },
    {
      position: GRID[34][4],
    },
    {
      position: GRID[32][8],
    },
    {
      position: GRID[34][8],
    },
    {
      position: GRID[32][12],
    },
    {
      position: GRID[34][12],
    },
    {
      position: GRID[32][16],
    },
    {
      position: GRID[34][16],
    },
    {
      position: GRID[32][20],
    },
    {
      position: GRID[34][20],
    },
    {
      position: GRID[32][22],
    },
    {
      position: GRID[34][22],
    },
  ],
  waterfallBottom: [
    {
      position: GRID[32][25],
    },
    {
      position: GRID[34][25],
    },
  ]
};
