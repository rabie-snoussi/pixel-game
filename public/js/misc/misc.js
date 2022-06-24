import { addBoxEffect, createElement } from '../helpers.js';

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
    this.hitbox = {
      element: null,
      vertices: {},
    };
  }

  updateFrame() {
    const frame = this.state.frames[this.frameCounter];

    this.element.style.backgroundImage = this.state.img;
    this.element.style.height = this.state.dimensions.height + 'px';
    this.element.style.width = this.state.dimensions.width + 'px';
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

  showHitbox() {
    if (this.state.hitbox) {
      this.hitbox.element = document.createElement('div');

      addBoxEffect({
        element: this.hitbox.element,
        borderColor: 'yellow',
        bgColor: 'rgba(255,255,0,0.25)',
      });

      this.hitbox.element.style.width = this.element.style.width;
      this.hitbox.element.style.height = this.element.style.height;
      this.hitbox.element.style.top = this.element.style.top;
      this.hitbox.element.style.left = this.element.style.left;

      document.getElementById('miscs').appendChild(this.hitbox.element);
    }
  }

  hideHitbox() {
    if (this.hitbox.element) {
      this.hitbox.element.remove();
      this.hitbox.element = null;
    }
  }

  initialize({
    position,
    hero,
    name,
    blocks,
    miscs,
    id,
    triggerId,
    isOpen,
    rotation,
  }) {
    this.position = { ...position };
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
      rotation,
    });

    document.getElementById('miscs').appendChild(this.element);

    if (isOpen) {
      this.open();
      this.revert = true;
    }
  }
}
