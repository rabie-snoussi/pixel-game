import Monster from './monster.js';
import GOBLIN_SPRITS from '../data/enemies/goblin.js';
import {
  chaseDistance,
  isCollidingLeft,
  isCollidingRight,
  sleep,
} from '../helpers.js';
import {
  DIRECTIONS,
  GOBLIN_ACTIONS,
  GOBLIN_SPEED,
  GRID_DIMENSIONS,
  MOVEMENT_INTERVAL,
  GOBLIN_ATTACK_INTERVAL,
} from '../constants.js';

export default class Goblin extends Monster {
  constructor() {
    super({ allSprits: GOBLIN_SPRITS });
    this._isAttacking = false;
    this._attackInterval;
  }

  runSprits() {
    if (!this._sprits.possibleActions.includes(GOBLIN_ACTIONS.run)) return;

    this._sprits = this._allSprits[GOBLIN_ACTIONS.run];
    this._spritsCounter = 0;
  }

  attackSprits() {
    if (!this._sprits.possibleActions.includes(GOBLIN_ACTIONS.attack)) return;

    this._sprits = this._allSprits[GOBLIN_ACTIONS.attack];
    this._spritsCounter = 0;
  }

  aggression() {
    setInterval(async () => {
      const distance = chaseDistance({
        heroVerteces: this._heroHurtbox.verteces,
        monsterVerteces: this._hurtbox,
        blocksVerteces: this._blocksVerteces,
        detection: {
          x: GRID_DIMENSIONS.width * 4,
          y: GRID_DIMENSIONS.height * 1,
        },
        distance: GOBLIN_SPEED,
      });

      if (!distance.x) return this.idleSprits();
      if (this._isAttacking) return;

      if (distance.x < 0) this.updateDirection(DIRECTIONS.left);
      if (distance.x > 0) this.updateDirection(DIRECTIONS.right);

      this.runSprits();
      this._position.x += distance.x;
      this.updatePosition();

      while (
        isCollidingLeft(this._hurtbox, this._heroHurtbox.verteces) ||
        isCollidingRight(this._hurtbox, this._heroHurtbox.verteces)
      ) {
        this._isAttacking = true;
        this.attackSprits();
        await sleep(GOBLIN_ATTACK_INTERVAL);
      }

      this._isAttacking = false;
    }, MOVEMENT_INTERVAL);
  }
}
