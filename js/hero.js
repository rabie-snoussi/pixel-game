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
  // Private properties

  #gravityInterval;
  #spritsCounter = 0;
  #isJumping = false;
  #element = document.getElementById('hero');
  #blocksPosition = [];
  #direction = HERO_DIRECTIONS.right;
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

  constructor() {}

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
    let isFalling = false;
    let doubleJump = false;

    this.#gravityInterval = setInterval(() => {
      if (this.#isJumping) return;

      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksPosition,
        bottom: i * 3,
      });

      if (!distance) {
        isFalling = false;
        this.#jumpCount = MAX_JUMPS;
        if (i === 1) return;
        this.#idleSprits();
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

      if (!isFalling) this.#fallSprits();

      isFalling = true;
      this.#position.y += distance;
      this.#updateHeroPosition();

      i++;
    }, MOVEMENT_INTERVAL);
  }

  #updateHeroPosition() {
    this.#element.style.top = this.#position.y + 'px';
    this.#element.style.left = this.#position.x + 'px';

    this.#updateHurtbox();
  }

  #updateHurtbox() {
    this.#hurtbox.a.x = this.#position.x + this.#sprits.hurtbox.a.x * HERO_SIZE;
    this.#hurtbox.b.x = this.#position.x + this.#sprits.hurtbox.b.x * HERO_SIZE;
    this.#hurtbox.c.x = this.#position.x + this.#sprits.hurtbox.c.x * HERO_SIZE;
    this.#hurtbox.d.x = this.#position.x + this.#sprits.hurtbox.d.x * HERO_SIZE;

    this.#hurtbox.a.y = this.#position.y + this.#sprits.hurtbox.a.y * HERO_SIZE;
    this.#hurtbox.b.y = this.#position.y + this.#sprits.hurtbox.b.y * HERO_SIZE;
    this.#hurtbox.c.y = this.#position.y + this.#sprits.hurtbox.c.y * HERO_SIZE;
    this.#hurtbox.d.y = this.#position.y + this.#sprits.hurtbox.d.y * HERO_SIZE;

    this.#hurtbox.element.style.top = this.#hurtbox.a.y + 'px';
    this.#hurtbox.element.style.left = this.#hurtbox.a.x + 'px';

    this.#hurtbox.element.style.width =
      this.#hurtbox.b.x - this.#hurtbox.a.x + 'px';
    this.#hurtbox.element.style.height =
      this.#hurtbox.c.y - this.#hurtbox.a.y + 'px';
  }

  #spritImgUpdate() {
    if (this.#direction === HERO_DIRECTIONS.left)
      this.#element.style.left =
        this.#position.x -
        (this.#sprits.dimensions.width * HERO_SIZE -
          (this.#sprits.hurtbox.b.x - this.#sprits.hurtbox.a.x) * HERO_SIZE) +
        'px';

    this.#element.style.backgroundImage = 'url("' + this.#sprits.img + '")';

    this.#element.style.height =
      this.#sprits.dimensions.height * HERO_SIZE + 'px';
    this.#element.style.width =
      this.#sprits.dimensions.width * HERO_SIZE + 'px';

    this.#element.style.backgroundPositionX =
      this.#sprits.dimensions.width * HERO_SIZE * -this.#spritsCounter + 'px';
  }

  #changeDirection(direction) {
    if (direction == HERO_DIRECTIONS.left) {
      this.#element.style.transform = 'scaleX(-1)';
      this.#direction = HERO_DIRECTIONS.left;
    }
    if (direction == HERO_DIRECTIONS.right) {
      this.#element.style.transform = 'none';
      this.#direction = HERO_DIRECTIONS.right;
    }
  }

  // Public methods

  setBlocksPosition(blocks) {
    this.#blocksPosition = blocks;
  }

  swordAttack() {
    if (!this.#sprits.possibleActions.includes(HERO_ACTIONS.swordAttack))
      return;

    this.#sprits = HERO_SPRITS[HERO_ACTIONS.swordAttack];
    this.#spritsCounter = 0;
  }

  goRight() {
    this.#runSprits();

    const interval = setInterval(() => {
      if (!this.#sprits.canMove) return;

      this.#changeDirection(HERO_DIRECTIONS.right);

      const {
        right: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksPosition,
        right: HERO_SPEED,
      });

      this.#position.x += distance;
      this.#updateHeroPosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.#idleSprits();
      clearInterval(interval);
    };
  }

  goLeft() {
    this.#runSprits();

    const interval = setInterval(() => {
      if (!this.#sprits.canMove) return;

      this.#changeDirection(HERO_DIRECTIONS.left);

      const {
        left: { distance },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksPosition,
        left: HERO_SPEED,
      });

      this.#position.x -= distance;

      this.#updateHeroPosition();
    }, MOVEMENT_INTERVAL);

    return () => {
      this.#idleSprits();
      clearInterval(interval);
    };
  }

  jump() {
    if (this.#isJumping) return;
    if (!this.#jumpCount) return;
    if (!this.#sprits.canMove) return;

    this.#isJumping = true;
    if(this.#jumpCount === 2) this.#jumpAnimation();
    if(this.#jumpCount === 1) this.#doubleJumpAnimation();
    this.#jumpCount--;
    let i = 11;

    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksPosition,
        top: i * 2,
      });

      this.#position.y -= distance;
      this.#updateHeroPosition();

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
        blocks: this.#blocksPosition,
        top: HERO_SPEED,
      });

      this.#position.y -= distance;

      if (collision) clearInterval(interval);

      this.#updateHeroPosition();
    }, 20);

    return () => clearInterval(interval);
  }

  goDown() {
    const interval = setInterval(() => {
      const {
        bottom: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.#hurtbox,
        blocks: this.#blocksPosition,
        bottom: HERO_SPEED,
      });

      this.#position.y += distance;

      if (collision) clearInterval(interval);

      this.#updateHeroPosition();
    }, 20);

    return () => clearInterval(interval);
  }

  showHurtbox() {
    this.#hurtbox.element.style.position = 'absolute';
    this.#hurtbox.element.style.border = '1px solid black';

    document.getElementById('game').appendChild(this.#hurtbox.element);
  }

  godMode() {
    clearInterval(this.#gravityInterval);
  }

  initialize(position, blocks) {
    this.#position.x = position.x;
    this.#position.y = position.y;

    this.#blocksPosition = blocks;
    this.#idleSprits();
    this.#updateHeroPosition();
    this.#gravity();
    this.#animate();
  }
}
