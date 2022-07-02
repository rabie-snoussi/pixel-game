import { MAP_MATERIALS, GRID, TILES, MISCS } from '../../constants.js';

export default {
  bg2: true,
  fg0: true,
  fg1: true,
  hero: { position: GRID[0][8] },
  monsters: [],
  winningBlock: {
    position: GRID[49][4],
    dimensions: { width: 16, height: 16 * 16 },
  },
  materials: [
    // TILES
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][0],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][2],
      backgroundPosition: TILES.normal.green[1][2],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][10],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][10],
      backgroundPosition: TILES.normal.green[2][0],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][12],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][14],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][16],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][18],
      backgroundPosition: TILES.normal.green[2][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][20],
      backgroundPosition: TILES.reversed.green[0][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][20],
      backgroundPosition: TILES.normal.green[1][0],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][22],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][22],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][24],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][24],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][26],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][26],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // DECOR
    // --------------------------------------------------
  ],

  // MISCS
  // --------------------------------------------------

  miscs: [
    {
      id: 'trigger-2',
      name: MISCS.button,
      position: { x: GRID[30][19].x, y: GRID[30][19].y + 7.77 },
    },
    {
      triggerId: 'trigger-2',
      name: MISCS.door,
      position: GRID[10][4],
    },
    {
      id: 'trigger-1',
      name: MISCS.lever,
      position: GRID[5][8],
    },
    {
      triggerId: 'trigger-1',
      name: MISCS.woodSlabLeft,
      position: GRID[28][3],
    },
    {
      triggerId: 'trigger-1',
      name: MISCS.woodSlabMiddle,
      position: GRID[30][3],
    },
    {
      triggerId: 'trigger-1',
      name: MISCS.woodSlabRight,
      position: GRID[32][3],
    },
    {
      name: MISCS.stone,
      position: GRID[30][1],
    },
  ],
};
