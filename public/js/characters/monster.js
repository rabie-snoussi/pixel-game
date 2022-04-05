import { DIRECTIONS, ACCELERATION, MONSTER_ACTIONS } from '../constants.js';
import { cloneWithElements, nextPosition } from './helpers.js';

export default class Monster {
  constructor({ actions }) {
    this._frameCounter = 0;
    this._element = document.createElement('div');
    this._blocksVerteces = [];
    this._direction = DIRECTIONS.left;
    this._actions = actions;
    this._action = {};
    this._effects = [];
    this._imgPosition = { x: 0, y: 0 };
    this._collision = {
      top: false,
      bottom: false,
      right: false,
      left: false,
    };
    this._hitbox = {};
    this._showHitbox = false;
    this._vector = { x: 0, y: 0 };
    this._heroHurtbox = {};
    this._hurtbox = {
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
    this._position = {
      x: 0,
      y: 0,
    };
  }

  idle() {
    if (this._action.name === MONSTER_ACTIONS.idle) return;
    if (
      !this._action.loop &&
      this._action.frames[this._direction].length > this._frameCounter
    )
      return;

    this._action = this._actions.idle;
    this._frameCounter = 0;

    this.insertEffects();
  }

  run() {
    if (this._action.name === MONSTER_ACTIONS.run) return;
    if (
      !this._action.loop &&
      this._action.frames[this._direction].length > this._frameCounter
    )
      return;

    this._action = this._actions.run;
    this._frameCounter = 0;

    this.insertEffects();
  }

  attack() {
    if (this._action.name === MONSTER_ACTIONS.attack) return;

    this._action = this._actions.attack;
    this._frameCounter = 0;

    this.insertEffects();
  }

  insertEffects() {
    this._effects = cloneWithElements({
      actionEffects: this._action.effects,
      position: this._position,
      direction: this._direction,
      effects: this._effects,
      showHitbox: this._showHitbox,
    });
  }

  playEffects() {
    this._effects?.forEach((item, i) => {
      if (!_.isEmpty(item.frames?.[item.character.direction])) {
        const frame = item.frames[item.character.direction].shift();
        const effectElement = item.elements.effect;

        effectElement.style.visibility = 'visible';

        effectElement.style.transform = frame.transform;
        effectElement.style.backgroundPositionX = frame.backgroundPositionX;

        if (!item.frames[item.character.direction].length)
          effectElement.remove();
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

        this._hitbox = hitbox.verteces;

        if (!item.frames[item.character.direction].length) {
          hitboxElement.remove();
          this._hitbox = {};
        }
      }

      if (
        _.isEmpty(item.frames?.[item.character.direction]) &&
        _.isEmpty(item.hitbox?.[item.character.direction])
      )
        this._effects.splice(i, 1);
    });
  }

  updatePosition() {
    if (this._action.img === this._element.style.backgroundImage)
      this._imgPosition = this._action.getPosition(this._position)[
        this._direction
      ];

    this._element.style.top = this._imgPosition.y + 'px';
    this._element.style.left = this._imgPosition.x + 'px';

    this.updateHurtbox();
  }

  updateHurtbox() {
    this._hurtbox.verteces = this._action.hurtbox(this._position).verteces;

    this._hurtbox.element.style.top = this._action.hurtbox(
      this._position
    ).position.top;
    this._hurtbox.element.style.left = this._action.hurtbox(
      this._position
    ).position.left;

    this._hurtbox.element.style.width = this._action.hurtbox(
      this._position
    ).dimensions.width;
    this._hurtbox.element.style.height = this._action.hurtbox(
      this._position
    ).dimensions.height;
  }

  updateFrame() {
    this._element.style.backgroundImage = this._action.img;

    this._element.style.height = this._action.dimensions.height;
    this._element.style.width = this._action.dimensions.width;

    const frame = this._action.frames[this._direction][this._frameCounter];

    this._element.style.backgroundPositionX = frame.backgroundPositionX;
    this._element.style.transform = frame.transform;

    this.updatePosition();
  }

  gravity() {
    this._vector.y += ACCELERATION;
  }

  animate() {
    if (this._frameCounter >= this._action.frames[this._direction].length)
      this._frameCounter = 0;
    this.playEffects();
    this.updateFrame();
    this._frameCounter++;

    if (
      !this._action.loop &&
      this._frameCounter >= this._action.frames[this._direction].length
    )
      this.idle();
  }

  loop() {
    nextPosition({
      hurtbox: this._hurtbox.verteces,
      blocks: this._blocksVerteces,
      vector: this._vector,
      position: this._position,
      collision: this._collision,
    });

    if (this._collision.bottom) {
      this._vector.y = 0;

      if (this._vector.x === 0) this.idle();
    }

    this.updatePosition();
    this.gravity();
  }

  showHurtbox() {
    this._hurtbox.element.style.position = 'absolute';
    this._hurtbox.element.style.border = '1px solid red';
    this._hurtbox.element.style.boxSizing = 'border-box';

    document.getElementById('game').appendChild(this._hurtbox.element);
  }

  showHitbox() {
    this._showHitbox = true;
  }

  initialize({ position, blocksVerteces, heroHurtbox }) {
    this._element.style.position = 'absolute';
    this._element.style.backgroundSize = 'cover';
    this._element.style.imageRendering = 'pixelated';

    document.getElementById('game').appendChild(this._element);

    this._action = this._actions.idle;

    this._position.x = position.x;
    this._position.y = position.y;

    this._heroHurtbox = heroHurtbox;
    this._blocksVerteces = blocksVerteces;
  }
}
