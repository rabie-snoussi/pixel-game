import { DIRECTIONS, ACCELERATION, MONSTER_ACTIONS } from '../constants.js';
import { cloneWithElements, nextPosition } from '../helpers.js';

export default class Monster {
  constructor({ actions }) {
    this.isDead = false;
    this._frameCounter = 0;
    this._element = document.createElement('div');
    this.blocksVertices = [];
    this.direction = DIRECTIONS.left;
    this._actions = actions;
    this.action = {};
    this._effects = [];
    this._imgPosition = { x: 0, y: 0 };
    this.collision = {
      top: false,
      bottom: false,
      right: false,
      left: false,
    };
    this._hitbox = {};
    this._showHitbox = false;
    this.vector = { x: 0, y: 0 };
    this.hero = {};
    this.hurtbox = {
      element: document.createElement('div'),
      vertices: {
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
    this.position = {
      x: 0,
      y: 0,
    };
  }

  idle() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.idle) return;
    if (
      !this.action.loop &&
      this.action.frames[this.direction].length > this._frameCounter
    )
      return;

    this.action = this._actions.idle;
    this._frameCounter = 0;

    this.insertEffects();
  }

  hit() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.hit) return;

    this.action = this._actions.hit;
    this._frameCounter = 0;

    this.insertEffects();
  }

  run() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.run) return;
    if (
      !this.action.loop &&
      this.action.frames[this.direction].length > this._frameCounter
    )
      return;

    this.action = this._actions.run;
    this._frameCounter = 0;

    this.insertEffects();
  }

  attack() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.attack) return;

    this.action = this._actions.attack;
    this._frameCounter = 0;

    this.insertEffects();
  }

  death() {
    if (this.action.name === MONSTER_ACTIONS.death) return;

    this.action = this._actions.death;
    this._frameCounter = 0;

    this.insertEffects();
  }

  insertEffects() {
    this._effects = cloneWithElements({
      actionEffects: this.action.effects,
      position: this.position,
      direction: this.direction,
      effects: this._effects,
      showHitbox: this._showHitbox,
    });
  }

  removeHitbox() {
    this._effects?.map(item => item.elements?.hitbox.remove());
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

        this._hitbox = hitbox.vertices;

        if (!item.hitbox[item.character.direction].length) {
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
    if (this.action.img === this._element.style.backgroundImage)
      this._imgPosition = this.action.getPosition(this.position)[
        this.direction
      ];

    this._element.style.top = this._imgPosition.y + 'px';
    this._element.style.left = this._imgPosition.x + 'px';

    this.updateHurtbox();
  }

  updateHurtbox() {
    this.hurtbox.vertices = this.action.getHurtbox(this.position).vertices;

    this.hurtbox.element.style.top = this.action.getHurtbox(
      this.position
    ).position.top;
    this.hurtbox.element.style.left = this.action.getHurtbox(
      this.position
    ).position.left;

    this.hurtbox.element.style.width = this.action.getHurtbox(
      this.position
    ).dimensions.width;
    this.hurtbox.element.style.height = this.action.getHurtbox(
      this.position
    ).dimensions.height;
  }

  updateFrame() {
    this._element.style.backgroundImage = this.action.img;

    this._element.style.height = this.action.dimensions.height;
    this._element.style.width = this.action.dimensions.width;

    const frame = this.action.frames[this.direction][this._frameCounter];

    this._element.style.backgroundPositionX = frame.backgroundPositionX;
    this._element.style.transform = frame.transform;

    this.updatePosition();
  }

  gravity() {
    this.vector.y += ACCELERATION;
  }

  destroy() {
    this._element.remove();
    this.hurtbox.element.remove();
    this._hitbox = {};
    this.removeHitbox();
  }

  update() {
    if (this._frameCounter >= this.action.frames[this.direction].length) {
      if(this.action.name === MONSTER_ACTIONS.death) return this.isDead = true;
      if(this.action.name !== MONSTER_ACTIONS.death) this._frameCounter = 0;
    }

    this.playEffects();
    this.updateFrame();
    this._frameCounter++;
  }

  loop() {
    nextPosition({
      hurtbox: this.hurtbox.vertices,
      blocks: this.blocksVertices,
      vector: this.vector,
      position: this.position,
      collision: this.collision,
    });

    if (this.collision.bottom) {
      this.vector.y = 0;

      if (this.vector.x === 0) this.idle();
    }

    this.updatePosition();
    this.gravity();
  }

  showHurtbox() {
    this.hurtbox.element.style.position = 'absolute';
    this.hurtbox.element.style.border = '1px solid red';
    this.hurtbox.element.style.boxSizing = 'border-box';

    document.getElementById('enemies').appendChild(this.hurtbox.element);
  }

  showHitbox() {
    this._showHitbox = true;
  }

  initialize({ position, blocksVertices, hero }) {
    this._element.style.position = 'absolute';
    this._element.style.backgroundSize = 'cover';
    this._element.style.imageRendering = 'pixelated';

    document.getElementById('enemies').appendChild(this._element);

    this.action = this._actions.idle;

    this.position.x = position.x;
    this.position.y = position.y;

    this.hero = hero;
    this.blocksVertices = blocksVertices;
  }
}
