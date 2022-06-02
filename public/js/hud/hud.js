import { createElement } from '../helpers.js';
import heart from './items/heart.js';
import { GRID } from '../constants.js';

export default class Hud {
  constructor() {
    this.hero = null;
    this.heartsElement = document.getElementById('hearts');
  }

  createHearts(heroHearts) {
    for (let i = 0; i < heroHearts * 2; i += 2) {
      const position = GRID[1 + i][1];
      const heartElement = createElement({ ...heart, position });
      document.getElementById('hearts').appendChild(heartElement);
    }
  }

  removeHearts(num) {
    for (let i = 0; i < num; i++) {
      this.heartsElement.lastElementChild.remove();
    }
  }

  addHearts(num) {
    const heartsLength = this.heartsElement.children.length;

    for (let i = heartsLength * 2; i < heartsLength * 2 + num * 2; i += 2) {
      const position = GRID[1 + i][1];
      const heartElement = createElement({ ...heart, position });
      hearts.appendChild(heartElement);
    }
  }

  updateHearts(heroHearts) {
    const heartsLength = this.heartsElement.children.length;

    if (heroHearts < heartsLength) {
      const heartsToRemove = heartsLength - heroHearts;
      this.removeHearts(heartsToRemove);
    }

    if (heroHearts > heartsLength) {
      const heartsToAdd = heroHearts - heartsLength;
      this.addHearts(heartsToAdd);
    }
  }

  loop() {
    this.updateHearts(this.hero.hearts);
  }

  initialize({ hero }) {
    this.hero = hero;
    this.createHearts(this.hero.hearts);
  }
}
