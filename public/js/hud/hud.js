import { createElement, getOptions, createMenuElements } from '../helpers.js';
import { heart, coin, arrow, font } from './items/index.js';
import { GRID, MENU_TITLES, MENU_OPTIONS, ON, OFF } from '../constants.js';
import store from '../store.js';

export default class Hud {
  constructor() {
    this.hero = null;
    this.game = null;
    this.controls = null;
    this.heartsElement = document.getElementById('hearts');
    this.coins = null;
    this.arrowElement = null;
    this.frameCounter = 0;
    this.options = null;
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

  gridToggle() {
    if (store.data.grid) return this.game.hideGrid();
    this.game.showGrid();
  }

  hurtboxToggle() {
    if (store.data.hurtbox) return this.game.hideHurtbox();
    this.game.showHurtbox();
  }

  hitboxToggle() {
    if (store.data.hitbox) return this.game.hideHitbox();
    this.game.showHitbox();
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
    this.controls.setMenuControls();

    this.insertText({
      text: title,
      position: titlePosition,
      id: 'menu-title',
    });

    this.options = getOptions({ options, position: optionsPosition });
    this.options.map((option) => this.createOption(option));

    this.initializeArrow();
  }

  start() {
    const title = MENU_TITLES.plateformGame;
    const titlePosition = GRID[17][9];
    const optionsPosition = GRID[21][13];

    const options = [
      {
        name: MENU_OPTIONS.start,
        action: this.game.start.bind(this.game),
      },
    ];

    this.initializeMenu({ title, titlePosition, options, optionsPosition });
  }

  pause() {
    const title = MENU_TITLES.gamePaused;
    const titlePosition = GRID[19][6];
    const optionsPosition = GRID[21][10];

    const options = [
      {
        name: MENU_OPTIONS.resume,
        action: this.game.resume.bind(this.game),
      },
      {
        name: MENU_OPTIONS.restart,
        action: this.game.restart.bind(this.game),
      },
      {
        name: MENU_OPTIONS.grid,
        action: this.gridToggle.bind(this),
      },
      {
        name: MENU_OPTIONS.hurtbox,
        action: this.hurtboxToggle.bind(this),
      },
      {
        name: MENU_OPTIONS.hitbox,
        action: this.hitboxToggle.bind(this),
      },
      {
        name: MENU_OPTIONS.quit,
        action: this.game.quit.bind(this.game),
      },
    ];

    this.initializeMenu({ title, titlePosition, options, optionsPosition });
  }

  gameOver() {
    const title = MENU_TITLES.gameOver;
    const titlePosition = GRID[20][9];
    const optionsPosition = GRID[21][13];

    const options = [
      {
        name: MENU_OPTIONS.restart,
        action: this.game.restart.bind(this.game),
      },
      {
        name: MENU_OPTIONS.quit,
        action: this.game.quit.bind(this.game),
      },
    ];

    this.initializeMenu({ title, titlePosition, options, optionsPosition });
  }

  resetMenu() {
    document.getElementById('menu').remove();
    this.controls.setGameControls();

    this.arrowElement = null;
    this.cursor = 0;
    this.options = null;
  }

  resume() {
    this.resetMenu();
  }

  quit() {}

  restart() {}

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
