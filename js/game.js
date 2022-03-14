import { Controls, KEY_CODES } from './controls.js';
import { Hero, HERO_ACTIONS } from './hero.js';
import Map from './map.js';

const SCREEN_LIMITS = {
  x: {
    start: 0,
    end: 1600,
  },
  y: {
    start: 0,
    end: 896,
  },
};

const rightCollision = (block1, block2, marging = 0) => {
  return (
    block1.b.x + marging >= block2.a.x &&
    block1.b.y >= block2.a.y &&
    block1.b.y <= block2.d.y &&
    block1.c.x + marging >= block2.a.x &&
    block1.c.y >= block2.a.y &&
    block1.c.y <= block2.d.y &&
    //
    block1.b.x - marging <= block2.b.x
  );
};

const leftCollision = (block1, block2, marging = 0) => {
  return (
    block1.a.x - marging <= block2.b.x &&
    block1.a.y >= block2.b.y &&
    block1.a.y <= block2.c.y &&
    block1.d.x - marging <= block2.b.x &&
    block1.d.y >= block2.b.y &&
    block1.d.y <= block2.c.y &&
    //
    block1.a.x - marging >= block2.a.x
  );
};

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
      if (this.controls._pressed[KEY_CODES.right]) {
        const filtered = this.map.collisions.filter((block) =>
          rightCollision(this.hero.hurtbox, block)
        );

        if (!!filtered.length || this.hero.hurtbox.a.x >= SCREEN_LIMITS.x.end)
          return;

        return this.hero.goRight();
      }
      if (this.controls._pressed[KEY_CODES.left]) {
        const filtered = this.map.collisions.filter((block) =>
          leftCollision(this.hero.hurtbox, block)
        );

        if (!!filtered.length || this.hero.hurtbox.a.x <= SCREEN_LIMITS.x.start)
          return;

        return this.hero.goLeft();
      }
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
