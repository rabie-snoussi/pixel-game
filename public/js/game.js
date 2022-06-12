import Controls from './control/control.js';
import Hero from './hero/hero.js';
import Map from './map/map.js';
import Monster from './monster/index.js';
import Misc from './misc/index.js';
import {
  GAME_LOOP_INTERVAL,
  ANIMATION_INTERVAL,
  GRID_DIMENSIONS,
  GRID,
} from './constants.js';
import Hud from './hud/hud.js';

class Game {
  constructor() {
    this.triggereds = [];
    this.monsters = null;
    this.hero = null;
    this.map = null;
    this.controls = null;
    this.hud = null;
    this.miscs = [];
    this.isPaused = false;
    this.isGameOver = false;
  }

  pause() {
    this.isPaused = true;
    this.hud.pause();
    this.controls.setMenuControls();
  }

  resume() {
    this.isPaused = false;
    this.hud.resume();
    this.controls.setHeroControls();
  }

  quit() {}

  restart() {}

  gameOver() {
    this.isGameOver = true;
    this.hud.gameOver();
    this.controls.setMenuControls();
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
  }

  showHurtbox() {
    this.hero.showHurtbox();
    this.monsters.map((monster) => monster.showHurtbox());
  }

  showHitbox() {
    this.hero.showHitbox();
    this.monsters.map((monster) => monster.showHitbox());
  }

  godMode() {
    this.controls.godMode();
    this.hero.godMode();
  }

  loop() {
    setInterval(() => {
      if (this.isPaused) return;

      if(this.hero.isDead && !this.isGameOver) {
        this.gameOver();
      }

      this.hero.loop();

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

      this.hud.loop();
    }, GAME_LOOP_INTERVAL);
  }

  animate() {
    setInterval(() => {
      this.hud.update();

      if (this.isPaused) return;

      this.hero.update();

      this.map.update();

      this.miscs.forEach((item) => {
        item.update?.();
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

    this.controls.initialize({ hero: this.hero, game: this, hud: this.hud });
    this.map.initialize(0);

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
        miscs: this.triggereds,
      });
      return monster;
    });

    this.hero.initialize({
      position: this.map.heroPosition,
      blocksVertices: this.map.blocksVertices,
      miscs: this.miscs,
    });

    this.hud.initialize({ hero: this.hero, game: this });

    this.animate();
    this.loop();
  }
}

const game = new Game();

game.initialize();
// game.godMode();
game.showGrid();
game.showHurtbox();
game.showHitbox();
