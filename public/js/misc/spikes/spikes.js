import { isColliding } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Spikes extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {}

  loop({ hero }) {
    if (isColliding(hero.hurtbox.vertices, this.vertices)) {
      hero.hurt();
    }
  }
}
