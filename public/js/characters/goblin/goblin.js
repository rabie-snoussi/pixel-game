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
  isColliding,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
} from '../helpers.js';

export default class Goblin extends Monster {
  constructor() {
    super({ actions: GOBLIN_IMGS });
    this.heroCollision = false;
    this.isAttacking = false;
    this.attackInterval = null;
    this.isHit = false;
  }

  attacking() {
    this.isAttacking = true;
    this.attack();
    this.attackInterval = setInterval(() => {
      this.attack();
    }, GOBLIN_ATTACK_INTERVAL);
  }

  loop() {
    if (
      !_.isEmpty(this.hero.hitbox) &&
      isColliding(this.hero.hitbox, this.hurtbox.verteces) &&
      !this.isHit
    ) {
      this.hit();
      this.isHit = true;
      this.vector.y -= 10;
    }

    if (this.isHit && this.action.name !== MONSTER_ACTIONS.hit) {
      this.isHit = false;
    }

    if (!this.isAttacking && !this.isHit) {
      heroChase({
        verteces: this.hurtbox.verteces,
        heroVerteces: this.hero.hurtbox.verteces,
        vector: this.vector,
        distance: {
          x: GRID_DIMENSIONS.width * 5,
          y: GRID_DIMENSIONS.height * 2,
        },
      });
    }

    this.heroCollision =
      isCollidingLeft(this.hurtbox.verteces, this.hero.hurtbox.verteces) ||
      isCollidingRight(this.hurtbox.verteces, this.hero.hurtbox.verteces);

    if (this.heroCollision || this.isHit || this.isAttacking) this.vector.x = 0;
    if (!this.heroCollision && this.action.name !== MONSTER_ACTIONS.attack) {
      this.isAttacking = false;
      clearInterval(this.attackInterval);
    }

    nextPosition({
      hurtbox: this.hurtbox.verteces,
      blocks: this.blocksVerteces,
      vector: this.vector,
      position: this.position,
      collision: this.collision,
    });

    if (this.vector.x !== 0) this.run();

    if (this.vector.x > 0) this.direction = DIRECTIONS.right;
    if (this.vector.x < 0) this.direction = DIRECTIONS.left;

    if (this.collision.bottom) {
      this.vector.y = 0;

      if (this.vector.x === 0) {
        if (this.heroCollision && !this.isAttacking && !this.isHit)
          this.attacking();
        else this.idle();
      }
    }

    this.updatePosition();
    this.gravity();
  }
}
