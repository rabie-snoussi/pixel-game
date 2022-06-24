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
    this.miscs = null;
    this.isPaused = false;
    this.isGameOver = false;
    this.mapNumber = 0;
    this.hearts = 5;
    this.coins = 0;
  }

  start() {
    this.loop();
    this.hud.resetMenu();
    this.controls.setGameControls(this.hero);
  }

  pause() {
    this.isPaused = true;
    this.hud.pauseMenu(this);
    this.controls.setMenuControls(this.hud, this);
  }

  resume() {
    this.isPaused = false;
    this.hud.resetMenu();
    this.controls.setGameControls(this.hero);
  }

  quit() {}

  restart() {}

  clear() {}

  gameOver() {
    this.isGameOver = true;
    this.hud.gameOverMenu(this);
    this.controls.setMenuControls(this.hud, this);
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
    this.hearts = store.data.hearts;
    this.coins = store.data.coins;
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

      this.miscs.forEach((misc, i) => {
        misc.loop?.({
          hero: this.hero,
          blocks: this.map.blocks,
          miscs: this.miscs,
        });
        if (misc.isCollected) {
          misc.destroy();
          this.miscs.splice(i, 1);
        }
      });

      this.monsters.forEach((monster, i) => {
        monster.loop({
          blocks: this.map.blocks,
          hero: this.hero,
        });
        if (monster.isDead) {
          monster.destroy();
          this.monsters.splice(i, 1);
        }
      });

      if (this.isGameOver) return;

      this.hero.loop({
        blocks: this.map.blocks,
        miscs: this.miscs,
      });

      this.hud.updateHearts(this.hero.hearts);
      this.hud.updateCoins(this.hero.coins);

      if (this.hero.hurtbox.vertices.b.x == SCREEN_LIMITS.x.end) {
        this.nextMap();
      }
    }, GAME_LOOP_INTERVAL);
  }

  nextMap() {
    document.getElementById('monsters').innerHTML = '';
    document.getElementById('miscs').innerHTML = '';
    document.getElementById('materials').innerHTML = '';

    this.hearts = this.hero.hearts;
    this.coins = this.hero.coins;

    this.hero.destroy();

    this.map = new Map();
    this.hero = new Hero({ hearts: this.hearts, coins: this.coins });

    this.mapNumber++;

    this.map.generate(this.mapNumber);

    this.miscs = this.map.miscs.map((item) => {
      const misc = new Misc[item.name]();
      misc.spawn(item);
      return misc;
    });

    this.monsters = this.map.monsters.map((item) => {
      const monster = new Monster[item.name]();
      monster.spawn({ position: item.position });
      return monster;
    });

    this.hero.spawn({ position: this.map.hero.position });

    this.controls.setGameControls(this.hero);

    this.applySettings();
    store.setData({
      map: this.mapNumber,
      hearts: this.hearts,
      coins: this.coins,
    });
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
    store.loadSavedData();
    store.saveInLocalStorage();
    this.applyGameSettings();

    this.hero = new Hero({ hearts: this.hearts, coins: this.coins });
    this.map = new Map();
    this.controls = new Controls();
    this.hud = new Hud();

    this.hud.initialize({ hearts: this.hearts, coins: this.coins });
    this.controls.initialize();
    this.controls.setMenuControls(this.hud, this);
    this.map.generate(this.mapNumber);

    this.miscs = this.map.miscs.map((item) => {
      const misc = new Misc[item.name]();
      misc.spawn(item);
      return misc;
    });

    this.monsters = this.map.monsters.map((item) => {
      const monster = new Monster[item.name]();
      monster.spawn({ position: item.position });
      return monster;
    });

    this.hero.spawn({
      position: this.map.hero.position,
    });

    this.hud.startMenu(this);
    this.animate();
    this.applySettings();
  }
}

const game = new Game();

game.initialize();
// game.godMode();
