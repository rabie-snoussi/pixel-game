import { RESOLUTION_MULTIPLIER } from '../../../constants.js';
import Collectible from '../../collectible.js';
import STATES from './data/index.js';

export default class Coin extends Collectible {
  constructor() {
    super({ states: STATES });
  }

  collect() {
      this.state = this.states.collect;
      this.position.y-= 16 * RESOLUTION_MULTIPLIER;
      this.frameCounter = 0;
      this.hero.coins++;
  }
}
