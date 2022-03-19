import {
  GOBLIN_ACTIONS,
  DIRECTIONS,
  ANIMATION_INTERVAL,
  MOVEMENT_INTERVAL,
} from '../constants.js';
import { distanceToAdd } from '../helpers.js';
import GOBLIN_SPRITS from '../data/enemies/goblin.js';

export default class Goblin {
  // PRIVATE PROPERTIES

  #blocksPosition = [];
  #spritsCounter = 0;
  #direction = DIRECTIONS.left;
  #sprits = GOBLIN_SPRITS[GOBLIN_ACTIONS.idle];
  #element = document.createElement('div');
  #hurtbox = {
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
  #position = {
    x: 0,
    y: 0,
  };

  constructor() {}

  // PRIVATE METHODS

  #idleSprits() {
    if (!this.#sprits.possibleActions.includes(GOBLIN_ACTIONS.idle)) return;

    this.#sprits = GOBLIN_SPRITS[GOBLIN_ACTIONS.idle];
    this.#spritsCounter = 0;
  }

  #animate() {
    setInterval(() => {
      if (this.#spritsCounter >= this.#sprits.number) this.#spritsCounter = 0;

      this.#spritImgUpdate();
      this.#spritsCounter++;

      if (!this.#sprits.loop && this.#spritsCounter >= this.#sprits.number)
        this.#idleSprits();
    }, ANIMATION_INTERVAL);
  }

  #updateHurtbox() {
    this.#hurtbox.a.x = this.#position.x + this.#sprits.hurtbox.a.x;
    this.#hurtbox.b.x = this.#position.x + this.#sprits.hurtbox.b.x;
    this.#hurtbox.c.x = this.#position.x + this.#sprits.hurtbox.c.x;
    this.#hurtbox.d.x = this.#position.x + this.#sprits.hurtbox.d.x;

    this.#hurtbox.a.y = this.#position.y + this.#sprits.hurtbox.a.y;
    this.#hurtbox.b.y = this.#position.y + this.#sprits.hurtbox.b.y;
    this.#hurtbox.c.y = this.#position.y + this.#sprits.hurtbox.c.y;
    this.#hurtbox.d.y = this.#position.y + this.#sprits.hurtbox.d.y;

    this.#hurtbox.element.style.top = this.#hurtbox.a.y + 'px';
    this.#hurtbox.element.style.left = this.#hurtbox.a.x + 'px';

    this.#hurtbox.element.style.width =
      this.#hurtbox.b.x - this.#hurtbox.a.x + 'px';
    this.#hurtbox.element.style.height =
      this.#hurtbox.c.y - this.#hurtbox.a.y + 'px';
  }

  #spritImgUpdate() {
    if (this.#direction === DIRECTIONS.left)
      this.#element.style.left =
        this.#position.x -
        (this.#sprits.dimensions.width -
          (this.#sprits.hurtbox.b.x - this.#sprits.hurtbox.a.x)) +
        'px';

    this.#element.style.backgroundImage = 'url("' + this.#sprits.img + '")';

    this.#element.style.height = this.#sprits.dimensions.height + 'px';
    this.#element.style.width = this.#sprits.dimensions.width + 'px';

    this.#element.style.backgroundPositionX =
      this.#sprits.dimensions.width * -this.#spritsCounter + 'px';
  }

  #updateDirection(direction) {
    if (direction == DIRECTIONS.left) {
      this.#element.style.transform = 'scaleX(-1)';
      this.#direction = DIRECTIONS.left;
    }
    if (direction == DIRECTIONS.right) {
      this.#element.style.transform = 'none';
      this.#direction = DIRECTIONS.right;
    }
  }

  #updatePosition() {
    this.#element.style.top = this.#position.y + 'px';
    this.#element.style.left = this.#position.x + 'px';

    this.#updateHurtbox();
  }

  #gravity() {
    let i = 1;
    setInterval(() => {
      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksPosition,
        bottom: i * 3,
      });

      if (!distance) {
        if (i === 1) return;
        i = 1;
        return;
      }

      this.#position.y += distance;
      this.#updatePosition();

      i++;
    }, MOVEMENT_INTERVAL);
  }

  // PUBLIC METHODS

  showHurtbox() {
    this.#hurtbox.element.style.position = 'absolute';
    this.#hurtbox.element.style.border = '1px solid red';
    this.#hurtbox.element.style.boxSizing = 'border-box';

    document.getElementById('game').appendChild(this.#hurtbox.element);
  }

  initialize(position, blocks) {
    this.#element.style.position = 'absolute';
    this.#element.style.backgroundSize = 'cover';
    this.#element.style.imageRendering = 'pixelated';

    document.getElementById('game').appendChild(this.#element);

    this.#position.x = position.x;
    this.#position.y = position.y;

    this.#blocksPosition = blocks;
    this.#idleSprits();
    this.#updatePosition();
    this.#updateDirection(DIRECTIONS.left);
    this.#gravity();
    this.#animate();
  }
}
