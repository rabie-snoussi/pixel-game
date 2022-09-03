import { MAP_MATERIALS, GRID, TILES, MISCS } from '../../constants.js';
import { buttonPosition, orbPosition } from '../helpers.js';

export default {
  dirt: true,
  water: false,
  rocks: false,
  hero: { position: GRID[24][26], vector: { x: 0, y: -20 } },
  monsters: [],
  materials: [
    // TILES
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][0],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][0],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][0],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][0],
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
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][2],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][2],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][2],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][4],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][4],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][4],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][4],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][6],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][6],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][6],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][6],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][8],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][8],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][8],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][8],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][10],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][10],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][10],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][12],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][12],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][12],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][14],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][14],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][14],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][16],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][16],
      backgroundPosition: TILES.floating.green[0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][16],
      backgroundPosition: TILES.floating.green[2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][16],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][16],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][16],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][18],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][18],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][18],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][18],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][20],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][20],
      backgroundPosition: TILES.normal.green[0][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][20],
      backgroundPosition: TILES.normal.green[1][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][20],
      backgroundPosition: TILES.normal.green[1][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][22],
      backgroundPosition: TILES.normal.green[2][1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][22],
      backgroundPosition: TILES.normal.green[0][1],
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
      backgroundPosition: TILES.reversed.green[0][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][24],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][24],
      backgroundPosition: TILES.normal.green[2][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][24],
      backgroundPosition: TILES.normal.green[0][1],
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
      backgroundPosition: TILES.normal.green[2][1],
    },

    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][26],
      backgroundPosition: TILES.normal.green[0][1],
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

    // --------------------------------------------------

    // DECOR
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.woodSlabLeft,
      position: GRID[22][26],
    },
    {
      ...MAP_MATERIALS.woodSlabMiddle,
      position: GRID[24][26],
    },
    {
      ...MAP_MATERIALS.woodSlabRight,
      position: GRID[26][26],
    },

    {
      ...MAP_MATERIALS.root,
      position: GRID[32][10],
    },
    {
      ...MAP_MATERIALS.root,
      position: GRID[37][10],
    },

    {
      ...MAP_MATERIALS.grass,
      position: GRID[4][23],
    },
    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[12][23],
    },
    {
      ...MAP_MATERIALS.bigflowers,
      position: GRID[20][23],
    },
  ],

  // MISCS
  // --------------------------------------------------

  miscs: [
    {
      name: MISCS.stone,
      position: GRID[8][22],
    },
    {
      id: 'trigger-1',
      name: MISCS.lever,
      position: GRID[8][14],
    },

    {
      id: 'trigger-2',
      name: MISCS.button,
      position: buttonPosition(GRID[10][25]),
    },
    {
      id: 'trigger-3',
      name: MISCS.button,
      position: buttonPosition(GRID[14][25]),
    },
    {
      id: 'trigger-4',
      name: MISCS.button,
      position: buttonPosition(GRID[18][25]),
    },

    {
      name: MISCS.woodSlabMiddle,
      position: GRID[10][24],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[14][24],
      triggerId: 'trigger-2',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[18][24],
      triggerId: 'trigger-3',
    },

    {
      name: MISCS.woodSlabMiddle,
      position: GRID[2][16],
      triggerId: 'trigger-1',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[4][16],
      triggerId: 'trigger-1',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[10][16],
      triggerId: 'trigger-2',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[12][16],
      triggerId: 'trigger-2',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[14][16],
      triggerId: 'trigger-3',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[16][16],
      triggerId: 'trigger-3',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[18][16],
      triggerId: 'trigger-4',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[20][16],
      triggerId: 'trigger-4',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[22][16],
      triggerId: 'trigger-4',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[24][16],
      triggerId: 'trigger-4',
      isOpen: true,
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[26][16],
      triggerId: 'trigger-4',
      isOpen: true,
    },

    {
      name: MISCS.woodSlabMiddle,
      position: GRID[2][2],
      triggerId: 'trigger-2',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[4][2],
      triggerId: 'trigger-2',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[6][2],
      triggerId: 'trigger-3',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[8][2],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[10][2],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[12][2],
      triggerId: 'trigger-3',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[14][2],
      triggerId: 'trigger-2',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[16][2],
      triggerId: 'trigger-2',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[18][2],
      triggerId: 'trigger-3',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[20][2],
      triggerId: 'trigger-4',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[22][2],
      triggerId: 'trigger-3',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[24][2],
      triggerId: 'trigger-4',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[26][2],
      triggerId: 'trigger-3',
    },

    {
      name: MISCS.stone,
      position: GRID[2][0],
    },
    {
      name: MISCS.stone,
      position: GRID[4][0],
    },
    {
      name: MISCS.stone,
      position: GRID[6][0],
    },
    {
      name: MISCS.stone,
      position: GRID[8][0],
    },
    {
      name: MISCS.stone,
      position: GRID[10][0],
    },
    {
      name: MISCS.stone,
      position: GRID[12][0],
    },
    {
      name: MISCS.stone,
      position: GRID[14][0],
    },
    {
      name: MISCS.stone,
      position: GRID[16][0],
    },
    {
      name: MISCS.stone,
      position: GRID[18][0],
    },
    {
      name: MISCS.stone,
      position: GRID[20][0],
    },
    {
      name: MISCS.stone,
      position: GRID[22][0],
    },
    {
      name: MISCS.stone,
      position: GRID[24][0],
    },
    {
      name: MISCS.stone,
      position: GRID[26][0],
    },
    {
      name: MISCS.door,
      position: GRID[28][10],
      triggerId: 'trigger-4',
    },

    {
      name: MISCS.orb,
      position: orbPosition(GRID[34][13]),
    },

    {
      name: MISCS.coin,
      position: GRID[4][5],
    },
    {
      name: MISCS.coin,
      position: GRID[7][5],
    },
    {
      name: MISCS.coin,
      position: GRID[10][5],
    },
    {
      name: MISCS.coin,
      position: GRID[13][5],
    },
    {
      name: MISCS.coin,
      position: GRID[16][5],
    },
    {
      name: MISCS.coin,
      position: GRID[19][5],
    },
    {
      name: MISCS.coin,
      position: GRID[22][5],
    },
    {
      name: MISCS.coin,
      position: GRID[25][5],
    },

    {
      name: MISCS.coin,
      position: GRID[4][8],
    },
    {
      name: MISCS.coin,
      position: GRID[7][8],
    },
    {
      name: MISCS.coin,
      position: GRID[10][8],
    },
    {
      name: MISCS.coin,
      position: GRID[13][8],
    },
    {
      name: MISCS.coin,
      position: GRID[16][8],
    },
    {
      name: MISCS.coin,
      position: GRID[19][8],
    },
    {
      name: MISCS.coin,
      position: GRID[22][8],
    },
    {
      name: MISCS.coin,
      position: GRID[25][8],
    },

    {
      name: MISCS.coin,
      position: GRID[4][11],
    },
    {
      name: MISCS.coin,
      position: GRID[7][11],
    },
    {
      name: MISCS.coin,
      position: GRID[10][11],
    },
    {
      name: MISCS.coin,
      position: GRID[13][11],
    },
    {
      name: MISCS.coin,
      position: GRID[16][11],
    },
    {
      name: MISCS.coin,
      position: GRID[19][11],
    },
    {
      name: MISCS.coin,
      position: GRID[22][11],
    },
    {
      name: MISCS.coin,
      position: GRID[25][11],
    },
  ],
};
