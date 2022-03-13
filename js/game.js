import maps from './constants/maps.js';

const TILES_IMG = './assets/tiles_background_foreground/tileset_64x64.png';
const BG_IMG = './assets/tiles_background_foreground/bg_2.png';
const TILE_DIMENSIONS = {
  height: 64,
  width: 64,
};

class Game {
  constructor() {
    this.maps = maps;
    this.map = null;
  }

  intialize() {
    this.map = this.maps[0];
  }

  drawMap() {
    if (this.map.bg_2)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + BG_IMG + '")';

    this.map.tiles.forEach((row) => {
      const tilesRow = document.createElement('div');
      tilesRow.style.display = 'flex';

      row.forEach((position) => {
        const tile = document.createElement('div');

        tile.style.height = TILE_DIMENSIONS.height + 'px';
        tile.style.width = TILE_DIMENSIONS.width + '64px';
        tile.style.backgroundImage = 'url("' + TILES_IMG + '")';
        tile.style.backgroundPositionX =
          TILE_DIMENSIONS.width * position.x + 'px';
        tile.style.backgroundPositionY =
          TILE_DIMENSIONS.height * position.y + 'px';

        tilesRow.appendChild(tile);
      });
      document.getElementById('tiles').appendChild(tilesRow);
    });
  }

  start() {
    this.drawMap();
  }
}

const game = new Game();

game.intialize();
game.start();
