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

  initialize() {}
}
