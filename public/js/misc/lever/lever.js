import { isColliding } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Lever extends Misc {
  constructor() {
    super({ states: STATES });
    this.state = this.states.disabled;
  }

  update() {}

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
}
