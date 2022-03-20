import { DIRECTIONS } from '../constants.js';
import Monster from './monster.js';
import SLIME_SPRITS from '../data/enemies/slime.js';

export default class Slime extends Monster {
  constructor() {
    super({ allSprits: SLIME_SPRITS })
  }

  updateDirection(direction) {
    if (direction == DIRECTIONS.right) {
      this._element.style.transform = 'scaleX(-1)';
      this._direction = DIRECTIONS.right;
    }
    if (direction == DIRECTIONS.left) {
      this._element.style.transform = 'none';
      this._direction = DIRECTIONS.left;
    }
  }
  
}
