import { KEY_CODES, SIMULTANOUS_KEYS } from './constants.js';
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
    if (!Object.values(KEY_CODES).includes(event.keyCode)) return;
    if (
      !!Object.keys(this._pressed)
        .filter((key) => this._pressed[key] && key)
        .filter((key) => key && !SIMULTANOUS_KEYS[key]?.[event.keyCode]).length
    )
      return;
    this._pressed[event.keyCode]++;

    if (this._pressed[KEY_CODES.right] === 1) {
      this._pressed[KEY_CODES.right]++;
      this.onRight();
    }
    if (this._pressed[KEY_CODES.left] === 1) {
      this._pressed[KEY_CODES.left]++;
      this.onLeft();
    }
    if (this._pressed[KEY_CODES.spacebar] === 1) {
      this._pressed[KEY_CODES.spacebar]++;
      this.onSpacebar();
    }
    if (this._pressed[KEY_CODES.up] === 1) {
      this._pressed[KEY_CODES.up]++;
      this.onUp();
    }
    if (this._pressed[KEY_CODES.down] === 1) {
      this._pressed[KEY_CODES.down]++;
      this.onDown();
    }
  }

  onKeyup(event) {
    if (Object.values(KEY_CODES).includes(event.keyCode))
      this._pressed[event.keyCode] = 0;

    if (event.keyCode === KEY_CODES.right) this.onStop.right?.();
    if (event.keyCode === KEY_CODES.left) this.onStop.left?.();
    if (event.keyCode === KEY_CODES.up) this.onStop.up?.();
    if (event.keyCode === KEY_CODES.down) this.onStop.down?.();
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
