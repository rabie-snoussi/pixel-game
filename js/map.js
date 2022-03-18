import MAPS from './data/maps/maps.js';

export default class Map {
  //Private properties

  #blocksPosition;
  #map;

  constructor() {}

  // Public methods

  getBlocksPosition() {
    return this.#blocksPosition;
  }

  getHeroPosition() {
    return this.#map.heroPosition;
  }

  initialize(i) {
    this.#map = MAPS[i];

    if (this.#map.background)
      document.getElementById('bg_2').style.backgroundImage =
        'url("' + this.#map.background + '")';

    this.#map.tiles.forEach((tile) => {
      const tileElement = document.createElement('div');

      tileElement.style.position = 'absolute';
      tileElement.style.height = this.#map.tileDimensions.height + 'px';
      tileElement.style.width = this.#map.tileDimensions.width + 'px';
      tileElement.style.backgroundImage = 'url("' + this.#map.tileImg + '")';
      tileElement.style.backgroundPositionX = tile.backgroundPosition.x + 'px';
      tileElement.style.backgroundPositionY = tile.backgroundPosition.y + 'px';
      (tileElement.style.left = tile.position.x + 'px'),
        (tileElement.style.top = tile.position.y + 'px');

      document.getElementById('tiles').appendChild(tileElement);

      this.#blocksPosition = this.#map.tiles.map(({ position }) => ({
        a: {
          x: position.x,
          y: position.y,
        },
        b: {
          x: position.x + this.#map.tileDimensions.width,
          y: position.y,
        },
        c: {
          x: position.x + this.#map.tileDimensions.width,
          y: position.y + this.#map.tileDimensions.height,
        },
        d: {
          x: position.x,
          y: position.y + this.#map.tileDimensions.height,
        },
      }));
    });
  }
}
