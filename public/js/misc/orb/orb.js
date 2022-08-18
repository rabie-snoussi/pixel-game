import Misc from '../misc.js';
import STATES from './states/index.js';
import { isColliding } from '../../helpers.js';
import sound from '../../sound/sound.js';

export default class Orb extends Misc {
  constructor() {
    super({ states: STATES });
  }

  activate() {
    this.state = this.states.activated;
    sound.orb();
  }

  loop({ hero, game }) {
    if (
      !_.isEmpty(hero.hitbox) &&
      isColliding(hero.hitbox, this.vertices) &&
      this.state.name !== this.states.activated.name
    ) {
      this.activate();
      game.gameWon();
    }
  }
}
