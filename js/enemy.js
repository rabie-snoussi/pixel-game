import enemiesClass from './enemies/index.js';

export default class Enemy {
  #enemies;
  constructor() {}

  getEnemies() {
      return this.#enemies;
  }

  showHurtbox() {
    this.#enemies.map((enemy) => enemy.showHurtbox());
  }

  initialize(enemies, blocks) {

    this.#enemies = enemies.map((item) => {
      const enemy = new enemiesClass[item.name]();
      enemy.initialize(item.position, blocks);
      return enemy;
    });
  }
}
