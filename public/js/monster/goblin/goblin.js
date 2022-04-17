import Monster from '../monster.js';
import ACTIONS from './index.js';
import {
  DIRECTIONS,
  GRID_DIMENSIONS,
  MONSTER_ATTACK_INTERVAL,
  MONSTER_ACTIONS,
  MONSTER_HEALTH,
  MONSTER_SPEED,
} from '../../constants.js';
import {
  isColliding,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
  chase,
} from '../../helpers.js';

export default class Goblin extends Monster {
  constructor() {
    super({ actions: ACTIONS });
    this.heroCollision = false;
    this.isAttacking = false;
    this.attackInterval = null;
    this.isHit = false;
    this.health = MONSTER_HEALTH.goblin;
  }

  attacking() {
    this.isAttacking = true;
    this.attack();

    this.attackInterval = setInterval(() => {
      this.attack();
    }, MONSTER_ATTACK_INTERVAL.goblin);
  }

  loop() {
    // Hit check
    if (
      !_.isEmpty(this.hero.hitbox) &&
      isColliding(this.hero.hitbox, this.hurtbox.vertices) &&
      !this.isHit
    ) {
      clearInterval(this.attackInterval);
      this.isAttacking = false;
      this.isHit = true;
      this.removeHitbox();

      if (this.health > 0) {
        this.hit();
        this.vector.y -= 5;
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
      chase({
        speed: MONSTER_SPEED.goblin,
        chaserVertices: this.hurtbox.vertices,
        chasedVertices: this.hero.hurtbox.vertices,
        vector: this.vector,
        distance: {
          x: GRID_DIMENSIONS.width * 10,
          y: GRID_DIMENSIONS.height * 4,
        },
      });
    }

    this.heroCollision =
      isCollidingLeft(this.hurtbox.vertices, this.hero.hurtbox.vertices) ||
      isCollidingRight(this.hurtbox.vertices, this.hero.hurtbox.vertices);

    // Stop moving when Colliding with the play or being hit or attacking
    if (this.heroCollision || this.isHit || this.isAttacking) this.vector.x = 0;

    if (!this.heroCollision && this.action.name !== MONSTER_ACTIONS.attack) {
      this.isAttacking = false;
      clearInterval(this.attackInterval);
    }

    nextPosition({
      hurtbox: this.hurtbox.vertices,
      blocks: this.blocksVertices,
      vector: this.vector,
      position: this.position,
      collision: this.collision,
      items: this.items,
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
