import Monster from './monster.js';
import GOBLIN_SPRITS from '../data/enemies/goblin.js';
import { chaseDistance } from '../helpers.js';
import {
  DIRECTIONS,
  GOBLIN_ACTIONS,
  GOBLIN_SPEED,
  GRID_DIMENSIONS,
  MOVEMENT_INTERVAL
} from '../constants.js';


export default class Goblin extends Monster {
  constructor() {
    super({ allSprits: GOBLIN_SPRITS });
  }

  runSprits() {
    if (!this._sprits.possibleActions.includes(GOBLIN_ACTIONS.run)) return;

    this._sprits = this._allSprits[GOBLIN_ACTIONS.run];
    this._spritsCounter = 0;
  }

  heroChasing() {
    setInterval(() => {
      const distance = chaseDistance({
        heroVerteces: this._heroHurtbox,
        monsterVerteces: this._hurtbox,
        blocksVerteces: this._blocksVerteces,
        detection: {
          x: GRID_DIMENSIONS.width * 7,
          y: GRID_DIMENSIONS.height * 3,
        },
        distance: GOBLIN_SPEED
      });

      if (!distance.x) return this.idleSprits();

      if (distance.x < 0) this.updateDirection(DIRECTIONS.left);
      if (distance.x > 0) this.updateDirection(DIRECTIONS.right);

      this.runSprits();
      this._position.x += distance.x;

      this.updatePosition();
    }, MOVEMENT_INTERVAL);
  }
}
