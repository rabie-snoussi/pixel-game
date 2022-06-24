import { BG_2_IMG, FG_0_IMG, FG_1_IMG } from '../constants.js';
import MAPS from './maps/index.js';
import { createMaterial } from './helpers.js';
import { createVertices, getVertices } from '../helpers.js';

export default class Map {
  constructor() {
    this.map = null;
    this.blocks = [];
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

  generate(i) {
    this.map = MAPS[i];

    this.monsters = this.map.monsters;
    this.collectibles = this.map.collectibles;
    this.miscs = this.map.miscs;
    this.hero = this.map.hero;

    if (this.map.bg2)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + BG_2_IMG + '")';

    if (this.map.fg0)
      document.getElementById('fg_0').style.backgroundImage =
        'url("' + FG_0_IMG + '")';

    if (this.map.fg1)
      document.getElementById('fg_1').style.backgroundImage =
        'url("' + FG_1_IMG + '")';

    this.blocks = this.map.materials.map((item) => {
      const element = createMaterial(item);

      document.getElementById('materials').appendChild(element);

      if (item.animation) this.animations.push({ ...item, element });

      if (item.collision)
        return getVertices(createVertices(item.dimensions))(item.position);
    });
  }
}
