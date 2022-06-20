import { isColliding } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Spikes extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {}

  loop() {
    if (isColliding(this.hero.hurtbox.vertices, this.vertices)) {
      this.hero.hurt();
    }
  }
}
