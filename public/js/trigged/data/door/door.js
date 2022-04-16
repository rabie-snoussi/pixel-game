import Trigged from '../../trigged.js';
import STATES from './states/index.js';

const revertTrigger = (revert, isEnabled) => {
  if(revert) return !isEnabled;
  return isEnabled;
};

export default class Door extends Trigged {
  constructor() {
    super({ states: STATES });

    this.isOpen = false;
    this.isClosed = true;
    this.isLocked = false;
  }

  open() {
    if (this.isLocked) return;
    if (this.state.name === this.states.opening.name) return;
    this.isLocked = true;

    this.isClosed = false;
    this.frameCounter = 0;
    this.state = this.states.opening;
    this.vertices = {};
  }

  close() {
    if (this.isLocked) return;
    if (this.state.name === this.states.closing.name) return;
    this.isLocked = true;

    this.isOpen = false;
    this.frameCounter = 0;
    this.state = this.states.closing;

    this.vertices = this.state.getVertices(this.position);
  }

  update() {
    if (this.isOpen) return;
    if (this.frameCounter >= this.state.frames.length) {
      this.frameCounter = 0;
    }

    this.updateFrame();
    this.frameCounter++;
  }

  loop() {
    if (revertTrigger(this.revert, this.trigger.isEnabled)) {
      this.open();
    }

    if (revertTrigger(this.revert, !this.trigger.isEnabled)) {
      if (this.states.opening.name === this.state.name) {
        this.close();
      }
    }

    if (
      this.state.name === this.states.opening.name &&
      this.frameCounter >= this.state.frames.length &&
      !this.isOpen
    ) {
      this.isLocked = false;
      this.isOpen = true;
    }

    if (
      this.state.name === this.states.closing.name &&
      this.frameCounter >= this.state.frames.length &&
      !this.isClosed
    ) {
      this.isLocked = false;
      this.isClosed = true;
      this.state = this.states.closed;
    }
  }
}
