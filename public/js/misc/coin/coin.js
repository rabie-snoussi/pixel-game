import { isColliding } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Coin extends Misc {
  constructor() {
    super({ states: STATES });
  }

  loop({ hero, blocks, miscs }) {
    if (
      isColliding(this.vertices, hero.hurtbox.vertices) &&
      !this.isCollecting
    ) {
      this.isCollecting = true;
      this.collect(hero);
    }
  }

  collect(hero) {
      this.state = this.states.collect;
      this.position.y-= 16;
      this.frameCounter = 0;
      hero.coins++;
  }
}
