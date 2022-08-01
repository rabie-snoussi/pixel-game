import Controls from './control/control.js';
import Hero from './hero/hero.js';
import Map from './map/map.js';
import Monster from './monster/index.js';
import Misc from './misc/index.js';
import Hud from './hud/hud.js';
import sound from './sound/sound.js';
import {
  GAME_LOOP_INTERVAL,
  ANIMATION_INTERVAL,
  GRID_DIMENSIONS,
  GRID,
  INITIAL_DATA,
  SCREEN_LIMITS,
} from './constants.js';
import store from './store.js';
import { isColliding } from './helpers.js';

class Game {
  constructor() {
    this.monsters = null;
    this.hero = null;
    this.map = null;
    this.controls = null;
    this.hud = null;
    this.miscs = null;
    this.isGameStarted = false;
    this.isPaused = false;
    this.isGameOver = false;
    this.mapNumber = 0;
    this.hearts = null;
    this.coins = null;
  }

  start() {
    this.isGameStarted = true;
    this.hud.resetMenu();
    this.controls.setGameControls(this.hero);

    if (store.settings.music) sound.playMusic();
  }

  pause() {
    this.isPaused = true;
    this.hud.pauseMenu(this);
    this.controls.setMenuControls(this.hud, this);

    sound.menuPause();
    if (store.settings.music) sound.pauseMusic();
  }

  resume() {
    this.isPaused = false;
    this.hud.resetMenu();
    this.controls.setGameControls(this.hero);

    sound.menuUnPause();
    if (store.settings.music) sound.playMusic();
  }

  quit() {
    if (store.settings.music && this.isGameOver) sound.stopGameOver();

    this.isPaused = false;

    store.setData({ ...INITIAL_DATA });
    store.saveData();
    this.applyData();

    this.destroyMap();
    this.loadMap(this.mapNumber);
    this.applySettings();

    this.hud.resetMenu();
    this.hud.startMenu(this);
    this.hud.updateHearts(this.hearts);
    this.hud.updateCoins(this.coins);
    this.hud.updateLevel({
      mapNumber: this.mapNumber,
      mapTotal: this.map.maps.length - 1,
    });

    this.isGameOver = false;
    this.isGameStarted = false;

    sound.stopMusic();
  }

  restart() {
    if (store.settings.music && this.isGameOver) sound.stopGameOver();
    if (store.settings.music) sound.playMusic();

    this.isPaused = false;
    this.isGameOver = false;

    store.loadSavedData();
    store.saveData();
    this.applyData();

    this.destroyMap();
    this.loadMap(this.mapNumber);
    this.applySettings();

    this.hud.resetMenu();
    this.hud.updateHearts(this.hearts);
    this.hud.updateCoins(this.coins);
    this.controls.setGameControls(this.hero);
  }

  clear() {}

  gameOver() {
    this.isGameOver = true;
    this.hud.gameOverMenu(this);
    this.controls.setMenuControls(this.hud, this);

    if (store.settings.music) sound.stopMusic();
    if (store.settings.music) sound.playGameOver();
  }

  hideGrid() {
    document.getElementById('grid').remove();

    store.setSettings({ grid: false });
    store.saveSettings();
  }

  applySettings() {
    const gridElement = document.getElementById('grid');

    if (store.settings.grid && !gridElement) this.showGrid();
    if (store.settings.hurtbox) this.showHurtbox();
    if (store.settings.hitbox) this.showHitbox();
    this.sfx = store.settings.sfx;
  }

  applyData() {
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

    store.setSettings({ grid: true });
    store.saveSettings();
  }

  showHurtbox() {
    this.hero.showHurtbox();
    this.monsters.map((monster) => monster.showHurtbox());

    store.setSettings({ hurtbox: true });
    store.saveSettings();
  }

  hideHurtbox() {
    this.hero.hideHurtbox();
    this.monsters.map((monster) => monster.hideHurtbox());

    store.setSettings({ hurtbox: false });
    store.saveSettings();
  }

