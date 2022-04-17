import {
  BG_2_IMG,
  FG_0_IMG,
  FG_1_IMG,
} from '../constants.js';
import MAPS from './data/index.js';
import { createMaterial } from './helpers.js';
import { createVertices, getVertices } from '../helpers.js';

export default class Map {
  //Private properties

  #map;

  constructor() {
    this.blocksVertices = [];
    this.frameCounter = 0;
    this.animations = [];
  }

  // Public methods

  update() {
    this.animations.forEach((item) => {
      item.element.style.backgroundPositionX =
      item.dimensions.width * this.frameCounter + 'px';
    });
    this.frameCounter--;
  }

  initialize(i) {
    this.#map = MAPS[i];

    this.enemies = this.#map.enemies;
    this.collectibles = this.#map.collectibles;
    this.triggers = this.#map.triggers;
    this.heroPosition = this.#map.heroPosition;

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
        const element = createMaterial(item);

        document.getElementById('materials').appendChild(element);

        if(item.collision) this.blocksVertices.push(getVertices(createVertices(item.dimensions))(item.position));

        if(item.animation) this.animations.push({...item, element});
      });
  }
}
