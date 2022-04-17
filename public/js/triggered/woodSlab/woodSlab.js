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
  }

  close() {
    this.isOpen = false;
    this.element.style.display = 'block';
    this.vertices = this.state.getVertices(this.position);
  }

  loop() {
    if (revertBool(this.revert, this.trigger.isEnabled) && !this.isOpen) {
      this.open();
    }

    if (revertBool(this.revert, !this.trigger.isEnabled) && this.isOpen) {
      this.close();
    }
  }
}
