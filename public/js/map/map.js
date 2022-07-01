import { BG_2_IMG, FG_0_IMG, FG_1_IMG } from '../constants.js';
import MAPS from './maps/index.js';
import { createMaterial } from './helpers.js';
import { createVertices, getVertices } from '../helpers.js';

export default class Map {
  constructor() {
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
    const map = MAPS[i];

    const monsters = map.monsters;
    const miscs = map.miscs;
    const hero = map.hero;
    this.winningBlock =
      map.winningBlock &&
      getVertices(createVertices(map.winningBlock.dimensions))(
        map.winningBlock.position
      );

    if (map.bg2)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + BG_2_IMG + '")';

    if (map.fg0)
      document.getElementById('fg_0').style.backgroundImage =
        'url("' + FG_0_IMG + '")';

    if (map.fg1)
      document.getElementById('fg_1').style.backgroundImage =
        'url("' + FG_1_IMG + '")';

    this.blocks = map.materials.map((item) => {
      const element = createMaterial(item);

      document.getElementById('materials').appendChild(element);

      if (item.animation) this.animations.push({ ...item, element });

      if (item.collision)
        return getVertices(createVertices(item.dimensions))(item.position);
    });

    return { hero, monsters, miscs };
  }
}
