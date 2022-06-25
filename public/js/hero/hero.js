import ACTIONS from './index.js';
import {
  DIRECTIONS,
  HERO_SPEED,
  ANIMATION_INTERVAL,
  MAX_JUMPS,
  ACCELERATION,
  HERO_JUMP_SPEED,
} from '../constants.js';
import {
  sleep,
  cloneWithElements,
  nextPosition,
  createElement,
  addBoxEffect,
} from '../helpers.js';

export default class Hero {
  constructor({ hearts }) {
    this.isGodMode = false;
    this.hearts = hearts;
    this.element = null;
    this.frameCounter = 0;
    this.direction = DIRECTIONS.right;
    this.action = ACTIONS.idle;
    this.jumpCount = MAX_JUMPS;
    this.effects = [];
    this.hitbox = {};
    this.isHitboxVisible = false;
    this.isHit = false;
    this.isDead = false;
    this.vector = { x: 0, y: 0 };
    this.position = {
      x: 0,
      y: 0,
    };
    this.hurtbox = {
      element: null,
      vertices: {},
    };
    this.collision = {
      top: false,
      bottom: false,
      right: false,
      left: false,
    };
  }

  idle() {
    if (!this.action.allowedActions.includes(ACTIONS.idle.name)) return;
    if (
      !this.action.loop &&
      this.action.frames[this.direction].length > this.frameCounter
    )
      return;
    this.action = ACTIONS.idle;
    this.frameCounter = 0;

    this.insertEffects();
  }

