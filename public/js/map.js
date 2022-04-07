import {
  RESOLUTION_MULTIPLIER,
  BG_2_IMG,
  TILES_IMG,
  FG_0_IMG,
  FG_1_IMG,
} from './constants.js';
import MAPS from './data/maps/index.js';

export default class Map {
  //Private properties

  #blocksVerteces;
  #map;

  constructor() {
    this.frameCounter = 0;
  }

  // Public methods

  getBlocksVerteces() {
    return this.#blocksVerteces;
  }

  getHeroPosition() {
    return this.#map.heroPosition;
  }

  getEnemies() {
    return this.#map.enemies;
  }

  animate() { 
    this.waterfall.forEach(item => {
      item.element.style.backgroundPositionX = item.dimensions.width * this.frameCounter + 'px';
    });
    this.frameCounter--;
  }


  initialize(i) {
    this.#map = MAPS[i];

    if (this.#map.bg2)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + BG_2_IMG + '")';

    if (this.#map.fg0)
      document.getElementById('fg_0').style.backgroundImage =
        'url("' + FG_0_IMG + '")';

    if (this.#map.fg1)
      document.getElementById('fg_1').style.backgroundImage =
        'url("' + FG_1_IMG + '")';

    this.#map.bgTiles.forEach((tile) => {
      const tileElement = document.createElement('div');

      tileElement.style.position = 'absolute';
      tileElement.style.height = this.#map.demensions.height + 'px';
      tileElement.style.width = this.#map.demensions.width + 'px';
      tileElement.style.backgroundImage = 'url("' + TILES_IMG + '")';
      tileElement.style.backgroundPositionX = tile.backgroundPosition.x + 'px';
      tileElement.style.backgroundPositionY = tile.backgroundPosition.y + 'px';
      tileElement.style.left = tile.position.x + 'px';
      tileElement.style.top = tile.position.y + 'px';
      tileElement.style.backgroundSize = 384 * RESOLUTION_MULTIPLIER + 'px';
      tileElement.style.imageRendering = 'pixelated';

      document.getElementById('bg_tiles').appendChild(tileElement);
    });

    this.#map.tiles.forEach((tile) => {
      const tileElement = document.createElement('div');

      tileElement.style.position = 'absolute';
      tileElement.style.height = this.#map.demensions.height + 'px';
      tileElement.style.width = this.#map.demensions.width + 'px';
      tileElement.style.backgroundImage = 'url("' + TILES_IMG + '")';
      tileElement.style.backgroundPositionX = tile.backgroundPosition.x + 'px';
      tileElement.style.backgroundPositionY = tile.backgroundPosition.y + 'px';
      tileElement.style.left = tile.position.x + 'px';
      tileElement.style.top = tile.position.y + 'px';
      tileElement.style.backgroundSize = 384 * RESOLUTION_MULTIPLIER + 'px';
      tileElement.style.imageRendering = 'pixelated';

      document.getElementById('tiles').appendChild(tileElement);

      this.#blocksVerteces = this.#map.tiles.map(({ position }) => ({
        a: {
          x: position.x,
          y: position.y,
        },
        b: {
          x: position.x + this.#map.demensions.width,
          y: position.y,
        },
        c: {
          x: position.x + this.#map.demensions.width,
          y: position.y + this.#map.demensions.height,
        },
        d: {
          x: position.x,
          y: position.y + this.#map.demensions.height,
        },
      }));
    });

    this.waterfall = this.#map.waterfall.map((item) => {
      const waterfallEl = document.createElement('div');

      waterfallEl.style.position = 'absolute';
      waterfallEl.style.height = item.dimensions.height + 'px';
      waterfallEl.style.width = item.dimensions.width + 'px';
      waterfallEl.style.backgroundImage = 'url("' + item.img + '")';
      waterfallEl.style.left = item.position.x + 'px';
      waterfallEl.style.top = item.position.y + 'px';
      waterfallEl.style.backgroundSize = item.size;
      waterfallEl.style.imageRendering = 'pixelated';

      document.getElementById('waterfall').appendChild(waterfallEl);

      return {...item, element: waterfallEl};
    });
  }
}
