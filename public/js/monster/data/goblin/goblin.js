import Monster from '../../monster.js';
import GOBLIN_ACTIONS from './data/index.js';
import {
  DIRECTIONS,
  GRID_DIMENSIONS,
  GOBLIN_ATTACK_INTERVAL,
  MONSTER_ACTIONS,
  GOBLIN_HEALTH,
} from '../../../constants.js';
import { heroChase } from '../../helpers.js';
import {
  isColliding,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
} from '../../../helpers.js';

export default class Goblin extends Monster {
  constructor() {
    super({ actions: GOBLIN_ACTIONS });
    this.heroCollision = false;
    this.isAttacking = false;
    this.attackInterval = null;
    this.isHit = false;
    this.health = GOBLIN_HEALTH;
  }

  attacking() {
    this.isAttacking = true;
    this.attack();

    this.attackInterval = setInterval(() => {
      this.attack();
    }, GOBLIN_ATTACK_INTERVAL);
  }

  loop() {
    // Hit check
    if (
      !_.isEmpty(this.hero.hitbox) &&
      isColliding(this.hero.hitbox, this.hurtbox.verteces) &&
      !this.isHit
    ) {
      clearInterval(this.attackInterval);
      this.isAttacking = false;
      this.isHit = true;
      this.removeHitbox();

      if (this.health > 0) {
        this.hit();
        this.vector.y -= 10;
        this.health--;
      } else this.death();
    }

    if (
      this.isHit &&
      this.action.name !== MONSTER_ACTIONS.hit &&
      this.action.name !== MONSTER_ACTIONS.death
    ) {
      this.isHit = false;
    }

    // Prevents chasing when attacking or being hit
    if (!this.isAttacking && !this.isHit) {
      heroChase({
        verteces: this.hurtbox.verteces,
        heroVerteces: this.hero.hurtbox.verteces,
        vector: this.vector,
        distance: {
          x: GRID_DIMENSIONS.width * 10,
          y: GRID_DIMENSIONS.height * 4,
        },
      });
    }

    this.heroCollision =
      isCollidingLeft(this.hurtbox.verteces, this.hero.hurtbox.verteces) ||
      isCollidingRight(this.hurtbox.verteces, this.hero.hurtbox.verteces);

    // Stop moving when Colliding with the play or being hit or attacking
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

    // Change directions
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
