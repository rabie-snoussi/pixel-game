import enemiesClass from './enemies/index.js';

export default class Enemy {
  #enemies;
  constructor() {}

  getHurtbox() {
    return this.#enemies.map(({ _hurtbox: { element, ...rest } }) => rest);
  }

  showHurtbox() {
    this.#enemies.map((enemy) => enemy.showHurtbox());
  }

  initialize({ enemies, blocksVerteces, heroHurtbox }) {
    this.#enemies = enemies.map((item) => {
      const enemy = new enemiesClass[item.name]();
      enemy.initialize({
        position: item.position,
        blocksVerteces,
        heroHurtbox,
      });
      return enemy;
    });
  }
}
