import { createElement } from '../helpers.js';
import heart from './items/heart.js';
import coin from './items/coin.js';
import font from './items/font.js';
import { GRID } from '../constants.js';

export default class Hud {
  constructor() {
    this.hero = null;
    this.heartsElement = document.getElementById('hearts');
    this.coins = null;
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

  updateCoinsNumber({ text, position }) {
    document.getElementById('coins-number').innerHTML = '';
    let newPosition = position;

    text.forEach((character) => {
      const fontElement = createElement({
        ...font,
        position: newPosition,
        backgroundPosition: font.getCharBgPosition(character),
      });

      newPosition.x = newPosition.x + font.dimensions.width;
      document.getElementById('coins-number').appendChild(fontElement);
    });
  }

  loop() {
    this.updateHearts(this.hero.hearts);

    if (this.coins !== this.hero.coins) {
      this.updateCoinsNumber({
        text: [...this.hero.coins.toString()],
        position: { ...GRID[3][4] },
      });
      this.coins = this.hero.coins;
    }
  }

  initialize({ hero }) {
    this.hero = hero;
    this.createHearts(this.hero.hearts);

    const coinElement = createElement({ ...coin, position: GRID[1][4] });
    document.getElementById('coins').appendChild(coinElement);
  }
}
