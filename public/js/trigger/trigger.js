import { RESOLUTION_MULTIPLIER } from '../constants.js';

export default class Trigger {
  constructor({ states }) {
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.disabled;
    this.element = document.createElement('div');
    this.hero = {};
    this.isEnabled = false;
  }

  destroy() {
    this.element.remove();
  }

  initialize() {}
}
