export default class Triggered {
  constructor({ states }) {
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.closed;
    this.element = document.createElement('div');
    this.hero = {};
    this.isEnabled = false;
    this.frameCounter = 0;
    this.trigger = {};
    this.revert = false;
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
      this.frameCounter = 0;
    }

    this.updateFrame();
    this.frameCounter++;
  }

  loop() {
  }

  close() {}

  open() {}


  initialize({ position, hero, trigger, isOpen }) {
    this.trigger = trigger;

    this.position.x = position.x;
    this.position.y = position.y;
    this.vertices = this.state.getVertices(this.position);

    this.element.style.position = 'absolute';
    this.element.style.backgroundSize = 'cover';
    this.element.style.imageRendering = 'pixelated';

    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;
    this.element.style.left = this.position.x + 'px';
    this.element.style.top = this.position.y + 'px';

    document.getElementById('misc').appendChild(this.element);

    this.hero = hero;

    if(isOpen) {
      this.open();
      this.revert = true;
    }
  }
}
