import { isCollidingBottom } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Mushroom extends Misc {
  constructor() {
    super({ states: STATES });
  }

  loop() {
    if(isCollidingBottom(this.hero.hurtbox.vertices, this.vertices)) this.hero.vector.y -= 40;
  }

}