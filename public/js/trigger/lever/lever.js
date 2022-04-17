import { isColliding, createElement } from '../../helpers.js';
import Trigger from '../trigger.js';
import STATES from './states/index.js';

export default class Lever extends Trigger {
  constructor() {
    super({ states: STATES });
    this.isLocked = false;
  }

  enable() {
    if (this.state.name === this.states.enabled.name) return;

    this.state = this.states.enabled;
    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;

    this.isEnabled = true;
  }

  disable() {
    if (this.state.name === this.states.disabled.name) return;

    this.state = this.states.disabled;
    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;

    this.isEnabled = false;
  }

  async loop() {
    if (_.isEmpty(this.hero.hitbox)) return (this.isLocked = false);
    if (isColliding(this.vertices, this.hero.hitbox) && !this.isLocked) {
      this.state.name === this.states.enabled.name
        ? this.disable()
        : this.enable();
      this.isLocked = true;
    }
  }

  initialize({ position, hero }) {
    this.position = position;
    this.vertices = this.state.getVertices(this.position);

    this.element = createElement({
      position,
      dimensions: this.state.dimensions,
      img: this.state.img
    });

    document.getElementById('misc').appendChild(this.element);

    this.hero = hero;
  }
}
