import { isColliding } from "../helpers.js";

export default class Collectible {
  constructor({ states }) {
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.initial;
    this.frameCounter = 0;
    this.element = document.createElement('div');
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
        if(this.isCollecting) return this.isCollected = true;
      this.frameCounter = 0;
    }

    this.updateFrame();
    this.frameCounter++;
  }

  collect () {}

  destroy() {
    this.element.remove();
  }

  loop() {
      if(isColliding(this.vertices, this.hero.hurtbox.verteces) && !this.isCollecting) {
        this.isCollecting = true;
        this.collect();
      }
  }

  initialize({ position, hero }) {
    this.position = position;
    this.vertices = this.state.getVertices(this.position);

    this.element.style.position = 'absolute';
    this.element.style.backgroundSize = 'cover';
    this.element.style.imageRendering = 'pixelated';

    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;
    this.element.style.left = position.x + 'px';
    this.element.style.top = position.y + 'px';

    document.getElementById('collectibles').appendChild(this.element);

    this.position.x = position.x;
    this.position.y = position.y;

    this.hero = hero;
  }
}
