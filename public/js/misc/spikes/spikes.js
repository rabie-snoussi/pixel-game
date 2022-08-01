import { isColliding, isVerticesColliding } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Spikes extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {}

  loop({ hero, monsters }) {
    if (
      isVerticesColliding(hero.hurtbox.vertices, this.vertices, hero.vector)
    ) {
      hero.die();
    }

    monsters.map((monster) => {
      if (isColliding(monster.hurtbox.vertices, this.vertices)) monster.die();
    });
  }
}
