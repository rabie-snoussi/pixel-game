import Monster from '../monster.js';
import GOBLIN_IMGS from '../../data/characters/goblin/goblin.js';
import {
  DIRECTIONS,
  GRID_DIMENSIONS,
  GOBLIN_ATTACK_INTERVAL,
  MONSTER_ACTIONS,
} from '../../constants.js';
import {
  heroChase,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
} from '../helpers.js';

export default class Goblin extends Monster {
  constructor() {
    super({ actions: GOBLIN_IMGS });
    this._heroCollision = false;
    this._isAttacking = false;
    this._attackInterval = null;
  }

  async attackInterval() {
    this._isAttacking = true;
    this.attack();
    this._attackInterval = setInterval(() => {
      this.attack();
    }, GOBLIN_ATTACK_INTERVAL);
  }

  async loop() {
    if (!this._isAttacking)
      heroChase({
        verteces: this.hurtbox.verteces,
        heroVerteces: this.hero.hurtbox.verteces,
        vector: this._vector,
        distance: {
          x: GRID_DIMENSIONS.width * 5,
          y: GRID_DIMENSIONS.height * 2,
        },
      });

    this._heroCollision =
      isCollidingLeft(this.hurtbox.verteces, this.hero.hurtbox.verteces) ||
      isCollidingRight(this.hurtbox.verteces, this.hero.hurtbox.verteces);

    if (this._heroCollision) this._vector.x = 0;
    if (!this._heroCollision && this._action.name !== MONSTER_ACTIONS.attack) {
      this._isAttacking = false;
      clearInterval(this._attackInterval);
    }

    nextPosition({
      hurtbox: this.hurtbox.verteces,
      blocks: this._blocksVerteces,
      vector: this._vector,
      position: this._position,
      collision: this._collision,
    });

    if (this._vector.x !== 0) this.run();

    if (this._vector.x > 0) this._direction = DIRECTIONS.right;
    if (this._vector.x < 0) this._direction = DIRECTIONS.left;

    if (this._collision.bottom) {
      this._vector.y = 0;

      if (this._vector.x === 0) {
        if (this._heroCollision && !this._isAttacking) this.attackInterval();
        else this.idle();
      }
    }

    this.updatePosition();
    this.gravity();
  }
}
