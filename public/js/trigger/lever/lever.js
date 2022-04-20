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

  async loop() {
    if (_.isEmpty(this.hero.hitbox)) return (this.isLocked = false);
    if (isColliding(this.vertices, this.hero.hitbox) && !this.isLocked) {
      this.state.name === this.states.enabled.name
        ? this.disable()
        : this.enable();
      this.isLocked = true;
    }
  }

  initialize({ position, hero, id, name }) {
    this.position = position;
    this.vertices = this.state.getVertices(this.position);
    this.collision = this.state.collision;
    this.name = name;

    this.element = createElement({
      position,
      dimensions: this.state.dimensions,
      img: this.state.img
    });

    this.element.setAttribute('id', id);

    document.getElementById('misc').appendChild(this.element);

    this.element.dataset.isEnabled = '0';

    this.hero = hero;
  }
}
