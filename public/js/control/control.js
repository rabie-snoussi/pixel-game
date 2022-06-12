import { KEY_CODES, SIMULTANOUS_KEYS } from '../constants.js';
export default class Controls {
  constructor() {
    this.godMode = false;
    this.hero = null;
    this.game = null;
    this.hud = null;
    this.onStop = {
      right: () => {},
      left: () => {},
      up: () => {},
      down: () => {},
      spacebar: () => {},
      escape: () => {},
    };
    this.pressed = {
      32: 0,
      39: 0,
      37: 0,
      38: 0,
      40: 0,
      27: 0,
    };
  }

  onRight() {}

  onLeft() {}

  onSpacebar() {}

  onUp() {}

  onDown() {}

  setHeroControls() {
    this.onDown = () => (this.onStop.down = this.hero.goDown());
    this.onSpacebar = () => (this.onStop.spacebar = this.hero.attack());
    this.onLeft = () => (this.onStop.left = this.hero.goLeft());
    this.onRight = () => (this.onStop.right = this.hero.goRight());
    this.onUp = async () =>
      (this.onStop.up = this.isGodMode
        ? this.hero.goUp()
        : await this.hero.jumpUp());
  }

  setMenuControls() {
    this.onDown = () => this.hud.nextOption();
    this.onUp = () => this.hud.previousOption();
    this.onLeft = () => this.hud.previousOption();
    this.onRight = () => this.hud.nextOption();
    this.onSpacebar = () => this.hud.selectOption();
  }

  onKeydown(event) {
    if (!Object.values(KEY_CODES).includes(event.keyCode)) return;
    if (
      !!Object.keys(this.pressed)
        .filter((key) => this.pressed[key] && key)
        .filter((key) => key && !SIMULTANOUS_KEYS[key]?.[event.keyCode]).length
    )
      return;
    this.pressed[event.keyCode]++;

    if (this.pressed[KEY_CODES.right] === 1) {
      this.pressed[KEY_CODES.right]++;
      this.onRight();
    }
    if (this.pressed[KEY_CODES.left] === 1) {
      this.pressed[KEY_CODES.left]++;
      this.onLeft();
    }
    if (this.pressed[KEY_CODES.spacebar] === 1) {
      this.pressed[KEY_CODES.spacebar]++;
      this.onSpacebar();
    }
    if (this.pressed[KEY_CODES.up] === 1) {
      this.pressed[KEY_CODES.up]++;
      this.onUp();
    }
    if (this.pressed[KEY_CODES.down] === 1) {
      this.pressed[KEY_CODES.down]++;
      this.onDown();
    }
  }

  onKeyup(event) {
    if (Object.values(KEY_CODES).includes(event.keyCode))
      this.pressed[event.keyCode] = 0;

    if (event.keyCode === KEY_CODES.right) {
      this.onStop.right?.();
      this.onStop.right = null;
    }
    if (event.keyCode === KEY_CODES.left) {
      this.onStop.left?.();
      this.onStop.left = null;
    }
    if (event.keyCode === KEY_CODES.up) {
      this.onStop.up?.();
      this.onStop.up = null;
    }
    if (event.keyCode === KEY_CODES.down) {
      this.onStop.down?.();
      this.onStop.down = null;
    }

    if (event.keyCode === KEY_CODES.escape) {
      if (this.game.isPaused) return this.game.resume();
      if (!this.game.isPaused && !this.game.isGameOver)
        return this.game.pause();
    }
  }

  addEventListeners() {
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

  godMode() {
    this.isGodMode = true;
  }

  initialize({ hero, game, hud }) {
    this.hero = hero;
    this.game = game;
    this.hud = hud;
    this.addEventListeners();
    this.setHeroControls();
  }
}
