import MAPS from './data/maps/index.js';

export default class Map {
  constructor() {
    this.maps = MAPS;
    this.map = null;
  }

  generate(i) {
    this.map = this.maps[i];
    if (this.map.background)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + this.map.background + '")';

    this.map.tiles.forEach((tile) => {
      const tileElement = document.createElement('div');

      tileElement.style.position = 'absolute';
      tileElement.style.height = this.map.tile_dimensions.height + 'px';
      tileElement.style.width = this.map.tile_dimensions.width + 'px';
      tileElement.style.backgroundImage = 'url("' + this.map.tile_img + '")';
      tileElement.style.backgroundPositionX = tile.backgroundPosition.x + 'px';
      tileElement.style.backgroundPositionY = tile.backgroundPosition.y + 'px';
      (tileElement.style.left = tile.position.x + 'px'),
        (tileElement.style.top = tile.position.y + 'px');

      document.getElementById('tiles').appendChild(tileElement);
    });
  }

  getHeroPosition() {
    return this.map.hero_position;
  }
}
