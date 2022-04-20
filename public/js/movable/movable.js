import { createElement } from '../helpers.js';

export default class Movable {
  constructor({ states }) {
    this.element = null;
    this.states = states;
    this.position = { x: 0, y: 0 };
    this.vertices = {};
    this.state = this.states.initial;
    this.element = null;
    this.hero = {};
    this.collision = null;
    this.movable = true;
    this.collision = true;
    this.vector = { x: 0, y: 0 };
    this.collisionObj = {
      top: false,
      bottom: false,
      right: false,
      left: false,
    };
    this.blocks = [];
    this.items = [];
  }

  loop() {}

  update() {}

  initialize({ hero, position, blocks, items, name }) {
    this.hero = hero;
    this.position = position;
    this.vertices = this.state.getVertices(this.position);
    this.blocks = blocks;
    this.items = items;
    this.name = name;

    this.element = createElement({
      position,
      dimensions: this.state.dimensions,
      img: this.state.img,
    });

    document.getElementById('misc').appendChild(this.element);
  }
}
