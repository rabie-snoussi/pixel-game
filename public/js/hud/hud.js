import { createElement, getOptions, createMenuElements } from '../helpers.js';
import { heart, coin, arrow, font } from './items/index.js';
import { GRID, MENU_TITLES, MENU_OPTIONS, ON, OFF } from '../constants.js';
import store from '../store.js';

export default class Hud {
  constructor() {
    this.hero = null;
    this.game = null;
    this.heartsElement = document.getElementById('hearts');
    this.coins = null;
    this.arrowElement = null;
    this.frameCounter = 0;
    this.options = null;
    this.cursor = 0;
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

  updateHearts(hearts) {
    const heartsLength = this.heartsElement.children.length;

    if (hearts < heartsLength) {
      const heartsToRemove = heartsLength - hearts;
      this.removeHearts(heartsToRemove);
    }

    if (hearts > heartsLength) {
      const heartsToAdd = hearts - heartsLength;
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

  createOption({ id, position, name }) {
    const optionElement = document.createElement('div');
    optionElement.id = id;

    const menuElement = document.getElementById('menu-options');
    menuElement.appendChild(optionElement);

    const flag = store.data[name];

    if (flag === undefined)
      return this.insertText({ id, text: name, position });

    const text = flag ? `${name} ${ON}` : `${name} ${OFF}`;

    this.insertText({ text, position, id });
  }

  initializeArrow() {
    this.cursor = 0;
    const optionPosition = this.options[this.cursor].position;
    const distance = GRID[1][0];
    const arrowPosition = {
      x: optionPosition.x - distance.x,
      y: optionPosition.y - distance.y,
    };

    this.arrowElement = createElement({ ...arrow, position: arrowPosition });
    document.getElementById('menu-arrow').appendChild(this.arrowElement);
  }

  initializeMenu({ title, titlePosition, options, optionsPosition }) {
    createMenuElements();

    this.insertText({
      text: title,
      position: titlePosition,
      id: 'menu-title',
    });

    this.options = getOptions({ options, position: optionsPosition });
    this.options.map((option) => this.createOption(option));

    this.initializeArrow();
  }

  gridToggle(game) {
    if (store.data.grid) return game.hideGrid();
    game.showGrid();
  }

  hurtboxToggle(game) {
    if (store.data.hurtbox) return game.hideHurtbox();
    game.showHurtbox();
  }

  hitboxToggle(game) {
    if (store.data.hitbox) return game.hideHitbox();
    game.showHitbox();
  }

  startMenu(game) {
    const title = MENU_TITLES.plateformGame;
    const titlePosition = GRID[17][9];
    const optionsPosition = GRID[21][13];

    const options = [
      {
        name: MENU_OPTIONS.start,
        action: game.start.bind(game),
      },
    ];

    this.initializeMenu({ title, titlePosition, options, optionsPosition });
  }

  pauseMenu(game) {
    const title = MENU_TITLES.gamePaused;
    const titlePosition = GRID[19][6];
    const optionsPosition = GRID[21][10];

    const options = [
      {
        name: MENU_OPTIONS.resume,
        action: game.resume.bind(game),
      },
      {
        name: MENU_OPTIONS.restart,
        action: game.restart.bind(game),
      },
      {
        name: MENU_OPTIONS.grid,
        action: () => this.gridToggle(game),
      },
      {
        name: MENU_OPTIONS.hurtbox,
        action: () => this.hurtboxToggle(game),
      },
      {
        name: MENU_OPTIONS.hitbox,
        action: () => this.hitboxToggle(game),
      },
      {
        name: MENU_OPTIONS.quit,
        action: game.quit.bind(game),
      },
    ];

    this.initializeMenu({ title, titlePosition, options, optionsPosition });
  }

  gameOverMenu(game) {
    const title = MENU_TITLES.gameOver;
    const titlePosition = GRID[20][9];
    const optionsPosition = GRID[21][13];

    const options = [
      {
        name: MENU_OPTIONS.restart,
        action: game.restart.bind(game),
      },
      {
        name: MENU_OPTIONS.quit,
        action: game.quit.bind(game),
      },
    ];

    this.initializeMenu({ title, titlePosition, options, optionsPosition });
  }

  resetMenu() {
    document.getElementById('menu').remove();

    this.arrowElement = null;
    this.cursor = 0;
    this.options = null;
  }

  nextOption() {
    this.cursor = (this.cursor + 1) % this.options.length;
  }

  previousOption() {
    this.cursor = (this.cursor - 1 + this.options.length) % this.options.length;
  }

  selectOption() {
    const { id, name, position, action } = this.options[this.cursor];
    action();

    const flag = store.data[name];

    if (flag === undefined) return;

    document.getElementById(id).innerHTML = '';

    const text = flag ? `${name} on` : `${name} off`;
    this.insertText({ text, position, id });
  }

  updateArrow() {
    if (!this.arrowElement) return;

    if (this.frameCounter >= arrow.frames.length) this.frameCounter = 0;

    const frame = arrow.frames[this.frameCounter];

    this.arrowElement.style.backgroundPositionX = frame.backgroundPositionX;
    this.arrowElement.style.visibility = 'visible';

    const optionPosition = this.options[this.cursor].position;
    const distance = GRID[1][0];
    const arrowPosition = {
      x: optionPosition.x - distance.x,
      y: optionPosition.y - distance.y,
    };

    this.arrowElement.style.left = arrowPosition.x + 'px';
    this.arrowElement.style.top = arrowPosition.y + 'px';

    this.frameCounter++;
  }

  update() {
    this.updateArrow();
  }

  updateCoins(coins) {
    if (this.coins !== coins) {
      this.updateCoinsNumber({
        text: coins.toString(),
        position: GRID[3][4],
      });
      this.coins = coins;
    }
  }

  initialize({ hearts, coins }) {
    const coinElement = createElement({ ...coin, position: GRID[1][4] });
    document.getElementById('coins').appendChild(coinElement);

    this.updateHearts(hearts);
    this.updateCoins(coins);
  }
}
