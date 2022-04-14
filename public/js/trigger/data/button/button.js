import { RESOLUTION_MULTIPLIER } from '../../../constants.js';
import { isCollidingTop } from '../../../helpers.js';
import Trigger from '../../trigger.js';
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
    if (isCollidingTop(this.vertices, this.hero.hurtbox.verteces))
      return this.enable();
    this.disable();
  }

  initialize({ position, hero }) {
    this.position.x = position.x;
    this.position.y = position.y + 7.77 * RESOLUTION_MULTIPLIER;
    this.vertices = this.state.getVertices(this.position);

    this.element.style.position = 'absolute';
    this.element.style.backgroundSize = 'cover';
    this.element.style.imageRendering = 'pixelated';

    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;
    this.element.style.left = this.position.x + 'px';
    this.element.style.top = this.position.y + 'px';

    document.getElementById('items').appendChild(this.element);

    this.hero = hero;
  }
}
