import Controls from './control/control.js';
import Hero from './hero/hero.js';
import Map from './map/map.js';
import Monster from './monster/data/index.js';
import Collectible from './collectible/data/index.js';
import Trigger from './trigger/data/index.js';
import Trigged from './trigged/data/index.js';
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

  constructor() {
    this.triggeds = [];
  }

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

      this.collectibles.forEach((item, i) => {
        item.loop();
        if (item.isCollected) {
          item.destroy();
          this.collectibles.splice(i, 1);
        }
      });

      this.triggers.forEach((item, i) => {
        item.loop();
      });

      this.triggeds.forEach((item) => {
        item.loop();
      });

      this.#monsters.forEach((monster, i) => {
        monster.loop();
        if (monster.isDead) {
          monster.destroy();
          this.#monsters.splice(i, 1);
        }
      });
    }, GAME_LOOP_INTERVAL);
  }

  animate() {
    setInterval(() => {
      this.#hero.update();

      this.#map.update();

      this.collectibles.forEach((item) => {
        item.update();
      });

      this.triggeds.forEach((item) => {
        item.update();
      });

      this.#monsters.forEach((monster) => {
        monster.update();
      });
    }, ANIMATION_INTERVAL);
  }

  initialize() {
    const root = document.querySelector(':root');

    root.style.setProperty('--screen-width', SCREEN_LIMITS.x.end + 'px');
    root.style.setProperty('--screen-height', SCREEN_LIMITS.y.end + 'px');

    this.#controls.initialize(this.#hero);
    this.#map.initialize(0);

    this.collectibles = this.#map.collectibles.map((item) => {
      const collectible = new Collectible[item.name]();
      collectible.initialize({ position: item.position, hero: this.#hero });
      return collectible;
    });

    this.triggers = this.#map
      .triggers
      .map((item) => {
        const trigger = new Trigger[item.name]();
        trigger.initialize({ position: item.position, hero: this.#hero });
        item?.trigged?.map((item) => {
          const trigged = new Trigged[item.name]();
          trigged.initialize({ position: item.position, hero: this.#hero, trigger: trigger, isOpen: item.isOpen });
          this.triggeds.push(trigged);
        })

        return trigger;
      });

    this.#monsters = this.#map.enemies.map((item) => {
      const monster = new Monster[item.name]();
      monster.initialize({
        position: item.position,
        blocksVerteces: this.#map.blocksVerteces,
        hero: this.#hero,
      });
      return monster;
    });

    this.#hero.initialize({
      position: this.#map.heroPosition,
      blocksVerteces: this.#map.blocksVerteces,
      items: [...this.triggers, ...this.triggeds],
    });
    this.animate();
    this.loop();
  }
}

const game = new Game();

game.initialize();
// game.godMode();
// game.showGrid();
game.showHurtbox();
game.showHitbox();
