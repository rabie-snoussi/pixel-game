import {
  BG_2_IMG,
  FG_0_IMG,
  FG_1_IMG,
} from '../constants.js';
import MAPS from './data/index.js';
import { createElement, getVerteces } from './helpers.js';

export default class Map {
  //Private properties

  #map;

  constructor() {
    this.blocksVerteces = [];
    this.frameCounter = 0;
    this.animations = [];
  }

  // Public methods

  getHeroPosition() {
    return this.#map.heroPosition;
  }

  getEnemies() {
    return this.#map.enemies;
  }

  update() {
    this.animations.forEach((item) => {
      item.element.style.backgroundPositionX =
      item.dimensions.width * this.frameCounter + 'px';
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

    this.#map.materials
      .forEach((item) => {
        const element = createElement(item);

        document.getElementById('materials').appendChild(element);

        if(item.collision) this.blocksVerteces.push(getVerteces(item));

        if(item.animation) this.animations.push({...item, element});
      });
  }
}
