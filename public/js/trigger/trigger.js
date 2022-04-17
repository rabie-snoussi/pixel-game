export default class Trigger {
  constructor({ states }) {
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.disabled;
    this.element = null;
    this.hero = {};
    this.collision = null;
  }

  initialize() {}
}
