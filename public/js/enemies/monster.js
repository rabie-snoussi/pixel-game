import {
  MONSTER_ACTIONS,
  DIRECTIONS,
  ANIMATION_INTERVAL,
  MOVEMENT_INTERVAL,
} from '../constants.js';
import { distanceToAdd } from '../helpers.js';

export default class Monster {
  constructor({ allSprits }) {
    this._blocksVerteces = [];
    this._spritsCounter = 0;
    this._direction = DIRECTIONS.left;
    this._allSprits = allSprits;
    this._sprits = allSprits[MONSTER_ACTIONS.idle];
    this._element = document.createElement('div');
    this._hurtbox = {
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
    this._position = {
      x: 0,
      y: 0,
    };
  }

  get hurtbox() {
    return this._hurtbox;
  }

  set hurtbox(hurtbox) {
    this._hurtbox = hurtbox;
  }


  spritImgUpdate() {
    if (this._direction === DIRECTIONS.left)
      this._element.style.left =
        this._position.x -
        (this._sprits.dimensions.width -
          (this._sprits.hurtbox.b.x - this._sprits.hurtbox.a.x)) +
        'px';

    this._element.style.backgroundImage = 'url("' + this._sprits.img + '")';

    this._element.style.height = this._sprits.dimensions.height + 'px';
    this._element.style.width = this._sprits.dimensions.width + 'px';

    this._element.style.backgroundPositionX =
      this._sprits.dimensions.width * -this._spritsCounter + 'px';
  }

  updateHurtbox() {
    this._hurtbox.a.x = this._position.x + this._sprits.hurtbox.a.x;
    this._hurtbox.b.x = this._position.x + this._sprits.hurtbox.b.x;
    this._hurtbox.c.x = this._position.x + this._sprits.hurtbox.c.x;
    this._hurtbox.d.x = this._position.x + this._sprits.hurtbox.d.x;

    this._hurtbox.a.y = this._position.y + this._sprits.hurtbox.a.y;
    this._hurtbox.b.y = this._position.y + this._sprits.hurtbox.b.y;
    this._hurtbox.c.y = this._position.y + this._sprits.hurtbox.c.y;
    this._hurtbox.d.y = this._position.y + this._sprits.hurtbox.d.y;

    this._hurtbox.element.style.top = this._hurtbox.a.y + 'px';
    this._hurtbox.element.style.left = this._hurtbox.a.x + 'px';

    this._hurtbox.element.style.width =
      this._hurtbox.b.x - this._hurtbox.a.x + 'px';
    this._hurtbox.element.style.height =
      this._hurtbox.c.y - this._hurtbox.a.y + 'px';
  }


  idleSprits() {
    if (!this._sprits.possibleActions.includes(MONSTER_ACTIONS.idle)) return;

    this._sprits = this._allSprits[MONSTER_ACTIONS.idle];
    this._spritsCounter = 0;
  }

  updateDirection(direction) {
    if (direction == DIRECTIONS.left) {
      this._element.style.transform = 'scaleX(-1)';
      this._direction = DIRECTIONS.left;
    }
    if (direction == DIRECTIONS.right) {
      this._element.style.transform = 'none';
      this._direction = DIRECTIONS.right;
    }
  }

  updatePosition() {
    this._element.style.top = this._position.y + 'px';
    this._element.style.left = this._position.x + 'px';

    this.updateHurtbox();
  }

  gravity() {
    let i = 1;
    setInterval(() => {
      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this._hurtbox,
        blocks: this._blocksVerteces,
        bottom: i * 3,
      });

      if (!distance) {
        if (i === 1) return;
        i = 1;
        return;
      }

      this._position.y += distance;
      this.updatePosition();

      i++;
    }, MOVEMENT_INTERVAL);
  }

  animate() {
    setInterval(() => {
      if (this._spritsCounter >= this._sprits.number) this._spritsCounter = 0;

      this.spritImgUpdate();
      this._spritsCounter++;

      if (!this._sprits.loop && this._spritsCounter >= this._sprits.number)
        this.idleSprits();
    }, ANIMATION_INTERVAL);
  }

  showHurtbox() {
    this._hurtbox.element.style.position = 'absolute';
    this._hurtbox.element.style.border = '1px solid red';
    this._hurtbox.element.style.boxSizing = 'border-box';

    document.getElementById('game').appendChild(this._hurtbox.element);
  }

  heroChasing() {}

  initialize({ position, blocksVerteces, heroHurtbox }) {
    this._element.style.position = 'absolute';
    this._element.style.backgroundSize = 'cover';
    this._element.style.imageRendering = 'pixelated';

    document.getElementById('game').appendChild(this._element);

    this._position.x = position.x;
    this._position.y = position.y;

    this._blocksVerteces = blocksVerteces;
    this._heroHurtbox = heroHurtbox;
    this.idleSprits();
    this.updatePosition();
    this.updateDirection(DIRECTIONS.left);
    this.gravity();
    this.animate();
    this.heroChasing();
  }
}
