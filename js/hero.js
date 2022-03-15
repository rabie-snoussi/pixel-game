import { HERO_SPRITS } from './data/hero.js';
import { SCREEN_LIMITS } from './game.js';

export const HERO_SIZE = 4;

export const HERO_SPEED = 6;

export const HERO_DIRECTIONS = {
  left: 'left',
  right: 'right',
};

export const HERO_ACTIONS = {
  idle: 'idle',
  attack: 'attack',
  sword_attack: 'sword_attack',
  run: 'run',
};

const rightCollision = (hero, block, marging = 0) => {
  return (
    hero.b.x + marging >= block.a.x &&
    hero.b.y >= block.a.y &&
    hero.b.y <= block.d.y &&
    hero.c.x + marging >= block.a.x &&
    hero.c.y >= block.a.y &&
    hero.c.y <= block.d.y &&
    //
    hero.b.x - marging <= block.b.x
  );
};

const leftCollision = (hero, block, marging = 0) => {
  return (
    hero.a.x - marging <= block.b.x &&
    hero.a.y >= block.b.y &&
    hero.a.y <= block.c.y &&
    hero.d.x - marging <= block.b.x &&
    hero.d.y >= block.b.y &&
    hero.d.y <= block.c.y &&
    //
    hero.a.x - marging >= block.a.x
  );
};

export class Hero {
  constructor() {
    this.element = document.getElementById('hero');
    this.collisions = [];
    this.direction = HERO_DIRECTIONS.right;
    this.action = HERO_ACTIONS.idle;
    this.sprits = HERO_SPRITS;
    this.actions = HERO_ACTIONS;
    this.is_animating = false;
    this.sprit_counter = 0;
    this.intervals = {
      idle: () => {},
    };
    this.hurtbox = {
      element: document.createElement('div'),
      a: {
        x: 0,
        y: 0,
      },
      b: {
        x: 0,
        y: 0,
      },
      c: {
        x: 0,
        y: 0,
      },
      d: {
        x: 0,
        y: 0,
      },
    };
    this.position = {
      x: 0,
      y: 0,
    };
  }

  setCollisions(collisions) {
    this.collisions = collisions;
  }

  idle() {
    clearInterval(this.intervals.idle());

    let i = 0;
    const sprits = this.sprits[this.actions.idle];

    const interval = setInterval(() => {
      if (this.action === this.actions.idle) {
        if (i >= sprits.sprits) i = 0;

        this.element.style.backgroundImage = 'url("' + sprits.img + '")';

        this.element.style.height = sprits.dimensions.height * HERO_SIZE + 'px';
        this.element.style.width = sprits.dimensions.width * HERO_SIZE + 'px';

        this.element.style.backgroundPositionX =
          sprits.dimensions.width * HERO_SIZE * -i + 'px';
        i++;
      }
    }, 100);

    return () => clearInterval(interval);
  }

  swordAttack() {
    if (
      !this.sprits[this.action].possible_actions.includes(
        this.actions.sword_attack
      )
    )
      return;

    this.action = this.actions.sword_attack;

    let i = 0;
    const sprits = this.sprits[this.actions.sword_attack];
    const interval = setInterval(() => {
      this.element.style.backgroundImage = 'url("' + sprits.img + '")';

      this.element.style.height = sprits.dimensions.height * HERO_SIZE + 'px';
      this.element.style.width = sprits.dimensions.width * HERO_SIZE + 'px';

      this.element.style.backgroundPositionX =
        sprits.dimensions.width * HERO_SIZE * -i + 'px';
      i++;

      if (i >= sprits.sprits) {
        this.action = this.actions.idle;
        this.intervals.idle = this.idle();

        clearInterval(interval);
      }
    }, 100);

    return () => {};
  }

  changeDirection(direction) {
    if (direction == HERO_DIRECTIONS.left)
      this.element.style.transform = 'scaleX(-1)';
    if (direction == HERO_DIRECTIONS.right)
      this.element.style.transform = 'none';
  }

  spawn(position) {
    this.position.x = position.x;
    this.position.y = position.y;

    this.element.style.top = this.position.y + 'px';
    this.element.style.left = position.x + 'px';

    this.intervals.idle = this.idle();
    this.updateHurtbox();
  }

  goRight() {
    this.changeDirection(HERO_DIRECTIONS.right);

    const interval = setInterval(() => {
      const filtered = this.collisions.filter((block) =>
        rightCollision(this.hurtbox, block)
      );
      if (!!filtered.length || this.hurtbox.a.x >= SCREEN_LIMITS.x.end) return;

      this.position.x += HERO_SPEED;
      this.element.style.left = this.position.x + 'px';
      this.direction = HERO_DIRECTIONS.right;

      this.updateHurtbox();
    }, 10);

    return () => clearInterval(interval);
  }

  goLeft() {
    this.changeDirection(HERO_DIRECTIONS.left);

    const interval = setInterval(() => {
      const filtered = this.collisions.filter((block) =>
        leftCollision(this.hurtbox, block)
      );

      if (!!filtered.length || this.hurtbox.a.x <= SCREEN_LIMITS.x.start)
        return;

      this.position.x -= HERO_SPEED;
      this.element.style.left = this.position.x + 'px';
      this.direction = HERO_DIRECTIONS.left;

      this.updateHurtbox();
    }, 10);

    return () => clearInterval(interval);
  }

  showHurtbox() {
    this.hurtbox.element.style.position = 'absolute';
    this.hurtbox.element.style.border = '1px solid black';

    document.getElementById('game').appendChild(this.hurtbox.element);
  }

  updateHurtbox() {
    this.hurtbox.a.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.a.x * HERO_SIZE;
    this.hurtbox.b.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.b.x * HERO_SIZE;
    this.hurtbox.c.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.c.x * HERO_SIZE;
    this.hurtbox.d.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.d.x * HERO_SIZE;

    this.hurtbox.a.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.a.y * HERO_SIZE;
    this.hurtbox.b.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.b.y * HERO_SIZE;
    this.hurtbox.c.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.c.y * HERO_SIZE;
    this.hurtbox.d.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.d.y * HERO_SIZE;

    this.hurtbox.element.style.top = this.hurtbox.a.y + 'px';
    this.hurtbox.element.style.left = this.hurtbox.a.x + 'px';

    this.hurtbox.element.style.width =
      this.hurtbox.b.x - this.hurtbox.a.x + 'px';
    this.hurtbox.element.style.height =
      this.hurtbox.c.y - this.hurtbox.a.y + 'px';
  }
}
