import { createElement, getMenu } from '../helpers.js';
import { heart, coin, arrow, font } from './items/index.js';
import { GRID, MENU_TITLES, MENU_OPTIONS } from '../constants.js';

export default class Hud {
  constructor() {
    this.hero = null;
    this.game = null;
    this.controls = null;
    this.heartsElement = document.getElementById('hearts');
    this.coins = null;
    this.arrowElement = null;
    this.frameCounter = 0;
    this.menu = null;
    this.cursor = 0;
  }

  createHearts() {
    for (let i = 0; i < this.hero.hearts * 2; i += 2) {
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

  updateHearts() {
    const heartsLength = this.heartsElement.children.length;

    if (this.hero.hearts < heartsLength) {
      const heartsToRemove = heartsLength - this.hero.hearts;
      this.removeHearts(heartsToRemove);
    }

    if (this.hero.hearts > heartsLength) {
      const heartsToAdd = this.hero.hearts - heartsLength;
      this.addHearts(heartsToAdd);
    }
  }

  insertText({ text, position, id }) {
    let newPosition = { ...position };

    [...text].forEach((character) => {
      const fontElement = createElement({
        ...font,
        position: newPosition,
        backgroundPosition: font.getCharBgPosition(character),
      });

      newPosition.x = newPosition.x + font.dimensions.width;
      document.getElementById(id).appendChild(fontElement);
    });
  }

  updateCoinsNumber({ text, position }) {
    document.getElementById('coins-number').innerHTML = '';
    this.insertText({ text, position, id: 'coins-number' });
  }

  start() {
    document.getElementById('menu').style.display = 'block';

    this.controls.setMenuControls();

    this.insertText({
      text: MENU_TITLES.plateformGame,
      position: GRID[17][9],
      id: 'menu',
    });

    const options = [
      { text: MENU_OPTIONS.start, action: this.game.start.bind(this.game) },
    ];

    this.menu = getMenu({ options, gridPos: { x: 21, y: 13 } });
    this.menu.map(({ text, position }) =>
      this.insertText({ text, position, id: 'menu' })
    );

    this.cursor = 0;
    const arrowPosition = this.menu[this.cursor].arrowPosition;

    this.arrowElement = createElement({ ...arrow, position: arrowPosition });
    document.getElementById('menu').appendChild(this.arrowElement);
  }

  pause() {
    document.getElementById('menu').style.display = 'block';

    this.controls.setMenuControls();

    this.insertText({
      text: MENU_TITLES.gamePaused,
      position: GRID[19][9],
      id: 'menu',
    });

    const options = [
      { text: MENU_OPTIONS.resume, action: this.game.resume.bind(this.game) },
      { text: MENU_OPTIONS.restart, action: this.game.restart.bind(this.game) },
      { text: MENU_OPTIONS.quit, action: this.game.quit.bind(this.game) },
    ];

    this.menu = getMenu({ options, gridPos: { x: 21, y: 13 } });
    this.menu.map(({ text, position }) =>
      this.insertText({ text, position, id: 'menu' })
    );

    this.cursor = 0;
    const arrowPosition = this.menu[this.cursor].arrowPosition;

    this.arrowElement = createElement({ ...arrow, position: arrowPosition });
    document.getElementById('menu').appendChild(this.arrowElement);
  }

  gameOver() {
    document.getElementById('menu').style.display = 'block';

    this.controls.setMenuControls();

    this.insertText({
      text: MENU_TITLES.gameOver,
      position: GRID[20][9],
      id: 'menu',
    });

    const options = [
      { text: MENU_OPTIONS.restart, action: this.game.restart.bind(this.game) },
      { text: MENU_OPTIONS.quit, action: this.game.quit.bind(this.game) },
    ];

    this.menu = getMenu({ options, gridPos: { x: 21, y: 13 } });
    this.menu.map(({ text, position }) =>
      this.insertText({ text, position, id: 'menu' })
    );

    this.cursor = 0;
    const arrowPosition = this.menu[this.cursor].arrowPosition;

    this.arrowElement = createElement({ ...arrow, position: arrowPosition });
    document.getElementById('menu').appendChild(this.arrowElement);
  }

  resetMenu() {
    document.getElementById('menu').innerHTML = '';
    document.getElementById('menu').style.display = 'none';

    this.controls.setGameControls();

    this.arrowElement = null;
    this.cursor = 0;
    this.menu = null;
  }

  resume() {
    this.resetMenu();
  }

  quit() {}

  restart() {}

  nextOption() {
    this.cursor = (this.cursor + 1) % this.menu.length;
  }

  previousOption() {
    this.cursor = (this.cursor - 1 + this.menu.length) % this.menu.length;
  }

  selectOption() {
    this.menu[this.cursor].action();
  }

  updateArrow() {
    if (!this.arrowElement) return;

    if (this.frameCounter >= arrow.frames.length) this.frameCounter = 0;

    const frame = arrow.frames[this.frameCounter];

    this.arrowElement.style.backgroundImage = arrow.img;
    this.arrowElement.style.height = arrow.dimensions.height + 'px';
    this.arrowElement.style.width = arrow.dimensions.width + 'px';
    this.arrowElement.style.backgroundPositionX = frame.backgroundPositionX;

    this.arrowElement.style.left =
      this.menu[this.cursor].arrowPosition.x + 'px';
    this.arrowElement.style.top = this.menu[this.cursor].arrowPosition.y + 'px';

    this.frameCounter++;
  }

  update() {
    this.updateArrow();
  }

  updateCoins() {
    if (this.coins !== this.hero.coins) {
      this.updateCoinsNumber({
        text: this.hero.coins.toString(),
        position: GRID[3][4],
      });
      this.coins = this.hero.coins;
    }
  }

  loop() {
    this.updateHearts();
    this.updateCoins();
  }

  initialize({ hero, game, controls }) {
    this.hero = hero;
    this.game = game;
    this.controls = controls;

    this.createHearts();

    const coinElement = createElement({ ...coin, position: GRID[1][4] });
    document.getElementById('coins').appendChild(coinElement);

    this.updateCoins();
  }
}
