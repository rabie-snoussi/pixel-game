import { isColliding, createElement } from '../helpers.js';

export default class Collectible {
  constructor({ states }) {
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.initial;
    this.frameCounter = 0;
    this.element = null;
    this.hero = {};
    this.isCollecting = false;
    this.isCollected = false;
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

  collect() {}

  destroy() {
    this.element.remove();
  }

  loop() {
    if (
      isColliding(this.vertices, this.hero.hurtbox.vertices) &&
      !this.isCollecting
    ) {
      this.isCollecting = true;
      this.collect();
    }
  }

  initialize({ position, hero }) {
    this.position = position;
    this.vertices = this.state.getVertices(this.position);

    this.element = createElement({
      dimensions: this.state.dimensions,
      img: this.state.img,
      position: this.position,
    });

    document.getElementById('misc').appendChild(this.element);

    this.hero = hero;
  }
}
