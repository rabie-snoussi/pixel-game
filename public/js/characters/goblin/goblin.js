import Monster from '../monster.js';
import GOBLIN_IMGS from '../../data/characters/goblin/goblin.js';

export default class Goblin extends Monster {
  constructor() {
    super({ actions: GOBLIN_IMGS });
  }
}
