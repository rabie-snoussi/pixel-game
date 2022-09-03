import {
  MAP_MATERIALS,
  GRID,
  TILES,
  MISCS,
  MONSTERS,
} from '../../constants.js';

export default {
  dirt: false,
  water: false,
  rocks: false,
  hero: { position: GRID[0][24] },
  monsters: [],
  winningBlock: {
    position: GRID[49][20],
    dimensions: { width: 16, height: 16 * 6 },
  },
  materials: [
    // TILES
    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][0],
      backgroundPosition: TILES.normal.black[1][2],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][0],
      backgroundPosition: TILES.reversed.black[2][0],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][2],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][2],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][4],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][4],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][6],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][6],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][8],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][8],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][10],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][10],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][12],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][12],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][14],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][14],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][16],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][16],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][18],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][20],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][22],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][24],
      backgroundPosition: TILES.normal.brown[1][1],
      collision: false,
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][24],
      backgroundPosition: TILES.normal.black[0][1],
    },

    // --------------------------------------------------

    {
      ...MAP_MATERIALS.tile,
      position: GRID[0][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[2][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[4][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[6][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[8][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[10][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[12][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[14][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[16][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[18][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[20][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[22][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[24][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[26][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[28][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[30][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[32][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[34][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[36][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[38][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[40][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[42][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[44][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[46][26],
      backgroundPosition: TILES.normal.black[1][0],
    },
    {
      ...MAP_MATERIALS.tile,
      position: GRID[48][26],
      backgroundPosition: TILES.reversed.black[2][2],
    },

    // DECOR
    // --------------------------------------------------
  ],

  // MISCS
  // --------------------------------------------------

  miscs: [
    {
      id: 'trigger-1',
      name: MISCS.lever,
      position: GRID[12][3],
    },

    {
      id: 'trigger-2',
      name: MISCS.button,
      position: { x: GRID[18][25].x, y: GRID[18][25].y + 7.77 },
    },

    {
      name: MISCS.stone,
      position: GRID[36][3],
    },

    {
      name: MISCS.spikes,
      position: GRID[11][24],
      rotation: 180,
    },
    {
      name: MISCS.spikes,
      position: GRID[13][24],
      rotation: 180,
    },

    {
      name: MISCS.spikes,
      position: GRID[23][24],
      rotation: 180,
    },
    {
      name: MISCS.spikes,
      position: GRID[25][24],
      rotation: 180,
    },

    {
      name: MISCS.spikes,
      position: GRID[35][24],
      rotation: 180,
    },
    {
      name: MISCS.spikes,
      position: GRID[37][24],
      rotation: 180,
    },

    {
      name: MISCS.spikes,
      position: GRID[11][14],
      rotation: 180,
    },
    {
      name: MISCS.spikes,
      position: GRID[13][14],
      rotation: 180,
    },

    {
      name: MISCS.spikes,
      position: GRID[23][14],
      rotation: 180,
    },
    {
      name: MISCS.spikes,
      position: GRID[25][14],
      rotation: 180,
    },

    {
      name: MISCS.spikes,
      position: GRID[35][14],
      rotation: 180,
    },
    {
      name: MISCS.spikes,
      position: GRID[37][14],
      rotation: 180,
    },

    {
      name: MISCS.mushroom,
      position: GRID[46][24],
    },

    {
      name: MISCS.mushroom,
      position: GRID[4][14],
    },

    {
      name: MISCS.mushroom,
      position: GRID[44][14],
    },

    {
      name: MISCS.woodSlabMiddle,
      position: GRID[8][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[10][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[12][5],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[14][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[16][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[18][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[20][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[22][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[24][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[26][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[28][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[30][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[32][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[34][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[36][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[38][5],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[40][5],
      triggerId: 'trigger-1',
    },

    {
      name: MISCS.woodSlabMiddle,
      position: GRID[4][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[6][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[8][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[10][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[12][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[14][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[16][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[18][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[20][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[22][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[24][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[26][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[28][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[30][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[32][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[34][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[36][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[38][16],
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[40][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[42][16],
      triggerId: 'trigger-1',
    },
    {
      name: MISCS.woodSlabMiddle,
      position: GRID[44][16],
    },

    {
      name: MISCS.door,
      position: GRID[48][18],
      triggerId: 'trigger-2',
    },

    {
      name: MISCS.coin,
      position: GRID[11][13],
    },
    {
      name: MISCS.coin,
      position: GRID[14][13],
    },
    {
      name: MISCS.coin,
      position: GRID[23][13],
    },
    {
      name: MISCS.coin,
      position: GRID[26][13],
    },
    {
      name: MISCS.coin,
      position: GRID[35][13],
    },
    {
      name: MISCS.coin,
      position: GRID[38][13],
    },

    {
      name: MISCS.coin,
      position: GRID[11][23],
    },
    {
      name: MISCS.coin,
      position: GRID[14][23],
    },
    {
      name: MISCS.coin,
      position: GRID[23][23],
    },
    {
      name: MISCS.coin,
      position: GRID[26][23],
    },
    {
      name: MISCS.coin,
      position: GRID[35][23],
    },
    {
      name: MISCS.coin,
      position: GRID[38][23],
    },
  ],
};
