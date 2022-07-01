import { isColliding } from '../../helpers.js';
import sound from '../../sound/sound.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Coin extends Misc {
  constructor() {
    super({ states: STATES });
  }

  loop({ hero, game }) {
    if (
      isColliding(this.vertices, hero.hurtbox.vertices) &&
      !this.isCollecting
    ) {
      this.isCollecting = true;
      this.collect(game);
    }
  }

  collect(game) {
      this.state = this.states.collect;
      this.position.y-= 16;
      this.frameCounter = 0;
      game.coins++;

      sound.coin();
  }
}
