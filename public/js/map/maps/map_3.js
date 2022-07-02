import {
  MAP_MATERIALS,
  GRID,
  TILES,
  MONSTERS,
  MISCS,
} from '../../constants.js';

export default {
  bg2: true,
  fg0: true,
  fg1: true,
  hero: { position: GRID[0][18] },
  monsters: [{ name: MONSTERS.goblin, position: GRID[29][8] }],
  winningBlock: {
    position: GRID[49][0],
    dimensions: { width: 16, height: 16 * 4 },
  },
  materials: [
    // TILES
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][4],
      backgroundPosition: TILES.floating.green[0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][4],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][4],
      backgroundPosition: TILES.floating.green[1],
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

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][10],
      backgroundPosition: TILES.floating.green[0],
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
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][10],
      backgroundPosition: TILES.floating.green[2],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][14],
      backgroundPosition: TILES.floating.green[0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][14],
      backgroundPosition: TILES.floating.green[1],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][14],
      backgroundPosition: TILES.floating.green[2],
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
    {
      name: MISCS.water,
      position: GRID[44][22],
    },
    {
      name: MISCS.water,
      position: GRID[46][22],
    },
    {
      name: MISCS.water,
      position: GRID[48][22],
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
    {
      name: MISCS.water,
      position: GRID[44][24],
    },
    {
      name: MISCS.water,
      position: GRID[46][24],
    },
    {
      name: MISCS.water,
      position: GRID[48][24],
    },
  ],
};
