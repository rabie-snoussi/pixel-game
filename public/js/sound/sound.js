import store from '../store.js';

class Sound {
  constructor() {
    this._music = null;
    this._gameOver = null;
    this._gameWon = null;
    this._pause = null;
    this._unPause = null;
    this._attack = null;
    this._jump = null;
    this._doubleJump = null;
    this._hit = null;
    this._death = null;
    this._postJump = null;
    this._goblinAttack = null;
    this._goblinHit = null;
    this._goblinDeath = null;
    this._coin = null;
    this._door = null;
    this._stone = null;
    this._button = null;
    this._lever = null;
    this._apple = null;
    this._menuMove = null;
    this._menuSelect = null;
  }

  playMusic() {
    this._music.play();
  }

  pauseMusic() {
    this._music.pause();
  }

  stopMusic() {
    this._music.stop();
  }

  attack() {
    if (!store.settings.sfx) return;
    this._attack.play();
  }

  jump() {
    if (!store.settings.sfx) return;
    this._jump.play();
  }

  doubleJump() {
    if (!store.settings.sfx) return;
    this._doubleJump.play();
  }

  postJump() {
    if (!store.settings.sfx) return;
    this._postJump.play();
  }

  hit() {
    if (!store.settings.sfx) return;
    this._hit.play();
  }

  death() {
    if (!store.settings.sfx) return;
    this._death.play();
  }

  goblinAttack() {
    if (!store.settings.sfx) return;
    this._goblinAttack.play();
  }

  goblinHit() {
    if (!store.settings.sfx) return;
    this._goblinHit.play();
  }

  goblinDeath() {
    if (!store.settings.sfx) return;
    this._goblinDeath.play();
  }

  coin() {
    if (!store.settings.sfx) return;
    this._coin.play();
  }

  stone() {
    if (!store.settings.sfx) return;
    this._stone.play();
  }

  door() {
    if (!store.settings.sfx) return;
    this._door.play();
  }

  button() {
    if (!store.settings.sfx) return;
    this._button.play();
  }

  lever() {
    if (!store.settings.sfx) return;
    this._lever.play();
  }

  apple() {
    if (!store.settings.sfx) return;
    this._apple.play();
  }

  menuMove() {
    if (!store.settings.sfx) return;
    this._menuMove.play();
  }

  menuSelect() {
    if (!store.settings.sfx) return;
    this._menuSelect.play();
  }

  menuPause() {
    if (!store.settings.sfx) return;
    this._pause.play();
  }

  menuUnPause() {
    if (!store.settings.sfx) return;
    this._unPause.play();
  }

  playGameOver() {
    this._gameOver.play();
  }

  stopGameOver() {
    this._gameOver.stop();
  }

  playGameWon() {
    this._gameWon.play();
  }

  stopGameWon() {
    this._gameWon.stop();
  }

  initialize() {
    this._music = new Howl({
      src: ['./assets/sounds/music.ogg'],
      loop: true,
      volume: 0.5,
    });

    this._gameOver = new Howl({
      src: ['./assets/sounds/game_over.ogg'],
    });

    this._gameWon = new Howl({
      src: ['./assets/sounds/game_won.ogg'],
    });

    this._pause = new Howl({
      src: ['./assets/sounds/menu/pause.wav'],
    });

    this._unPause = new Howl({
      src: ['./assets/sounds/menu/unpause.wav'],
    });

    this._attack = new Howl({
      src: ['./assets/sounds/hero/attack.wav'],
    });

    this._jump = new Howl({
      src: ['./assets/sounds/hero/jump.wav'],
    });

    this._doubleJump = new Howl({
      src: ['./assets/sounds/hero/double_jump.wav'],
    });

    this._postJump = new Howl({
      src: ['./assets/sounds/hero/post_jump.wav'],
    });

    this._hit = new Howl({
      src: ['./assets/sounds/hero/hit.wav'],
    });

    this._death = new Howl({
      src: ['./assets/sounds/hero/death.ogg'],
      volume: 5,
    });

    this._goblinAttack = new Howl({
      src: ['./assets/sounds/goblin/attack.wav'],
    });

    this._goblinHit = new Howl({
      src: ['./assets/sounds/goblin/hit.wav'],
    });

    this._goblinDeath = new Howl({
      src: ['./assets/sounds/goblin/death.wav'],
    });

    this._coin = new Howl({
      src: ['./assets/sounds/miscs/coin.wav'],
    });

    this._stone = new Howl({
      src: ['./assets/sounds/miscs/stone.wav'],
    });

    this._door = new Howl({
      src: ['./assets/sounds/miscs/door.wav'],
    });

    this._button = new Howl({
      src: ['./assets/sounds/miscs/button.wav'],
    });

    this._lever = new Howl({
      src: ['./assets/sounds/miscs/lever.wav'],
    });

    this._apple = new Howl({
      src: ['./assets/sounds/miscs/apple.ogg'],
    });

    this._menuMove = new Howl({
      src: ['./assets/sounds/menu/move.wav'],
    });

    this._menuSelect = new Howl({
      src: ['./assets/sounds/menu/select.wav'],
    });
  }
}

const sound = new Sound();
sound.initialize();

export default sound;
