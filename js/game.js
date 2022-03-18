import { Controls } from './controls.js';
import { Hero } from './hero.js';
import Map from './map.js';

class Game {

  // Private Properties

  #controls = new Controls();
  #map = new Map();
  #hero = new Hero();

  constructor() {}

  // Public Methods

  showHurtbox() {
    this.#hero.showHurtbox();
  }

  godMode() {
    this.#controls.godMode()
    this.#hero.godMode();
  }

  initialize() {
    this.#controls.initialize(this.#hero);
    this.#map.initialize(0);
    this.#hero.initialize(
      this.#map.getHeroPosition(),
      this.#map.getBlocksPosition()
    );
  }
}

const game = new Game();

game.initialize();
// game.godMode();
game.showHurtbox();
