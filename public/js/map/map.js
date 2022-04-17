import { BG_2_IMG, FG_0_IMG, FG_1_IMG } from '../constants.js';
import MAPS from './maps/index.js';
import { createMaterial } from './helpers.js';
import { createVertices, getVertices } from '../helpers.js';

export default class Map {
  constructor() {
    this.map = null;
    this.blocksVertices = [];
    this.animations = [];
    this.frameCounter = 0;
  }

  update() {
    this.animations.forEach((item) => {
      item.element.style.backgroundPositionX =
        item.dimensions.width * this.frameCounter + 'px';
    });
    this.frameCounter--;
  }

  initialize(i) {
    this.map = MAPS[i];

    this.enemies = this.map.enemies;
    this.collectibles = this.map.collectibles;
    this.triggers = this.map.triggers;
    this.items = this.map.items;
    this.heroPosition = this.map.heroPosition;

    if (this.map.bg2)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + BG_2_IMG + '")';

    if (this.map.fg0)
      document.getElementById('fg_0').style.backgroundImage =
        'url("' + FG_0_IMG + '")';

    if (this.map.fg1)
      document.getElementById('fg_1').style.backgroundImage =
        'url("' + FG_1_IMG + '")';

    this.map.materials.forEach((item) => {
      const element = createMaterial(item);

      document.getElementById('materials').appendChild(element);

      if (item.collision)
        this.blocksVertices.push(
          getVertices(createVertices(item.dimensions))(item.position)
        );

      if (item.animation) this.animations.push({ ...item, element });
    });
  }
}
