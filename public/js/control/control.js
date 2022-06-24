import { KEY_CODES, SIMULTANOUS_KEYS } from '../constants.js';
export default class Controls {
  constructor() {
    this.godMode = false;
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

  onEscape() {}

  setGameControls(hero) {
    this.onDown = () => (this.onStop.down = hero.goDown());
    this.onSpacebar = () => (this.onStop.spacebar = hero.attack());
    this.onLeft = () => (this.onStop.left = hero.goLeft());
    this.onRight = () => (this.onStop.right = hero.goRight());
    this.onUp = async () => (this.onStop.up = await hero.jumpUp());
  }

  setMenuControls(hud, game) {
    this.onDown = () => hud.nextOption();
    this.onUp = () => hud.previousOption();
    this.onLeft = () => hud.previousOption();
    this.onRight = () => hud.nextOption();
    this.onSpacebar = () => hud.selectOption();
    this.onEscape = () => {
      if (game.isPaused) return game.resume();
      if (!game.isPaused && !hud.options)
        return game.pause();
    };
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
    if (event.keyCode === KEY_CODES.escape) {
      this.pressed[KEY_CODES.escape]++;
      this.onEscape();
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

  initialize() {
    this.addEventListeners();
  }
}
