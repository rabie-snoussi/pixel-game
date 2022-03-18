import { Controls } from './controls.js';
import { Hero } from './hero.js';
import Map from './map.js';

class Game {
  constructor() {
    this.controls = new Controls();
    this.map = new Map();
    this.hero = new Hero();
  }

  start() {
    this.controls.addEventListeners(this);
    this.map.generate(0);
    this.hero.showHurtbox();
    this.hero.setBlocksPosition(this.map.getBlocksPosition());
    this.hero.spawn(this.map.getHeroPosition());
  }
}

const game = new Game();

game.start();
