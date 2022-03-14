export const KEY_CODES = {
  spacebar: 32,
  right: 39,
  left: 37,
  up: 38,
  down: 40,
};

export class Controls {
  constructor() {
    (this._pressed = {}),
      (this.keys = {
        spacebar: 32,
        right: 39,
        left: 37,
        up: 38,
        down: 40,
      });
  }

  isDown(keyCode) {
    return this._pressed[keyCode];
  }

  onKeydown(event) {
    this._pressed[event.keyCode] = true;
  }

  onKeyup(event) {
    delete this._pressed[event.keyCode];
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
}
