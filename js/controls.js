export const KEY_CODES = {
  spacebar: 32,
  right: 39,
  left: 37,
  up: 38,
  down: 40,
};
const SIMULTANOUS_KEYS = {
  [KEY_CODES.up]: {
    [KEY_CODES.right]: true,
    [KEY_CODES.left]: true,
  },
  [KEY_CODES.right]: {
    [KEY_CODES.up]: true,
  },
  [KEY_CODES.left]: {
    [KEY_CODES.up]: true,
  },
};
export class Controls {
  constructor() {
    this.god_mod = false;
    this.gameContext = null;
    this.onStop = {
      right: () => {},
      left: () => {},
      up: () => {},
      down: () => {},
      spacebar: () => {},
    };
    this._pressed = {
      32: 0,
      39: 0,
      37: 0,
      38: 0,
      40: 0,
    };
    this.keys = {
      spacebar: 32,
      right: 39,
      left: 37,
      up: 38,
      down: 40,
    };
  }

  onRight() {
    this.onStop.right = this.gameContext.hero.goRight();
  }

  onLeft() {
    this.onStop.left = this.gameContext.hero.goLeft();
  }

  onSpacebar() {
    this.onStop.spacebar = this.gameContext.hero.swordAttack();
  }

  onUp() {
    this.onStop.up = this.god_mod
      ? this.gameContext.hero.up()
      : this.gameContext.hero.jump();
  }

  onDown() {
    this.onStop.down = this.gameContext.hero.down();
  }

  onKeydown(event) {
    if (!Object.values(this.keys).includes(event.keyCode)) return;
    if (
      !!Object.keys(this._pressed)
        .filter((key) => this._pressed[key] && key)
        .filter((key) => key && !SIMULTANOUS_KEYS[key][event.keyCode]).length
    )
      return;
    this._pressed[event.keyCode]++;

    if (this._pressed[this.keys.right] === 1) {
      this._pressed[this.keys.right]++;
      this.onRight();
    }
    if (this._pressed[this.keys.left] === 1) {
      this._pressed[this.keys.left]++;
      this.onLeft();
    }
    if (this._pressed[this.keys.spacebar] === 1) {
      this._pressed[this.keys.spacebar]++;
      this.onSpacebar();
    }
    if (this._pressed[this.keys.up] === 1) {
      this._pressed[this.keys.up]++;
      this.onUp();
    }
    if (this._pressed[this.keys.down] === 1) {
      this._pressed[this.keys.down]++;
      this.onDown();
    }
  }

  onKeyup(event) {
    if (Object.values(this.keys).includes(event.keyCode))
      this._pressed[event.keyCode] = 0;

    if (event.keyCode === this.keys.right) this.onStop.right?.();
    if (event.keyCode === this.keys.left) this.onStop.left?.();
    if (event.keyCode === this.keys.up) this.onStop.up?.();
    if (event.keyCode === this.keys.down) this.onStop.down?.();
  }

  addEventListeners(gameContext) {
    this.gameContext = gameContext;

    window.addEventListener(
      'keyup',
      (event) => {
        this.onKeyup(event);
      },
      false
    );
    window.addEventListener(
      'keydown',
      (event) => {
        this.onKeydown(event);
      },
      false
    );
  }
}
