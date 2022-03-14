import { Controls, KEY_CODES } from './controls.js';
import { Hero, HERO_ACTIONS } from './hero.js';
import Map from './map.js';

class Game {
  constructor() {
    this.controls = new Controls();
    this.map = new Map();
    this.hero = new Hero();
  }

  animate() {
    setInterval(() => {
      if (this.controls._pressed[KEY_CODES.right])
        return this.hero.playAnimation(HERO_ACTIONS.run);
      if (this.controls._pressed[KEY_CODES.left])
        return this.hero.playAnimation(HERO_ACTIONS.run);
      if (this.controls._pressed[KEY_CODES.spacebar])
        return this.hero.playAnimation(HERO_ACTIONS.sword_attack);
      this.hero.playAnimation(HERO_ACTIONS.idle);
    }, 100);
  }

  movement() {
    setInterval(() => {
      if (this.controls._pressed[KEY_CODES.right]) return this.hero.goRight();
      if (this.controls._pressed[KEY_CODES.left]) return this.hero.goLeft();
    }, 10);
  }

  initialize() {
    this.controls.addEventListeners();
    this.animate();
    this.movement();
    this.hero.showHurtbox();
  }

  start() {
    this.map.generate(0);
    this.hero.spawn(this.map.getHeroPosition());
    this.hero.playAnimation(this.hero.action);
  }
}

const game = new Game();

game.initialize();
game.start();
