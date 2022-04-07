import Controls from './control/control.js';
import Hero from './hero/hero.js';
import Map from './map/map.js';
import Monster from './monster/monsters/index.js';
import {
  SCREEN_LIMITS,
  GAME_LOOP_INTERVAL,
  ANIMATION_INTERVAL,
  GRID_DIMENSIONS,
  GRID,
} from './constants.js';

class Game {
  // Private Properties

  #controls = new Controls();
  #map = new Map();
  #hero = new Hero();
  #monsters;

  constructor() {}

  // Public Methods

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
        gridItemElement.style.border = '0.5px solid white';
        gridItemElement.style.textAlign = 'center';
        gridItemElement.style.color = 'white';
        gridItemElement.style.fontSize = '8px';
        gridItemElement.style.opacity = '0.25';
        gridItemElement.style.lineHeight = '27px';
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
    this.#hero.showHurtbox();
    this.#monsters.map((monster) => monster.showHurtbox());
  }

  showHitbox() {
    this.#hero.showHitbox();
    this.#monsters.map((monster) => monster.showHitbox());
  }

  godMode() {
    this.#controls.godMode();
    this.#hero.godMode();
  }

  loop() {
    setInterval(() => {
      this.#hero.loop();
      this.#monsters.forEach((monster) => {
        monster.loop();
      });
    }, GAME_LOOP_INTERVAL);
  }

  animate() {
    setInterval(() => {
      this.#hero.animate();

      this.#map.animate();

      this.#monsters.forEach((monster, i) => {
        monster.animate();
        if (monster.isDead) {
          monster.destroy();
          this.#monsters.splice(i, 1);
        }
      });
    }, ANIMATION_INTERVAL);
  }

  initialize() {
    const root = document.querySelector(':root');

    root.style.setProperty('--screen-width', SCREEN_LIMITS.x.end + 'px');
    root.style.setProperty('--screen-height', SCREEN_LIMITS.y.end + 'px');

    this.#controls.initialize(this.#hero);
    this.#map.initialize(0);

    this.#monsters = this.#map.getEnemies().map((item) => {
      const monster = new Monster[item.name]();
      monster.initialize({
        position: item.position,
        blocksVerteces: this.#map.blocksVerteces,
        hero: this.#hero,
      });
      return monster;
    });

    this.#hero.initialize({
      position: this.#map.getHeroPosition(),
      blocksVerteces: this.#map.blocksVerteces,
    });
    this.animate();
    this.loop();
  }
}

const game = new Game();

game.initialize();
game.godMode();
// game.showGrid();
game.showHurtbox();
game.showHitbox();
