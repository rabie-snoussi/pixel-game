import { ACCELERATION } from '../../constants.js';
import Misc from '../misc.js';
import STATES from './states/index.js';
import {
  getCenterPosition,
  isColliding,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
} from '../../helpers.js';

export default class Stone extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {}

  loop() {
    if (
      !_.isEmpty(this.hero.hitbox) &&
      isColliding(this.hero.hitbox, this.vertices)
    ) {
      this.vector.y -= 1.25;
      if (
        getCenterPosition(this.vertices).x <
        getCenterPosition(this.hero.hurtbox.vertices).x
      )
        this.vector.x -= 0.5;
      else this.vector.x += 0.5;
    }
    if (isCollidingRight(this.vertices, this.hero.hurtbox.vertices)) {
      this.hero.push();
      this.vector.x = -1;
    }

    if (isCollidingLeft(this.vertices, this.hero.hurtbox.vertices)) {
      this.hero.push();
      this.vector.x = 1;
    }

    if (
      !isCollidingLeft(this.vertices, this.hero.hurtbox.vertices) &&
      !isCollidingRight(this.vertices, this.hero.hurtbox.vertices) &&
      this.collisionObj.bottom
    )
      this.vector.x = 0;

    nextPosition({
      hurtbox: this.vertices,
      position: this.position,
      vector: this.vector,
      collision: this.collisionObj,
      blocks: this.blocks,
      miscs: this.miscs,
    });

    if (this.collisionObj.bottom) this.vector.y = 0;

    this.vertices = this.state.getVertices(this.position);

    this.element.style.top = `${this.position.y}px`;
    this.element.style.left = `${this.position.x}px`;
    this.gravity();
  }

  gravity() {
    this.vector.y += ACCELERATION;
  }
}