  run() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.run.name)) return;

    this.action = ACTIONS.run;
    this.frameCounter = 0;

    this.insertEffects();
  }

  push() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.push.name)) return;

    this.action = ACTIONS.push;
    this.frameCounter = 0;

    this.insertEffects();
  }

  fall() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.fall.name)) return;

    this.action = ACTIONS.fall;
    this.frameCounter = 0;

    this.insertEffects();
  }

  preJump() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.preJump.name)) return;

    this.action = ACTIONS.preJump;
    this.frameCounter = 0;

    this.insertEffects();
  }

  insertEffects() {
    this.effects = cloneWithElements({
      actionEffects: this.action.effects,
      position: this.position,
      direction: this.direction,
      effects: this.effects,
      showHitbox: this.isHitboxVisible,
      borderColor: 'white',
      bgColor: 'rgba(255,255,255,0.25)',
    });
  }

  jump() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.jump.name)) return;

    this.action = ACTIONS.jump;
    this.frameCounter = 0;

    this.insertEffects();
  }

  hit() {
    if (!this.action.allowedActions.includes(ACTIONS.hit.name)) return;

    this.action = ACTIONS.hit;
    this.frameCounter = 0;

    this.insertEffects();
  }

  doubleJump() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.doubleJump.name)) return;

    this.action = ACTIONS.doubleJump;
    this.frameCounter = 0;

    this.insertEffects();
  }

  postJump() {
    if (this.isHit) return;
    if (!this.action.allowedActions.includes(ACTIONS.postJump.name)) return;

    this.action = ACTIONS.postJump;
    this.frameCounter = 0;

    this.insertEffects();
  }

  removeHitbox() {
    this.effects?.map((item) => item.elements?.hitbox?.remove());
  }

  removeEffects() {
    this.effects?.map((item) => item.elements?.effect?.remove());
  }

  destroy() {
    this.element.remove();
    this.hurtbox.element.remove();
    this.hurtbox.vertices = {};
    this.hitbox = {};
    this.position = {};
    this.removeHitbox();
    this.removeEffects();
  }

  playEffects() {
    this.effects?.forEach((item, i) => {
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

        this.hitbox = hitbox.vertices;

        if (!item.frames[item.character.direction].length) {
          hitboxElement.remove();
          this.hitbox = {};
        }
      }

      if (
        _.isEmpty(item.frames?.[item.character.direction]) &&
        _.isEmpty(item.hitbox?.[item.character.direction])
      )
        this.effects.splice(i, 1);
    });
  }

  updatePosition() {
    this.element.style.top = this.position.y + 'px';
    this.element.style.left = this.position.x + 'px';

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
    this.element.style.backgroundImage = this.action.img;

    this.element.style.height = this.action.dimensions.height;
    this.element.style.width = this.action.dimensions.width;

    const frame = this.action.frames[this.direction][this.frameCounter];

    this.element.style.backgroundPositionX = frame.backgroundPositionX;
    this.element.style.transform = frame.transform;
  }

  gravity() {
    if (this.isGodMode) return;
    this.vector.y += ACCELERATION;
  }

  getHurtbox() {
    return this.hurtbox;
  }

  attack() {
    if (!this.action.allowedActions.includes(ACTIONS.attack.name)) return;

    this.action = ACTIONS.attack;
    this.frameCounter = 0;

    this.insertEffects();
  }

  death() {
    if (!this.action.allowedActions.includes(ACTIONS.death.name)) return;

    this.action = ACTIONS.death;
    this.frameCounter = 0;

    this.insertEffects();
  }

  hurt() {
    if (this.isHit) return;

    if (this.hearts > 1) {
      this.hit();
      this.vector.y = -5;
    } else this.death();

    if (this.hearts > 0) this.hearts--;

    this.isHit = true;
  }

  update() {
    if (this.frameCounter >= this.action.frames[this.direction].length) {
      if (this.action.name === ACTIONS.death.name) {
        this.isDead = true;
        return this.destroy();
      }
      this.frameCounter = 0;
    }
    this.playEffects();
    this.updateFrame();
    this.frameCounter++;

    if (
      !this.action.loop &&
      this.frameCounter >= this.action.frames[this.direction].length
    )
      this.idle();
  }

  loop({ blocks, miscs }) {
    if (
      this.isHit &&
      this.action.name !== ACTIONS.hit.name &&
      this.action.name !== ACTIONS.death.name
    ) {
      this.isHit = false;
    }

    if (this.action.name === ACTIONS.death.name) return;

    nextPosition({
      hurtbox: this.hurtbox.vertices,
      blocks,
      vector: this.vector,
      position: this.position,
      collision: this.collision,
      miscs,
    });

    if (this.collision.bottom) {
      this.vector.y = 0;
      this.jumpCount = MAX_JUMPS;

      if (this.action.name === ACTIONS.fall.name) this.postJump();
      if (this.vector.x === 0) this.idle();

      if (this.vector.x !== 0) this.run();
    }

    if (!this.collision.bottom) {
      if (this.vector.y > 0) this.fall();
    }

    if (this.collision.top) this.vector.y = 0;

    this.updatePosition();
    this.gravity();
  }

  goRight() {
    this.direction = DIRECTIONS.right;
    this.vector.x += HERO_SPEED;

    return () => (this.vector.x -= HERO_SPEED);
  }

  goLeft() {
    this.direction = DIRECTIONS.left;
    this.vector.x -= HERO_SPEED;

    return () => (this.vector.x += HERO_SPEED);
  }

  async jumpUp() {
    if (!this.jumpCount) return;

    if (this.jumpCount === 2) {
      this.preJump();

      await sleep(ANIMATION_INTERVAL * 2);

      this.jump();
    }

    if (this.jumpCount === 1) this.doubleJump();

    this.jumpCount--;

    this.vector.y = -HERO_JUMP_SPEED;
  }

  goUp() {
    this.vector.y -= HERO_SPEED;
    return () => (this.vector.y += HERO_SPEED);
  }

  goDown() {
    this.vector.y += HERO_SPEED;
    return () => (this.vector.y -= this.vector.y);
  }

  showHurtbox() {
    addBoxEffect({
      element: this.hurtbox.element,
      borderColor: 'green',
      bgColor: 'rgba(0,255,0,0.25)',
    });
  }

  hideHurtbox() {
    this.hurtbox.element.style.border = 'none';
    this.hurtbox.element.style.background = 'none';
  }

  showHitbox() {
    this.isHitboxVisible = true;

    this.effects.map((effect) => {
      // TODO: MAKE box func
      addBoxEffect({
        element: effect.elements.hitbox,
        border: 'white',
        bgColor: 'rgba(255,255,255,0.25)',
      });
    });
  }

  hideHitbox() {
    this.isHitboxVisible = false;

    this.effects.map((effect) => {
      effect.elements.hitbox.style.border = 'none';
      effect.elements.hitbox.style.background = 'none';
    });
  }

  godMode() {
    this.isGodMode = true;
  }

  spawn({ position }) {
    this.element = createElement({
      position,
      dimensions: this.action.dimensions,
      img: this.action.img,
    });

    this.element.setAttribute('id', 'hero');

    this.hurtbox.element = document.createElement('div');
    this.hurtbox.element.style.position = 'absolute';

    document.getElementById('map').appendChild(this.element);
    document.getElementById('map').appendChild(this.hurtbox.element);

    this.position = { ...position };

    this.updateHurtbox();
  }
}
