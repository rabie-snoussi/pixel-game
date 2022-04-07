import {
  BG_2_IMG,
  TILES_IMG,
  FG_0_IMG,
  FG_1_IMG,
  WATERFALL_IMG,
  WATERFALL_IMG_SIZE,
  TILES_IMG_SIZE,
  WATERFALL_BOTTOM_IMG,
  WATERFALL_BOTTOM_IMG_SIZE,
} from './constants.js';
import MAPS from './data/maps/index.js';
import { createElement, getBlocksVerteces } from './helpers.js';

export default class Map {
  //Private properties

  #map;

  constructor() {
    this.blocksVerteces = [];
    this.frameCounter = 0;
  }

  // Public methods

  getHeroPosition() {
    return this.#map.heroPosition;
  }

  getEnemies() {
    return this.#map.enemies;
  }

  animate() {
    this.animations.forEach((item) => {
      item.element.style.backgroundPositionX =
        this.#map.dimensions.waterfall.width * this.frameCounter + 'px';
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
      const element = createElement({
        item: tile,
        demensions: this.#map.dimensions.tiles,
        img: TILES_IMG,
        imgSize: TILES_IMG_SIZE,
      });

      document.getElementById('bg_tiles').appendChild(element);
    });

    this.#map.tiles.forEach((tile) => {
      const element = createElement({
        item: tile,
        demensions: this.#map.dimensions.tiles,
        img: TILES_IMG,
        imgSize: TILES_IMG_SIZE,
      });

      document.getElementById('tiles').appendChild(element);

      this.blocksVerteces = getBlocksVerteces({
        blocks: this.#map.tiles,
        dimensions: this.#map.dimensions.tiles,
      });
    });

    const waterfall = this.#map.waterfall.map((item) => {
      const element = createElement({
        item,
        demensions: this.#map.dimensions.waterfall,
        img: WATERFALL_IMG,
        imgSize: WATERFALL_IMG_SIZE,
      });

      document.getElementById('waterfall').appendChild(element);

      return { ...item, element };
    });

    const waterfallBottom = this.#map.waterfallBottom.map((item) => {
      const element = createElement({
        item,
        demensions: this.#map.dimensions.waterfallBottom,
        img: WATERFALL_BOTTOM_IMG,
        imgSize: WATERFALL_BOTTOM_IMG_SIZE,
      });

      document.getElementById('waterfall').appendChild(element);

      return { ...item, element };
    });

    this.animations = [...waterfall, ...waterfallBottom];
  }
}
