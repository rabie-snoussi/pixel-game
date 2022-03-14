import { HERO_SPRITS } from './data/hero.js';

export const HERO_SIZE = 4;

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

export class Hero {
  constructor() {
    this.element = document.getElementById('hero');
    this.direction = HERO_DIRECTIONS.right;
    this.action = HERO_ACTIONS.idle;
    this.is_animating = false;
    this.sprit_counter = 0;
    this.position = {
      x: 0,
      y: 11,
    };
  }

  playAnimation(animation) {
    if (!this.is_animating && this.action !== animation) {
      this.sprit_counter = 0;
      this.action = animation;
    }

    if (!HERO_SPRITS[this.action].loop) this.is_animating = true;

    this.element.style.backgroundImage =
      'url("' + HERO_SPRITS[this.action].img + '")';

    this.element.style.height =
      HERO_SPRITS[this.action].dimensions.height * HERO_SIZE + 'px';
    this.element.style.width =
      HERO_SPRITS[this.action].dimensions.width * HERO_SIZE + 'px';

    this.element.style.backgroundPositionX =
      HERO_SPRITS[this.action].dimensions.width *
        HERO_SIZE *
        -this.sprit_counter +
      'px';

    this.sprit_counter++;

    if (
      !HERO_SPRITS[this.action].loop &&
      this.sprit_counter >= HERO_SPRITS[this.action].sprits
    )
      this.is_animating = false;
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
  }

  goRight() {
    this.changeDirection(HERO_DIRECTIONS.right);

    this.position.x += 5;
    this.element.style.left = this.position.x + 'px';
    this.direction = 'right';
  }

  goLeft() {
    this.changeDirection(HERO_DIRECTIONS.left);

    this.position.x -= 5;
    this.element.style.left = this.position.x + 'px';
    this.direction = 'left';
  }
}
