import Trigged from '../../trigged.js';

const revertTrigger = (revert, isEnabled) => {
    if(revert) return !isEnabled;
    return isEnabled;
};

export default class WoodSlab extends Trigged {
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
    if (revertTrigger(this.revert, this.trigger.isEnabled) && !this.isOpen) {
      this.open();
    }

    if (revertTrigger(this.revert, !this.trigger.isEnabled) && this.isOpen) {
      this.close();
    }
  }
}
