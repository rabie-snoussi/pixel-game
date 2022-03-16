import { Controls } from './controls.js';
import { Hero } from './hero.js';
import Map from './map.js';

export const SCREEN_LIMITS = {
  x: {
    start: 0,
    end: 1600,
  },
  y: {
    start: 0,
    end: 896,
  },
};

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
