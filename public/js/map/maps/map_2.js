import {
  MAP_MATERIALS,
  GRID,
  TILES,
  MONSTERS,
  MISCS,
} from '../../constants.js';

export default {
  dirt: true,
  water: false,
  rocks: false,
  hero: { position: GRID[0][18] },
  monsters: [{ name: MONSTERS.goblin, position: GRID[26][8] }],
  winningBlock: {
    position: GRID[49][0],
    dimensions: { width: 16, height: 16 * 20 },
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
      position: GRID[28][0],
      backgroundPosition: TILES.normal.green[1][1],
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
      position: GRID[28][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][2],
      backgroundPosition: TILES.normal.green[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][2],
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
      backgroundPosition: TILES.reversed.green[2][0],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][4],
      backgroundPosition: TILES.normal.green[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][6],
      backgroundPosition: TILES.normal.green[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][8],
      backgroundPosition: TILES.normal.green[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][10],
      backgroundPosition: TILES.normal.green[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][12],
      backgroundPosition: TILES.normal.green[0][2],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][10],
      backgroundPosition: TILES.floating.green[0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][10],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][10],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][10],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][10],
      backgroundPosition: TILES.floating.green[2],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][14],
      backgroundPosition: TILES.floating.green[0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][14],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][14],
      backgroundPosition: TILES.floating.green[2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][14],
      backgroundPosition: TILES.floating.green[0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][14],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][14],
      backgroundPosition: TILES.floating.green[2],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][20],
      backgroundPosition: TILES.normal.green[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][20],
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

    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[21][9],
    },
    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[25][9],
    },

    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[11][13],
    },
    {
      ...MAP_MATERIALS.bigflowers,
      position: GRID[38][13],
    },

    {
      ...MAP_MATERIALS.arrowPlateRight,
      position: GRID[44][18],
    },

    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[0][19],
    },
    {
      ...MAP_MATERIALS.grass,
      position: GRID[4][19],
    },
    {
      ...MAP_MATERIALS.drygrass,
      position: GRID[45][19],
    },
  ],

  // MISCS
  // --------------------------------------------------

  miscs: [
    {
      name: MISCS.coin,
      position: GRID[19][7],
    },

    {
      name: MISCS.coin,
      position: GRID[30][7],
    },

    {
      name: MISCS.coin,
      position: GRID[16][8],
    },
    {
      name: MISCS.coin,
      position: GRID[33][8],
    },

    {
      name: MISCS.coin,
      position: GRID[14][10],
    },
    {
      name: MISCS.coin,
      position: GRID[35][10],
    },

    {
      name: MISCS.apple,
      position: GRID[11][12],
    },

    // --------------------------------------------------
    {
      name: MISCS.water,
      position: GRID[6][22],
    },
    {
      name: MISCS.water,
      position: GRID[8][22],
    },
    {
      name: MISCS.water,
      position: GRID[10][22],
    },
    {
      name: MISCS.water,
      position: GRID[12][22],
    },
    {
      name: MISCS.water,
      position: GRID[14][22],
    },
    {
      name: MISCS.water,
      position: GRID[16][22],
    },
    {
      name: MISCS.water,
      position: GRID[18][22],
    },
    {
      name: MISCS.water,
      position: GRID[20][22],
    },
    {
      name: MISCS.water,
      position: GRID[22][22],
    },
    {
      name: MISCS.water,
      position: GRID[24][22],
    },
    {
      name: MISCS.water,
      position: GRID[26][22],
    },
    {
      name: MISCS.water,
      position: GRID[28][22],
    },
    {
      name: MISCS.water,
      position: GRID[30][22],
    },
    {
      name: MISCS.water,
      position: GRID[32][22],
    },
    {
      name: MISCS.water,
      position: GRID[34][22],
    },
    {
      name: MISCS.water,
      position: GRID[36][22],
    },
    {
      name: MISCS.water,
      position: GRID[38][22],
    },
    {
      name: MISCS.water,
      position: GRID[40][22],
    },
    {
      name: MISCS.water,
      position: GRID[42][22],
    },

    // --------------------------------------------------

    {
      name: MISCS.water,
      position: GRID[6][24],
    },
    {
      name: MISCS.water,
      position: GRID[8][24],
    },
    {
      name: MISCS.water,
      position: GRID[10][24],
    },
    {
      name: MISCS.water,
      position: GRID[12][24],
    },
    {
      name: MISCS.water,
      position: GRID[14][24],
    },
    {
      name: MISCS.water,
      position: GRID[16][24],
    },
    {
      name: MISCS.water,
      position: GRID[18][24],
    },
    {
      name: MISCS.water,
      position: GRID[20][24],
    },
    {
      name: MISCS.water,
      position: GRID[22][24],
    },
    {
      name: MISCS.water,
      position: GRID[24][24],
    },
    {
      name: MISCS.water,
      position: GRID[26][24],
    },
    {
      name: MISCS.water,
      position: GRID[28][24],
    },
    {
      name: MISCS.water,
      position: GRID[30][24],
    },
    {
      name: MISCS.water,
      position: GRID[32][24],
    },
    {
      name: MISCS.water,
      position: GRID[34][24],
    },
    {
      name: MISCS.water,
      position: GRID[36][24],
    },
    {
      name: MISCS.water,
      position: GRID[38][24],
    },
    {
      name: MISCS.water,
      position: GRID[40][24],
    },
    {
      name: MISCS.water,
      position: GRID[42][24],
    },

    // --------------------------------------------------

    {
      name: MISCS.water,
      position: GRID[6][26],
    },
    {
      name: MISCS.water,
      position: GRID[8][26],
    },
    {
      name: MISCS.water,
      position: GRID[10][26],
    },
    {
      name: MISCS.water,
      position: GRID[12][26],
    },
    {
      name: MISCS.water,
      position: GRID[14][26],
    },
    {
      name: MISCS.water,
      position: GRID[16][26],
    },
    {
      name: MISCS.water,
      position: GRID[18][26],
    },
    {
      name: MISCS.water,
      position: GRID[20][26],
    },
    {
      name: MISCS.water,
      position: GRID[22][26],
    },
    {
      name: MISCS.water,
      position: GRID[24][26],
    },
    {
      name: MISCS.water,
      position: GRID[26][26],
    },
    {
      name: MISCS.water,
      position: GRID[28][26],
    },
    {
      name: MISCS.water,
      position: GRID[30][26],
    },
    {
      name: MISCS.water,
      position: GRID[32][26],
    },
    {
      name: MISCS.water,
      position: GRID[34][26],
    },
    {
      name: MISCS.water,
      position: GRID[36][26],
    },
    {
      name: MISCS.water,
      position: GRID[38][26],
    },
    {
      name: MISCS.water,
      position: GRID[40][26],
    },
    {
      name: MISCS.water,
      position: GRID[42][26],
    },
  ],
};
