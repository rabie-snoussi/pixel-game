import { KEY_CODES, SIMULTANOUS_KEYS } from './constants.js';
export class Controls {
  // Private properties

  #godMod = false;
  #hero = null;
  #onStop = {
    right: () => {},
    left: () => {},
    up: () => {},
    down: () => {},
    spacebar: () => {},
  };
  #pressed = {
    32: 0,
    39: 0,
    37: 0,
    38: 0,
    40: 0,
  };
  constructor() {}

  // Private methods

  #onRight() {
    this.#onStop.right = this.#hero.goRight();
  }

  #onLeft() {
    this.#onStop.left = this.#hero.goLeft();
  }

  #onSpacebar() {
    this.#onStop.spacebar = this.#hero.swordAttack();
  }

  #onUp() {
    this.#onStop.up = this.#godMod ? this.#hero.goUp() : this.#hero.jump();
  }

  #onDown() {
    this.#onStop.down = this.#hero.goDown();
  }

  #onKeydown(event) {
    if (!Object.values(KEY_CODES).includes(event.keyCode)) return;
    if (
      !!Object.keys(this.#pressed)
        .filter((key) => this.#pressed[key] && key)
        .filter((key) => key && !SIMULTANOUS_KEYS[key]?.[event.keyCode]).length
    )
      return;
    this.#pressed[event.keyCode]++;

    if (this.#pressed[KEY_CODES.right] === 1) {
      this.#pressed[KEY_CODES.right]++;
      this.#onRight();
    }
    if (this.#pressed[KEY_CODES.left] === 1) {
      this.#pressed[KEY_CODES.left]++;
      this.#onLeft();
    }
    if (this.#pressed[KEY_CODES.spacebar] === 1) {
      this.#pressed[KEY_CODES.spacebar]++;
      this.#onSpacebar();
    }
    if (this.#pressed[KEY_CODES.up] === 1) {
      this.#pressed[KEY_CODES.up]++;
      this.#onUp();
    }
    if (this.#pressed[KEY_CODES.down] === 1) {
      this.#pressed[KEY_CODES.down]++;
      this.#onDown();
    }
  }

  #onKeyup(event) {
    if (Object.values(KEY_CODES).includes(event.keyCode))
      this.#pressed[event.keyCode] = 0;

    if (event.keyCode === KEY_CODES.right) this.#onStop.right?.();
    if (event.keyCode === KEY_CODES.left) this.#onStop.left?.();
    if (event.keyCode === KEY_CODES.up) this.#onStop.up?.();
    if (event.keyCode === KEY_CODES.down) this.#onStop.down?.();
  }

  #addEventListeners() {
    window.addEventListener(
      'keyup',
      (event) => {
        this.#onKeyup(event);
      },
      false
    );
    window.addEventListener(
      'keydown',
      (event) => {
        this.#onKeydown(event);
      },
      false
    );
  }

  // Public methods

  initialize(hero) {
    this.#hero = hero;
    this.#addEventListeners();
  }
}
