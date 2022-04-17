import { isCollidingTop, createElement } from '../../helpers.js';
import Trigger from '../trigger.js';
import STATES from './states/index.js';

export default class Button extends Trigger {
  constructor() {
    super({ states: STATES });
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

  loop() {
    if (isCollidingTop(this.vertices, this.hero.hurtbox.vertices))
      return this.enable();
    this.disable();
  }

  initialize({ position, hero }) {
    this.position = position;
    this.position.y += 7.77;
    this.vertices = this.state.getVertices(this.position);

    this.element = createElement({
      position: this.position,
      dimensions: this.state.dimensions,
      img: this.state.img
    });

    document.getElementById('misc').appendChild(this.element);

    this.hero = hero;
  }
}
