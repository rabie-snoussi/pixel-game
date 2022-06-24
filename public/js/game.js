import Controls from './control/control.js';
import Hero from './hero/hero.js';
import Map from './map/map.js';
import Monster from './monster/index.js';
import Misc from './misc/index.js';
import Hud from './hud/hud.js';
import {
  GAME_LOOP_INTERVAL,
  ANIMATION_INTERVAL,
  GRID_DIMENSIONS,
  GRID,
  SCREEN_LIMITS,
} from './constants.js';
import store from './store.js';

class Game {
  constructor() {
    this.monsters = null;
    this.hero = null;
    this.map = null;
    this.controls = null;
    this.hud = null;
    this.miscs = [];
    this.isPaused = false;
    this.isGameOver = false;
    this.mapNumber = 0;
  }

  start() {
    this.loop();
    this.hud.resetMenu();
  }

  pause() {
    this.isPaused = true;
    this.hud.pause();
  }

  resume() {
    this.isPaused = false;
    this.hud.resume();
  }

  quit() {}

  restart() {}

  clear() {}

  gameOver() {
    this.isGameOver = true;
    this.hud.gameOver();
    this.controls.setMenuControls();
  }

  hideGrid() {
    document.getElementById('grid').remove();

    store.setData({ grid: false });
    store.saveInLocalStorage();
  }

  applySettings() {
    if (store.data.hurtbox) this.showHurtbox();
    if (store.data.hitbox) this.showHitbox();
  }

  applyGameSettings() {
    if (store.data.grid) this.showGrid();
    this.mapNumber = store.data.map;
  }

  showGrid() {
    const gridElement = document.createElement('div');
    gridElement.setAttribute('id', 'grid');

    GRID.forEach((row, i) => {
      row.forEach((item, j) => {
        const gridItemElement = document.createElement('div');

        gridItemElement.style.position = 'absolute';
        gridItemElement.style.boxSizing = 'border-box';
        gridItemElement.style.height = GRID_DIMENSIONS.height + 'px';
        gridItemElement.style.width = GRID_DIMENSIONS.width + 'px';
        gridItemElement.style.left = item.x + 'px';
        gridItemElement.style.top = item.y + 'px';
        gridItemElement.style.border = '0.25px solid white';
        gridItemElement.style.textAlign = 'center';
        gridItemElement.style.color = 'white';
        gridItemElement.style.fontSize = '4px';
        gridItemElement.style.opacity = '0.25';
        gridItemElement.style.lineHeight = '16px';
        gridItemElement.style.zIndex = 99;

        gridItemElement.addEventListener('mouseenter', () => {
          gridItemElement.style.background = 'rgba(0, 0, 0, 0.25)';
          gridItemElement.innerHTML = i + ' x ' + j;
          gridItemElement.style.opacity = '1';
        });

        gridItemElement.addEventListener('mouseleave', () => {
          gridItemElement.style.background = 'transparent';
          gridItemElement.innerHTML = '';
          gridItemElement.style.opacity = '0.25';
        });

        gridElement.appendChild(gridItemElement);
      });
    });

    document.getElementById('game').appendChild(gridElement);

    store.setData({ grid: true });
    store.saveInLocalStorage();
  }

  showHurtbox() {
    this.hero.showHurtbox();
    this.monsters.map((monster) => monster.showHurtbox());

    store.setData({ hurtbox: true });
    store.saveInLocalStorage();
  }

  hideHurtbox() {
    this.hero.hideHurtbox();
    this.monsters.map((monster) => monster.hideHurtbox());

    store.setData({ hurtbox: false });
    store.saveInLocalStorage();
  }

  showHitbox() {
    this.hero.showHitbox();
    this.monsters.map((monster) => monster.showHitbox());
    this.miscs.map((misc) => misc.showHitbox());

    store.setData({ hitbox: true });
    store.saveInLocalStorage();
  }

  hideHitbox() {
    this.hero.hideHitbox();
    this.monsters.map((monster) => monster.hideHitbox());
    this.miscs.map((misc) => misc.hideHitbox());

    store.setData({ hitbox: false });
    store.saveInLocalStorage();
  }

  godMode() {
    this.controls.godMode();
    this.hero.godMode();
  }

  loop() {
    setInterval(() => {
      if (this.isPaused) return;

      if (this.hero.isDead && !this.isGameOver) {
        this.gameOver();
      }

      this.miscs.forEach((item, i) => {
        item.loop?.();
        if (item.isCollected) {
          item.destroy();
          this.miscs.splice(i, 1);
        }
      });

      this.monsters.forEach((monster, i) => {
        monster.loop();
        if (monster.isDead) {
          monster.destroy();
          this.monsters.splice(i, 1);
        }
      });

      if (this.isGameOver) return;

      this.hero.loop();

      if (this.hero.hurtbox.vertices.b.x == SCREEN_LIMITS.x.end) {
        this.nexMap();
      }

      this.hud.loop();
    }, GAME_LOOP_INTERVAL);
  }

  nexMap() {
    document.getElementById('enemies').innerHTML = '';
    document.getElementById('miscs').innerHTML = '';
    document.getElementById('materials').innerHTML = '';

    this.hero.destroy();

    this.miscs = [];

    this.mapNumber++;

    this.map.initialize(this.mapNumber);

    this.map.miscs.map((item) => {
      const itemObj = new Misc[item.name]();
      itemObj.initialize({
        hero: this.hero,
        blocks: this.map.blocksVertices,
        miscs: this.miscs,
        ...item,
      });
      this.miscs.push(itemObj);
    });

    this.monsters = this.map.enemies.map((item) => {
      const monster = new Monster[item.name]();
      monster.initialize({
        position: item.position,
        blocksVertices: this.map.blocksVertices,
        hero: this.hero,
      });
      return monster;
    });

    this.hero.initialize({
      position: this.map.heroPosition,
      blocksVertices: this.map.blocksVertices,
      miscs: this.miscs,
    });

    this.applySettings();
    store.setData({ map: this.mapNumber });
    store.saveInLocalStorage();
  }

  animate() {
    setInterval(() => {
      this.hud.update();

      if (this.isPaused) return;

      this.hero.update();

      this.map.update();

      this.miscs.forEach((item) => {
        item.update();
      });

      this.monsters.forEach((monster) => {
        monster.update();
      });
    }, ANIMATION_INTERVAL);
  }

  initialize() {
    this.hero = new Hero();
    this.map = new Map();
    this.controls = new Controls();
    this.hud = new Hud();

    store.loadSavedData();
    store.saveInLocalStorage();
    this.applyGameSettings();

    this.controls.initialize({ hero: this.hero, game: this, hud: this.hud });
    this.controls.setMenuControls();
    this.map.initialize(this.mapNumber);

    this.map.miscs.map((item) => {
      const itemObj = new Misc[item.name]();
      itemObj.initialize({
        hero: this.hero,
        blocks: this.map.blocksVertices,
        miscs: this.miscs,
        ...item,
      });
      this.miscs.push(itemObj);
    });

    this.monsters = this.map.enemies.map((item) => {
      const monster = new Monster[item.name]();
      monster.initialize({
        position: item.position,
        blocksVertices: this.map.blocksVertices,
        hero: this.hero,
      });
      return monster;
    });

    this.hero.initialize({
      position: this.map.heroPosition,
      blocksVertices: this.map.blocksVertices,
      miscs: this.miscs,
    });

    this.hud.initialize({
      hero: this.hero,
      game: this,
      controls: this.controls,
    });

    this.hud.start();

    this.animate();

    this.applySettings();
  }
}

const game = new Game();

game.initialize();
// game.godMode();
