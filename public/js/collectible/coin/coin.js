import Collectible from '../collectible.js';
import STATES from './states/index.js';

export default class Coin extends Collectible {
  constructor() {
    super({ states: STATES });
  }

  collect() {
      this.state = this.states.collect;
      this.position.y-= 16;
      this.frameCounter = 0;
      this.hero.coins++;
  }
}
