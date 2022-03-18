import { HERO_SPRITS } from './data/hero.js';
import {
  HERO_DIRECTIONS,
  HERO_ACTIONS,
  HERO_SIZE,
  HERO_SPEED,
  MOVEMENT_INTERVAL,
  ANIMATION_INTERVAL,
  MAX_JUMPS,
} from './constants.js';
import { distanceToAdd } from './helpers.js';

export class Hero {
  constructor() {
    this.element = document.getElementById('hero');
    this.blocks_position = [];
    this.direction = HERO_DIRECTIONS.right;
    this.sprits = HERO_SPRITS[HERO_ACTIONS.idle];
    this.sprits_counter = 0;
    this.is_jumping = false;
    this.jump_count = MAX_JUMPS;
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

  idle() {
    if (!this.sprits.possible_actions.includes(HERO_ACTIONS.idle)) return;

    this.sprits = HERO_SPRITS[HERO_ACTIONS.idle];
    this.sprits_counter = 0;

    return () => clearInterval(interval);
  }

  run() {
    if (!this.sprits.possible_actions.includes(HERO_ACTIONS.run)) return;

    this.sprits = HERO_SPRITS[HERO_ACTIONS.run];
    this.sprits_counter = 0;
  }

  animate() {
    setInterval(() => {
      if (this.sprits_counter >= this.sprits.number) this.sprits_counter = 0;

      this.spritImgUpdate();
      this.sprits_counter++;

      if (!this.sprits.loop && this.sprits_counter >= this.sprits.number)
        this.idle();
    }, ANIMATION_INTERVAL);
  }

  swordAttack() {
    if (!this.sprits.possible_actions.includes(HERO_ACTIONS.sword_attack))
      return;

    this.sprits = HERO_SPRITS[HERO_ACTIONS.sword_attack];
    this.sprits_counter = 0;
  }

  fallDetection() {
    let i = 1;
    let is_falling = false;
    let double_jump = false;

    setInterval(() => {
      if (this.is_jumping) return;

      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        bottom: i * 3,
      });

      if (!distance) {
        is_falling = false;
        this.jump_count = MAX_JUMPS;
        if (i === 1) return;
        this.idle();
        double_jump = false;
        i = 1;
        return;
      }

      if (this.jump_count === 0 && !double_jump) {
        double_jump = true;
        if (i !== 1) {
          i = 1;
        }
      }

      if (!is_falling) this.fallAnimation();

      is_falling = true;
      this.position.y += distance;
      this.updateHeroPosition();

      i++;
    }, MOVEMENT_INTERVAL);
  }

  fallAnimation() {
    if (!this.sprits.possible_actions.includes(HERO_ACTIONS.fall)) return;

    this.sprits = HERO_SPRITS[HERO_ACTIONS.fall];
    this.sprits_counter = 0;
  }

  spawn(position) {
    this.position.x = position.x;
    this.position.y = position.y;

    this.idle();
    this.updateHeroPosition();
    this.fallDetection();
    this.animate();
  }

  goRight() {
    this.run();

    const interval = setInterval(() => {
      if (!this.sprits.can_move) return;

      this.changeDirection(HERO_DIRECTIONS.right);

      const {
        right: { distance },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        right: HERO_SPEED,
      });

      this.position.x += distance;
      this.updateHeroPosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.idle();
      clearInterval(interval);
    };
  }

  goLeft() {
    this.run();

    const interval = setInterval(() => {
      if (!this.sprits.can_move) return;

      this.changeDirection(HERO_DIRECTIONS.left);

      const {
        left: { distance },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        left: HERO_SPEED,
      });

      this.position.x -= distance;

      this.updateHeroPosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.idle();
      clearInterval(interval);
    };
  }

  jumpAnimation() {
    if (!this.sprits.possible_actions.includes(HERO_ACTIONS.jump)) return;

    this.sprits = HERO_SPRITS[HERO_ACTIONS.jump];
    this.sprits_counter = 0;

    return () => {
      clearInterval(interval);
    };
  }

  jump() {
    if (this.is_jumping) return;
    if (!this.jump_count) return;
    if (!this.sprits.can_move) return;

    this.is_jumping = true;
    this.jumpAnimation();
    this.jump_count--;
    let i = 11;

    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        top: i * 2,
      });

      this.position.y -= distance;
      this.updateHeroPosition();

      if (i <= 0 || collision) {
        this.is_idle = true;
        this.is_jumping = false;
        clearInterval(interval);
      }

      i--;
    }, MOVEMENT_INTERVAL);
  }

  up() {
    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        top: HERO_SPEED,
      });

      this.position.y -= distance;

      if (collision) clearInterval(interval);

      this.updateHeroPosition();
    }, 20);

    return () => clearInterval(interval);
  }

  down() {
    const interval = setInterval(() => {
      const {
        bottom: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        bottom: HERO_SPEED,
      });

      this.position.y += distance;

      if (collision) clearInterval(interval);

      this.updateHeroPosition();
    }, 20);

    return () => clearInterval(interval);
  }

  showHurtbox() {
    this.hurtbox.element.style.position = 'absolute';
    this.hurtbox.element.style.border = '1px solid black';

    document.getElementById('game').appendChild(this.hurtbox.element);
  }

  updateHeroPosition() {
    this.element.style.top = this.position.y + 'px';
    this.element.style.left = this.position.x + 'px';

    this.updateHurtbox();
  }

  updateHurtbox() {
    this.hurtbox.a.x = this.position.x + this.sprits.hurtbox.a.x * HERO_SIZE;
    this.hurtbox.b.x = this.position.x + this.sprits.hurtbox.b.x * HERO_SIZE;
    this.hurtbox.c.x = this.position.x + this.sprits.hurtbox.c.x * HERO_SIZE;
    this.hurtbox.d.x = this.position.x + this.sprits.hurtbox.d.x * HERO_SIZE;

    this.hurtbox.a.y = this.position.y + this.sprits.hurtbox.a.y * HERO_SIZE;
    this.hurtbox.b.y = this.position.y + this.sprits.hurtbox.b.y * HERO_SIZE;
    this.hurtbox.c.y = this.position.y + this.sprits.hurtbox.c.y * HERO_SIZE;
    this.hurtbox.d.y = this.position.y + this.sprits.hurtbox.d.y * HERO_SIZE;

    this.hurtbox.element.style.top = this.hurtbox.a.y + 'px';
    this.hurtbox.element.style.left = this.hurtbox.a.x + 'px';

    this.hurtbox.element.style.width =
      this.hurtbox.b.x - this.hurtbox.a.x + 'px';
    this.hurtbox.element.style.height =
      this.hurtbox.c.y - this.hurtbox.a.y + 'px';
  }

  setBlocksPosition(blocks) {
    this.blocks_position = blocks;
  }

  spritImgUpdate() {
    if (this.direction === HERO_DIRECTIONS.left)
      this.element.style.left =
        this.position.x -
        (this.sprits.dimensions.width * HERO_SIZE -
          (this.sprits.hurtbox.b.x - this.sprits.hurtbox.a.x) * HERO_SIZE) +
        'px';

    this.element.style.backgroundImage = 'url("' + this.sprits.img + '")';

    this.element.style.height =
      this.sprits.dimensions.height * HERO_SIZE + 'px';
    this.element.style.width = this.sprits.dimensions.width * HERO_SIZE + 'px';

    this.element.style.backgroundPositionX =
      this.sprits.dimensions.width * HERO_SIZE * -this.sprits_counter + 'px';
  }

  changeDirection(direction) {
    if (direction == HERO_DIRECTIONS.left) {
      this.element.style.transform = 'scaleX(-1)';
      this.direction = HERO_DIRECTIONS.left;
    }
    if (direction == HERO_DIRECTIONS.right) {
      this.element.style.transform = 'none';
      this.direction = HERO_DIRECTIONS.right;
    }
  }
}
