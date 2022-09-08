import ACTIONS from './index.js';
import {
  DIRECTIONS,
  HERO_SPEED,
  MAX_JUMPS,
  ACCELERATION,
  HERO_JUMP_SPEED,
} from '../constants.js';
import {
  cloneWithElements,
  nextPosition,
  createElement,
  addBoxEffect,
} from '../helpers.js';
import sound from '../sound/sound.js';
import sword from './effects/sword.js';

export default class Hero {
  constructor({ hearts }) {
    this.hearts = hearts;
    this.element = null;
    this.frameCounter = 0;
    this.direction = DIRECTIONS.right;
    this.action = ACTIONS.idle;
    this.jumpCount = MAX_JUMPS;
    this.effects = [];
    this.hitbox = {};
    this.isHitboxVisible = false;
    this.isDead = false;
    this.isImmune = false;
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
    if (this.action.name === ACTIONS.idle.name) return;
    if (this.action.name === ACTIONS.death.name) return;
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
    if (this.action.name === ACTIONS.run.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.run;
    this.frameCounter = 0;

    this.insertEffects();
  }

  push() {
    if (this.action.name === ACTIONS.push.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.push;
    this.frameCounter = 0;

    this.insertEffects();
  }

  fall() {
    if (this.action.name === ACTIONS.hit.name) return;
    if (this.action.name === ACTIONS.fall.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.fall;
    this.frameCounter = 0;

    this.insertEffects();
  }

  jump() {
    if (this.action.name === ACTIONS.hit.name) return;
    if (this.action.name === ACTIONS.jump.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.jump;
    this.frameCounter = 0;

    this.insertEffects();
    sound.jump();
  }

  hit() {
    if (this.action.name === ACTIONS.hit.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.hit;
    this.frameCounter = 0;

    this.insertEffects();
    sound.hit();
  }

  doubleJump() {
    if (this.action.name === ACTIONS.doubleJump.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.doubleJump;
    this.frameCounter = 0;

    this.insertEffects();
    sound.doubleJump();
  }

  postJump() {
    if (this.action.name === ACTIONS.postJump.name) return;
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.postJump;
    this.frameCounter = 0;

    this.insertEffects();
    sound.postJump();
  }

  attack() {
    if (this.action.name === ACTIONS.attack.name) return;
    if (this.action.name === ACTIONS.death.name) return;
    if (!_.isEmpty(this.effects.filter((effect) => effect.name === sword.name)))
      return;

    this.action = ACTIONS.attack;
    this.frameCounter = 0;

    this.insertEffects();
    sound.attack();
  }

  death() {
    if (this.action.name === ACTIONS.death.name) return;

    this.action = ACTIONS.death;
    this.frameCounter = 0;
    this.hurtbox.vertices = {};

    this.insertEffects();
    sound.death();
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
    this.vector.y += ACCELERATION;
  }

  getHurtbox() {
    return this.hurtbox;
  }

  hurt() {
    if (this.isImmune) return;

    this.isImmune = true;

    setTimeout(() => {
      this.isImmune = false;
    }, 1000);

    if (this.hearts > 1) {
      this.hit();
      this.vector.y = -5;
    } else this.death();

    if (this.hearts > 0) this.hearts--;
  }

  die() {
    this.hearts = 0;
    this.death();
  }

  update() {
    if (this.isDead) return;
    if (this.frameCounter >= this.action.frames[this.direction].length) {
      if (this.action.name === ACTIONS.death.name) return (this.isDead = true);
      else this.frameCounter = 0;
    }
    this.playEffects();
    this.updateFrame();
    this.frameCounter++;
  }

  loop({ blocks, miscs }) {
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
      this.jumpCount = MAX_JUMPS;
      this.vector.y = 0;

      if (this.action.name === ACTIONS.fall.name) this.postJump();

      if (this.vector.x === 0) this.idle();
      else {
        if (!_.every(miscs, ['isPushed', false])) this.push();
        else this.run();
      }
    }

    if (this.vector.x > 0) this.direction = DIRECTIONS.right;
    else if (this.vector.x < 0) this.direction = DIRECTIONS.left;

    if (!this.collision.bottom) {
      if (this.vector.y > 0) this.fall();
      else if (this.vector.y < 0) {
        if (this.jumpCount === 2) this.jump();
        if (this.jumpCount === 1) this.jump();
        if (this.jumpCount === 0) this.doubleJump();
      }
    }

    if (this.collision.top) this.vector.y = 0;

    this.updatePosition();
    this.gravity();
  }

  goRight() {
    this.vector.x += HERO_SPEED;
    return () => (this.vector.x -= HERO_SPEED);
  }

  goLeft() {
    this.vector.x -= HERO_SPEED;
    return () => (this.vector.x += HERO_SPEED);
  }

  jumpUp() {
    if (!this.jumpCount) return;

    this.jumpCount--;

    if (this.jumpCount === 1 && !this.collision.bottom) this.jumpCount = 0;

    this.vector.y = -HERO_JUMP_SPEED;
  }

  goDown() {
    this.vector.y += HERO_SPEED;

    return () => {
      if (this.vector.y >= HERO_SPEED) this.vector.y -= HERO_SPEED;
    };
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
      addBoxEffect({
        element: effect.elements.hitbox,
        borderColor: 'white',
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

  spawn({ position, vector = { x: 0, y: 0 } }) {
    this.element = createElement({
      position,
      dimensions: this.action.dimensions,
      img: this.action.img,
    });

    this.vector = { ...vector };

    this.element.setAttribute('id', 'hero');

    this.hurtbox.element = document.createElement('div');
    this.hurtbox.element.style.position = 'absolute';

    document.getElementById('map').appendChild(this.element);
    document.getElementById('map').appendChild(this.hurtbox.element);

    this.position = { ...position };

    this.updateHurtbox();
  }
}
