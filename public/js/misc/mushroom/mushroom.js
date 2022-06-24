import { isCollidingBottom } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Mushroom extends Misc {
  constructor() {
    super({ states: STATES });
  }

  loop({ hero }) {
    if(isCollidingBottom(hero.hurtbox.vertices, this.vertices)) {
      hero.vector.y = -25;
      hero.jump();
    }
  }

}