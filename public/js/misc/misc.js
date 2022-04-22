import { createElement } from '../helpers.js';

export default class Misc {
  constructor({ states }) {
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.initial;
    this.frameCounter = 0;
    this.element = null;
    this.hero = {};
    this.collision = false;
    this.isLocked = false;
    this.isCollecting = false;
    this.isCollected = false;
    this.vector = { x: 0, y: 0 };
    this.isOpen = false;
    this.collisionObj = {
      top: false,
      bottom: false,
      right: false,
      left: false,
    };
  }

  updateFrame() {
    const frame = this.state.frames[this.frameCounter];

    this.element.style.backgroundImage = this.state.img;
    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundPositionX = frame.backgroundPositionX;
    this.element.style.left = this.position.x + 'px';
    this.element.style.top = this.position.y + 'px';
  }

  update() {
    if (this.frameCounter >= this.state.frames.length) {
      if (this.isCollecting) return (this.isCollected = true);
      this.frameCounter = 0;
    }

    this.updateFrame();
    this.frameCounter++;
  }


  destroy() {
    this.element.remove();
  }

  loop() {}

  open() {}

  initialize({ position, hero, name, blocks, miscs, id, triggerId, isOpen }) {
    this.position = position;
    this.vertices = this.state.getVertices(this.position);
    this.collision = this.state.collision;
    this.miscs = miscs;
    this.name = name;
    this.hero = hero;
    this.blocks = blocks;
    this.triggerId = triggerId;

    this.element = createElement({
      position: this.position,
      dimensions: this.state.dimensions,
      img: this.state.img,
      id,
    });

    document.getElementById('miscs').appendChild(this.element);

    if (isOpen) {
      this.open();
      this.revert = true;
    }
  }
}
