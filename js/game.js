import Controls from './controls.js';
import { GRID } from './data/grid.js';
import Hero from './hero.js';
import Map from './map.js';
import Enemy from './enemy.js';
import { GRID_DIMENSIONS } from './constants.js';

class Game {
  // Private Properties

  #controls = new Controls();
  #map = new Map();
  #hero = new Hero();
  #enemy = new Enemy();

  constructor() {}

  // Public Methods

  showGrid() {
    const gridElement = document.createElement('div');
    gridElement.setAttribute('id', 'grid');

    GRID.forEach((row, i) => {
      row.forEach((item, j) => {
        const gridItemElement = document.createElement('div');

        gridItemElement.style.position = 'absolute';
        gridItemElement.style.boxSizing = 'border-box';
        gridItemElement.style.height = GRID_DIMENSIONS.height + 'px';
        gridItemElement.style.width = GRID_DIMENSIONS.width + 'px';
        gridItemElement.style.left = item.x + 'px';
        gridItemElement.style.top = item.y + 'px';
        gridItemElement.style.border = '0.5px solid white';
        gridItemElement.style.textAlign = 'center';
        gridItemElement.style.color = 'white';
        gridItemElement.style.fontSize = '10px';
        gridElement.style.opacity = '0.5';
        gridItemElement.innerHTML = i + ' x ' + j;

        gridElement.appendChild(gridItemElement);
      });
    });

    document.getElementById('background').appendChild(gridElement);
  }

  showHurtbox() {
    this.#hero.showHurtbox();
    this.#enemy.showHurtbox();
  }

  godMode() {
    this.#controls.godMode();
    this.#hero.godMode();
  }

  initialize() {
    this.#controls.initialize(this.#hero);
    this.#map.initialize(0);
    this.#enemy.initialize({
      enemies: this.#map.getEnemies(),
      blocksVerteces: this.#map.getBlocksVerteces(),
      heroHurtbox: this.#hero.getHurtbox()
    });
    this.#hero.initialize({
      position: this.#map.getHeroPosition(),
      blocksVerteces: this.#map.getBlocksVerteces(),
      enemiesVerteces: this.#enemy.getHurtbox(),
    });
  }
}

const game = new Game();

game.initialize();
game.godMode();
game.showGrid();
game.showHurtbox();
