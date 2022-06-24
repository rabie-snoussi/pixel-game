import { MISCS } from '../../constants.js';
import { isCollidingTop } from '../../helpers.js';
import Misc from '../misc.js';
import STATES from './states/index.js';

export default class Button extends Misc {
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

  loop({ hero, miscs }) {
    const stones = miscs.filter((item) => item.name === MISCS.stone);

    const isEnabledArray = [...stones, hero.hurtbox]
      .map((item) => isCollidingTop(this.vertices, item.vertices))
      .filter((item) => item === true);

    if (isEnabledArray.length > 0) return this.enable();

    this.disable();
  }

}