  showHitbox() {
    this.hero.showHitbox();
    this.monsters.map((monster) => monster.showHitbox());
    this.miscs.map((misc) => misc.showHitbox());

    store.setSettings({ hitbox: true });
    store.saveSettings();
  }

  hideHitbox() {
    this.hero.hideHitbox();
    this.monsters.map((monster) => monster.hideHitbox());
    this.miscs.map((misc) => misc.hideHitbox());

    store.setSettings({ hitbox: false });
    store.saveSettings();
  }

  playMusic() {
    store.setSettings({ music: true });
    store.saveSettings();
  }

  stopMusic() {
    store.setSettings({ music: false });
    store.saveSettings();
  }

  godMode() {
    this.controls.godMode();
    this.hero.godMode();
  }

  destroyMap() {
    this.hero.destroy();
    this.monsters.forEach((monster) => monster.destroy());

    document.getElementById('monsters').innerHTML = '';
    document.getElementById('miscs').innerHTML = '';
    document.getElementById('materials').innerHTML = '';

    document.getElementById('bg_2').style.backgroundImage = '';
    document.getElementById('fg_0').style.backgroundImage = '';
    document.getElementById('fg_1').style.backgroundImage = '';
  }

  loadMap(mapNumber) {
    this.map = new Map();
    this.hero = new Hero({ hearts: this.hearts });

    const { hero, monsters, miscs } = this.map.generate(mapNumber);

    this.miscs = miscs.map((item) => {
      const misc = new Misc[item.name]();
      misc.spawn(item);
      return misc;
    });

    this.monsters = monsters.map((item) => {
      const monster = new Monster[item.name]();
      monster.spawn({ position: item.position });
      return monster;
    });

    this.hero.spawn({ position: hero.position, vector: hero.vector });
  }

  nextLevel() {
    this.mapNumber++;
    this.hearts = this.hero.hearts;

    this.destroyMap();
    this.loadMap(this.mapNumber);
    this.applySettings();

    this.controls.setGameControls(this.hero);
    this.hud.updateLevel({
      mapNumber: this.mapNumber,
      mapTotal: this.map.maps.length - 1,
    });

    store.setData({
      map: this.mapNumber,
      hearts: this.hearts,
      coins: this.coins,
    });
    store.saveData();
  }

  loop() {
    setInterval(() => {
      if (this.isPaused || !this.isGameStarted) return;

      if (this.hero.isDead && !this.isGameOver) {
        this.gameOver();
      }

      this.miscs.forEach((misc, i) => {
        const filteredMiscs = this.miscs.filter((item) => item !== misc);
        misc.loop?.({
          hero: this.hero,
          blocks: this.map.blocks,
          miscs: filteredMiscs,
          game: this,
          monsters: this.monsters,
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
          miscs: this.miscs,
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
      this.hud.updateCoins(this.coins);

      if (isColliding(this.hero.hurtbox.vertices, this.map.winningBlock)) {
        this.nextLevel();
        return;
      }

      if (this.hero.hurtbox.vertices.c.y >= SCREEN_LIMITS.y.end) {
        this.hero.die();
      }
    }, GAME_LOOP_INTERVAL);
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
    store.saveData();
    this.applyData();

    this.loadMap(this.mapNumber);
    this.animate();
    this.loop();

    store.loadSavedSettings();
    store.saveSettings();
    this.applySettings();

    this.hud = new Hud();
    this.hud.initialize({
      hearts: this.hearts,
      coins: this.coins,
      mapNumber: this.mapNumber,
      mapTotal: this.map.maps.length - 1,
    });

    if (this.mapNumber > 0) this.hud.continueMenu(this);
    else this.hud.startMenu(this);

    this.controls = new Controls();
    this.controls.initialize();
    this.controls.setMenuControls(this.hud, this);
  }
}

const game = new Game();

game.initialize();
// game.godMode();
