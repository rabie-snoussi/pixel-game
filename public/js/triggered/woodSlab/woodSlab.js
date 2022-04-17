import { revertBool } from '../../helpers.js';
import Triggered from '../triggered.js';

export default class WoodSlab extends Triggered {
  constructor({ states }) {
    super({ states });
    this.isOpen = false;
  }

  update() {}

  open() {
    this.isOpen = true;
    this.element.style.display = 'none';
    this.vertices = {};
    this.collision = this.state.collision;
  }

  close() {
    this.isOpen = false;
    this.element.style.display = 'block';
    this.vertices = this.state.getVertices(this.position);
    this.collision = this.state.collision;
  }

  loop() {
    if(!this.triggerElement) return this.triggerElement = document.getElementById(this.triggerId);
    if (revertBool(this.revert, !!Number(this.triggerElement.dataset.isEnabled)) && !this.isOpen) {
      this.open();
    }

    if (revertBool(this.revert, !Number(this.triggerElement.dataset.isEnabled)) && this.isOpen) {
      this.close();
    }
  }
}
