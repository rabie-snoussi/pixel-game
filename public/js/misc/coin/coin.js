import { isColliding } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Coin extends Misc {
  constructor() {
    super({ states: STATES });
  }

  loop() {
    if (
      isColliding(this.vertices, this.hero.hurtbox.vertices) &&
      !this.isCollecting
    ) {
      this.isCollecting = true;
      this.collect();
    }
  }

  collect() {
      this.state = this.states.collect;
      this.position.y-= 16;
      this.frameCounter = 0;
      this.hero.coins++;
  }
}
