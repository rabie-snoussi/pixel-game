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
    this.collision = this.state.collision;
    
    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;
    this.element.dataset.isEnabled = '1';
  }

  disable() {
    if (this.state.name === this.states.disabled.name) return;

    this.state = this.states.disabled;
    this.collision = this.state.collision;

    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;
    this.element.dataset.isEnabled = '0';
  }

  loop() {
    if (isCollidingTop(this.vertices, this.hero.hurtbox.vertices))
      return this.enable();
    this.disable();
  }

  initialize({ position, hero, id }) {
    this.position = position;
    this.position.y += 7.77;
    this.vertices = this.state.getVertices(this.position);
    this.collision = this.state.collision;

    this.element = createElement({
      position: this.position,
      dimensions: this.state.dimensions,
      img: this.state.img
    });

    this.element.setAttribute('id', id);

    document.getElementById('misc').appendChild(this.element);

    this.element.dataset.isEnabled = '0';

    this.hero = hero;
  }
}
