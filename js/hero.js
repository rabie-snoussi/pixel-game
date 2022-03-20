import HERO_SPRITS from './data/hero.js';
import {
  DIRECTIONS,
  HERO_ACTIONS,
  HERO_SPEED,
  MOVEMENT_INTERVAL,
  ANIMATION_INTERVAL,
  MAX_JUMPS,
} from './constants.js';
import { distanceToAdd, sleep } from './helpers.js';

export default class Hero {
  // Private properties

  #gravityInterval;
  #spritsCounter = 0;
  #isJumping = false;
  #element = document.createElement('div');
  #blocksVerteces = [];
  #enemiesVerteces = [];
  #direction = DIRECTIONS.right;
  #sprits = HERO_SPRITS[HERO_ACTIONS.idle];
  #jumpCount = MAX_JUMPS;
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

  constructor() {
  }

  // Private methods

  #idleSprits() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.idle)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.idle];
    this.#spritsCounter = 0;
  }

  #runSprits() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.run)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.run];
    this.#spritsCounter = 0;
  }

  #fallSprits() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.fall)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.fall];
    this.#spritsCounter = 0;
  }

  #preJumpAnimation() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.preJump)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.preJump];
    this.#spritsCounter = 0;
  }

  #jumpAnimation() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.jump)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.jump];
    this.#spritsCounter = 0;
  }

  #doubleJumpAnimation() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.doubleJump)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.doubleJump];
    this.#spritsCounter = 0;
  }

  #postJumpAnimation() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.postJump)) return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.postJump];
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

  #gravity() {
    let i = 1;
    let doubleJump = false;

    this.#gravityInterval = setInterval(() => {
      if (this.#isJumping) return;

      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksVerteces,
        enemies: this.#enemiesVerteces,
        bottom: i * 3,
      });

      if (!distance) {
        this.#jumpCount = MAX_JUMPS;
        if (i === 1) return;
        this.#postJumpAnimation();
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

      if (this.#sprits.name !== HERO_ACTIONS.fall) this.#fallSprits();

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

  // Public methods

  getHurtbox() {
    return this.#hurtbox;
  }

  swordAttack() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.swordAttack))
      return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.swordAttack];
    this.#spritsCounter = 0;
  }

  goRight() {
    const interval = setInterval(() => {
      if (!this.#sprits.canMove) return;

      if (this.#sprits.name !== HERO_ACTIONS.run) this.#runSprits();

      this.#updateDirection(DIRECTIONS.right);

      const {
        right: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksVerteces,
        enemies: this.#enemiesVerteces,
        right: HERO_SPEED,
      });

      this.#position.x += distance;
      this.#updatePosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.#idleSprits();
      clearInterval(interval);
    };
  }

  goLeft() {
    const interval = setInterval(() => {
      if (!this.#sprits.canMove) return;

      if (this.#sprits.name !== HERO_ACTIONS.run) this.#runSprits();

      this.#updateDirection(DIRECTIONS.left);

      console.log(this.#enemiesVerteces)

      const {
        left: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksVerteces,
        enemies: this.#enemiesVerteces,
        left: HERO_SPEED,
      });

      this.#position.x -= distance;

      this.#updatePosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.#idleSprits();
      clearInterval(interval);
    };
  }

  async jump() {
    if (this.#isJumping) return;
    if (!this.#jumpCount) return;
    if (!this.#sprits.canMove) return;

    this.#isJumping = true;

    if (this.#jumpCount === 2) {
      this.#preJumpAnimation();

      await sleep(ANIMATION_INTERVAL * 3);

      this.#jumpAnimation();
    }

    if (this.#jumpCount === 1) this.#doubleJumpAnimation();

    this.#jumpCount--;
    let i = 11;

    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksVerteces,
        enemies: this.#enemiesVerteces,
        top: i * 2,
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
        hurtbox: this.#hurtbox,
        blocks: this.#blocksVerteces,
        enemies: this.#enemiesVerteces,
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
        hurtbox: this.#hurtbox,
        blocks: this.#blocksVerteces,
        enemies: this.#enemiesVerteces,
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

  initialize({ position, blocksVerteces, enemiesVerteces }) {
    this.#element.style.position = 'absolute';
    this.#element.style.backgroundSize = 'cover';
    this.#element.style.imageRendering = 'pixelated';

    document.getElementById('game').appendChild(this.#element);

    this.#position.x = position.x;
    this.#position.y = position.y;

    this.#blocksVerteces = blocksVerteces;
    this.#enemiesVerteces = enemiesVerteces;
    this.#idleSprits();
    this.#updatePosition();
    this.#gravity();
    this.#animate();
  }
}
