import ACTIONS from './data/hero/hero.js';
import {
  DIRECTIONS,
  HERO_SPEED,
  MOVEMENT_INTERVAL,
  ANIMATION_INTERVAL,
  MAX_JUMPS,
  RESOLUTION_MULTIPLIER,
} from './constants.js';
import { distanceToAdd, sleep } from './helpers.js';

export default class Hero {
  // Private properties

  #gravityInterval;
  #frameCounter = 0;
  #isJumping = false;
  #element = document.createElement('div');
  #blocksVerteces = [];
  #direction = DIRECTIONS.right;
  #action = ACTIONS.idle;
  #jumpCount = MAX_JUMPS;
  #hurtbox = {
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
  #position = {
    x: 0,
    y: 0,
  };

  constructor() {}

  // Private methods

  #idle() {
    if (!this.#action.allowedActions.includes(ACTIONS.idle.name)) return;
    this.#action = ACTIONS.idle;
    this.#frameCounter = 0;
  }

  #run() {
    if (!this.#action.allowedActions.includes(ACTIONS.run.name)) return;

    this.#action = ACTIONS.run;
    this.#frameCounter = 0;
  }

  #fall() {
    if (!this.#action.allowedActions.includes(ACTIONS.fall.name)) return;

    this.#action = ACTIONS.fall;
    this.#frameCounter = 0;
  }

  #preJump() {
    if (!this.#action.allowedActions.includes(ACTIONS.preJump.name)) return;

    this.#action = ACTIONS.preJump;
    this.#frameCounter = 0;
  }

  #jump() {
    if (!this.#action.allowedActions.includes(ACTIONS.jump.name)) return;

    this.#action = ACTIONS.jump;
    this.#frameCounter = 0;
  }

  #doubleJump() {
    if (!this.#action.allowedActions.includes(ACTIONS.doubleJump.name)) return;

    this.#action = ACTIONS.doubleJump;
    this.#frameCounter = 0;
  }

  #postJump() {
    if (!this.#action.allowedActions.includes(ACTIONS.postJump.name)) return;

    this.#action = ACTIONS.postJump;
    this.#frameCounter = 0;
  }

  #animate() {
    setInterval(() => {
      if (this.#frameCounter >= this.#action.frames[this.#direction].length)
        this.#frameCounter = 0;

      this.#updateFrame();
      this.#frameCounter++;

      if (
        !this.#action.loop &&
        this.#frameCounter >= this.#action.frames[this.#direction].length
      )
        this.#idle();
    }, ANIMATION_INTERVAL);
  }

  #gravity() {
    let i = 1;
    let doubleJump = false;

    this.#gravityInterval = setInterval(() => {
      
      if (this.#isJumping) return;


      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox.verteces,
        blocks: this.#blocksVerteces,
        bottom: i * 2,
      });

      if (!distance) {
        this.#jumpCount = MAX_JUMPS;
        if (i === 1) return;
        this.#postJump();
        doubleJump = false;
        i = 1;
        return;
      }

      if (this.#jumpCount === 0 && !doubleJump) {
        doubleJump = true;
        if (i !== 1) {
          i = 1;
        }
      }

      if (this.#action.name !== ACTIONS.fall.name) this.#fall();

      this.#position.y += distance;
      this.#updatePosition();

      i++;
    }, MOVEMENT_INTERVAL);
  }

  #updatePosition() {
    this.#element.style.top = this.#position.y + 'px';
    this.#element.style.left = this.#position.x + 'px';

    this.#updateHurtbox();
  }

  #updateHurtbox() {
    this.#hurtbox.verteces = this.#action.hurtbox(this.#position).verteces;

    this.#hurtbox.element.style.top = this.#action.hurtbox(
      this.#position
    ).position.top;
    this.#hurtbox.element.style.left = this.#action.hurtbox(
      this.#position
    ).position.left;

    this.#hurtbox.element.style.width = this.#action.hurtbox(
      this.#position
    ).dimensions.width;
    this.#hurtbox.element.style.height = this.#action.hurtbox(
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

  // Public methods

  getHurtbox() {
    return this.#hurtbox;
  }

  attack() {
    if (!this.#action.allowedActions.includes(ACTIONS.attack.name)) return;

    this.#action = ACTIONS.attack;
    this.#frameCounter = 0;
  }

  goRight() {
    const interval = setInterval(() => {
      if (!this.#action.canMove) return;

      if (this.#action.name !== ACTIONS.run) this.#run();

      this.#direction = DIRECTIONS.right;

      const {
        right: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox.verteces,
        blocks: this.#blocksVerteces,
        right: HERO_SPEED,
      });

      this.#position.x += distance;
      this.#updatePosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.#idle();
      clearInterval(interval);
    };
  }

  goLeft() {
    const interval = setInterval(() => {
      if (!this.#action.canMove) return;

      if (this.#action.name !== ACTIONS.run) this.#run();

      this.#direction = DIRECTIONS.left;

      const {
        left: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox.verteces,
        blocks: this.#blocksVerteces,
        left: HERO_SPEED,
      });

      this.#position.x -= distance;

      this.#updatePosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.#idle();
      clearInterval(interval);
    };
  }

  async jump() {
    if (this.#isJumping) return;
    if (!this.#jumpCount) return;
    if (!this.#action.canMove) return;

    this.#isJumping = true;

    if (this.#jumpCount === 2) {
      this.#preJump();

      await sleep(ANIMATION_INTERVAL * 2);

      this.#jump();
    }

    if (this.#jumpCount === 1) this.#doubleJump();

    this.#jumpCount--;
    let i = 12;

    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.#hurtbox.verteces,
        blocks: this.#blocksVerteces,
        top: i * RESOLUTION_MULTIPLIER,
      });

      this.#position.y -= distance;
      this.#updatePosition();

      if (i <= 0 || collision) {
        this.#isJumping = false;
        clearInterval(interval);
      }

      i--;
    }, MOVEMENT_INTERVAL);
  }

  goUp() {
    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.#hurtbox.verteces,
        blocks: this.#blocksVerteces,
        top: HERO_SPEED,
      });

      this.#position.y -= distance;

      if (collision) clearInterval(interval);

      this.#updatePosition();
    }, 20);

    return () => clearInterval(interval);
  }

  goDown() {
    const interval = setInterval(() => {
      const {
        bottom: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.#hurtbox.verteces,
        blocks: this.#blocksVerteces,
        bottom: HERO_SPEED,
      });

      this.#position.y += distance;

      if (collision) clearInterval(interval);

      this.#updatePosition();
    }, 20);

    return () => clearInterval(interval);
  }

  showHurtbox() {
    this.#hurtbox.element.style.position = 'absolute';
    this.#hurtbox.element.style.border = '1px solid green';
    this.#hurtbox.element.style.boxSizing = 'border-box';

    document.getElementById('game').appendChild(this.#hurtbox.element);
  }

  godMode() {
    clearInterval(this.#gravityInterval);
  }

  initialize({ position, blocksVerteces }) {
    this.#element.style.position = 'absolute';
    this.#element.style.backgroundSize = 'cover';
    this.#element.style.imageRendering = 'pixelated';

    document.getElementById('game').appendChild(this.#element);

    this.#position.x = position.x;
    this.#position.y = position.y;

    this.#blocksVerteces = blocksVerteces;
    this.#idle();
    this.#updatePosition();
    this.#gravity();
    this.#animate();
  }
}
