import ACTIONS from './data/index.js';
import {
  DIRECTIONS,
  HERO_SPEED,
  ANIMATION_INTERVAL,
  MAX_JUMPS,
  ACCELERATION,
  HERO_JUMP_SPEED,
} from '../constants.js';
import { sleep, cloneWithElements, nextPosition } from '../helpers.js';

export default class Hero {
  // Private properties

  #godMode = false;
  #frameCounter = 0;
  #element = document.createElement('div');
  #blocksVerteces = [];
  #direction = DIRECTIONS.right;
  #action = ACTIONS.idle;
  #effects = [];
  #jumpCount = MAX_JUMPS;
  #collision = {
    top: false,
    bottom: false,
    right: false,
    left: false,
  };
  #showHitbox = false;
  #vector = { x: 0, y: 0 };

  #position = {
    x: 0,
    y: 0,
  };

  constructor() {
    this.hearts = 3;
    this.coins = 0;
    this.hitbox = {};
    this.hurtbox = {
      element: document.createElement('div'),
      verteces: {
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
      },
    };
  }

  // Private methods

  #idle() {
    if (!this.#action.allowedActions.includes(ACTIONS.idle.name)) return;
    if(!this.#action.loop && this.#action.frames[this.#direction].length > this.#frameCounter) return;
    this.#action = ACTIONS.idle;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #run() {
    if (!this.#action.allowedActions.includes(ACTIONS.run.name)) return;

    this.#action = ACTIONS.run;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #fall() {
    if (!this.#action.allowedActions.includes(ACTIONS.fall.name)) return;

    this.#action = ACTIONS.fall;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #preJump() {
    if (!this.#action.allowedActions.includes(ACTIONS.preJump.name)) return;

    this.#action = ACTIONS.preJump;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #insertEffects() {
    this.#effects = cloneWithElements({
      actionEffects: this.#action.effects,
      position: this.#position,
      direction: this.#direction,
      effects: this.#effects,
      showHitbox: this.#showHitbox,
    });
  }

  #jump() {
    if (!this.#action.allowedActions.includes(ACTIONS.jump.name)) return;

    this.#action = ACTIONS.jump;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #doubleJump() {
    if (!this.#action.allowedActions.includes(ACTIONS.doubleJump.name)) return;

    this.#action = ACTIONS.doubleJump;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #postJump() {
    if (!this.#action.allowedActions.includes(ACTIONS.postJump.name)) return;

    this.#action = ACTIONS.postJump;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  #playEffects() {
    this.#effects?.forEach((item, i) => {
      if (!_.isEmpty(item.frames?.[item.character.direction])) {
        const frame = item.frames[item.character.direction].shift();
        const effectElement = item.elements.effect;

        effectElement.style.visibility = 'visible';

        effectElement.style.transform = frame.transform;
        effectElement.style.backgroundPositionX = frame.backgroundPositionX;

        if (!item.frames[item.character.direction].length) effectElement.remove();
      }
      if (!_.isEmpty(item.hitbox?.[item.character.direction])) {
        const getHitbox = item.hitbox[item.character.direction].shift();
        const hitbox = getHitbox(item.character.position);
        const hitboxElement = item.elements.hitbox;

        hitboxElement.style.visibility = 'visible';

        hitboxElement.style.width = hitbox.dimensions.width;
        hitboxElement.style.height = hitbox.dimensions.height;

        hitboxElement.style.top = hitbox.position.top;
        hitboxElement.style.left = hitbox.position.left;

        this.hitbox = hitbox.verteces;

        if (!item.frames[item.character.direction].length) {
          hitboxElement.remove();
          this.hitbox = {};
        }
      }

      if (
        _.isEmpty(item.frames?.[item.character.direction]) &&
        _.isEmpty(item.hitbox?.[item.character.direction])
      )
        this.#effects.splice(i, 1);
    });
  }

  #updatePosition() {
    this.#element.style.top = this.#position.y + 'px';
    this.#element.style.left = this.#position.x + 'px';

    this.#updateHurtbox();
  }

  #updateHurtbox() {
    this.hurtbox.verteces = this.#action.hurtbox(this.#position).verteces;

    this.hurtbox.element.style.top = this.#action.hurtbox(
      this.#position
    ).position.top;
    this.hurtbox.element.style.left = this.#action.hurtbox(
      this.#position
    ).position.left;

    this.hurtbox.element.style.width = this.#action.hurtbox(
      this.#position
    ).dimensions.width;
    this.hurtbox.element.style.height = this.#action.hurtbox(
      this.#position
    ).dimensions.height;
  }

  #updateFrame() {
    this.#element.style.backgroundImage = this.#action.img;

    this.#element.style.height = this.#action.dimensions.height;
    this.#element.style.width = this.#action.dimensions.width;

    const frame = this.#action.frames[this.#direction][this.#frameCounter];

    this.#element.style.backgroundPositionX = frame.backgroundPositionX;
    this.#element.style.transform = frame.transform;
  }

  #gravity() {
    if (this.#godMode) return;
    this.#vector.y += ACCELERATION;
  }

  // Public methods

  getHurtbox() {
    return this.hurtbox;
  }

  attack() {
    if (!this.#action.allowedActions.includes(ACTIONS.attack.name)) return;

    this.#action = ACTIONS.attack;
    this.#frameCounter = 0;

    this.#insertEffects();
  }

  update() {
    if (this.#frameCounter >= this.#action.frames[this.#direction].length)
      this.#frameCounter = 0;
    this.#playEffects();
    this.#updateFrame();
    this.#frameCounter++;

    if (
      !this.#action.loop &&
      this.#frameCounter >= this.#action.frames[this.#direction].length
    )
      this.#idle();
  }

  loop() {
    nextPosition({
      hurtbox: this.hurtbox.verteces,
      blocks: this.#blocksVerteces,
      vector: this.#vector,
      position: this.#position,
      collision: this.#collision,
    });

    if (this.#collision.bottom) {
      this.#vector.y = 0;
      this.#jumpCount = MAX_JUMPS;

      if (this.#action.name === ACTIONS.fall.name) this.#postJump();
      if (this.#vector.x === 0) this.#idle();

      if (this.#vector.x !== 0) this.#run();
    }

    if (!this.#collision.bottom) {
      if (this.#vector.y > 0) this.#fall();
    }

    this.#updatePosition();
    this.#gravity();
  }

  goRight() {
    this.#direction = DIRECTIONS.right;
    this.#vector.x += HERO_SPEED;

    return () => (this.#vector.x -= HERO_SPEED);
  }

  goLeft() {
    this.#direction = DIRECTIONS.left;
    this.#vector.x -= HERO_SPEED;

    return () => (this.#vector.x += HERO_SPEED);
  }

  async jumpUp() {
    if (!this.#jumpCount) return;

    if (this.#jumpCount === 2) {
      this.#preJump();

      await sleep(ANIMATION_INTERVAL * 2);

      this.#jump();
    }

    if (this.#jumpCount === 1) this.#doubleJump();

    this.#jumpCount--;

    this.#vector.y = -HERO_JUMP_SPEED;
  }

  goUp() {
    this.#vector.y -= HERO_SPEED;
    return () => (this.#vector.y += HERO_SPEED);
  }

  goDown() {
    this.#vector.y += HERO_SPEED;
    return () => (this.#vector.y -= this.#vector.y);
  }

  showHurtbox() {
    this.hurtbox.element.style.position = 'absolute';
    this.hurtbox.element.style.border = '1px solid green';
    this.hurtbox.element.style.boxSizing = 'border-box';

    document.getElementById('map').appendChild(this.hurtbox.element);
  }

  showHitbox() {
    this.#showHitbox = true;
  }

  godMode() {
    this.#godMode = true;
  }

  initialize({ position, blocksVerteces }) {
    this.#element.setAttribute('id', 'hero');
    this.#element.style.position = 'absolute';
    this.#element.style.backgroundSize = 'cover';
    this.#element.style.imageRendering = 'pixelated';

    document.getElementById('map').appendChild(this.#element);

    this.#position.x = position.x;
    this.#position.y = position.y;

    this.#blocksVerteces = blocksVerteces;
  }
}
