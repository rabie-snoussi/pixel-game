<p align="center">
 <img src="./preview/icon.png" alt="project_icon">
</p>

<h2 align="center">Platform game</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/rabie-snoussi/platform-game.svg)](https://github.com/rabie-snoussi/platform-game/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/rabie-snoussi/platform-game.svg)](https://github.com/rabie-snoussi/platform-game/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [The Game](#game)
- [Acknowledgments](#acknowledgement)

<br>

## 🧐 About <a name = "about"></a>

A platform game built using **JavaScript, HTML and CSS** without game engine or animation library.

The objective of the game is to complete all levels with the highest number possible of coins.

<br>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### <u>**Prerequisites**</u>

- Node v10+
- Npm v5.6+

<br>

## 🚀 Deployment <a name="deployment"></a>

First, we need to install the dependencies, then we can run the project by the following commands:

```
npm install

npm start
```

The game will be running at: http://localhost:5000/

<img src="./preview/preview.gif" alt="preview" />

<sup>_Preview_</sup>

<br>

## 🎮 The Game <a name="game"></a>

### <u>**Controls**</u>

Bellow is the list of keys used to play the game:

| Keys                                                                                                                                                           | Actions                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| <img width=64px height=64px src="./preview/arrow_keys.jpg" alt="arrow_keys">                                                                                   | Movements / Choose option |
| <img width=64px height=64px src="./preview/spacebar_key.jpg" alt="spacebar_key">                                                                               | Jump / Select option      |
| <div style="display: flex; justify-content: center;" width=64px height=64px><img width=32px height=32px src="./preview/escape_key.jpg" alt="escape_key"></div> | Pause / Unpause           |

### <u>**Menu**</u>

The menu will have multiple options:

- **Start:** Start the game.
- **Continue:** Continue where you left off.
- **Resume:** Unpause.
- **Restart:** Restart the current level.
- **Music (on/off):** Enable/disable music.
- **SFX (on/off):** Enable/disable sound effects.
- **Grid (on/off):** Show/hide grid.
- **Hurtbox (on/off):** Show/hide hurtboxs.
- **Hitbox (on/off):** Show/hide hitboxs.
- **Quit:** Quit the game.

<br>

<img src="./preview/menu.gif" alt="menu">

<sup>_Menu options_</sup>

### <u>**Collisions**</u>

To detect collisions, we use **4 positions (A, B, C & D)** that will define a shape _(vertices)_.

<br>

<img style="border: 2px white solid;" src="./preview/block_vertices.jpeg" alt="block_vertices">

<sup>_Block vertices_</sup>

<br>

<img src="./preview/hero_vertices.jpg" alt="hero_vertices">

<sup>_Hero vertices (hurtbox)_</sup>

<br>

<img src="./preview/hero_attack_vertices.jpeg" alt="hero_attack_vertices">

<sup>_Hero attack vertices (hitbox)_</sup>

<br>

<img src="./preview/goblin_vertices.jpg" alt="goblin_vertices">

<sup>_Goblin vertices (hurtbox)_</sup>

<br>

<img src="./preview/goblin_attack_vertices.jpg" alt="goblin_attack_vertices">

<sup>_Goblin attack vertices (hitbox)_</sup>

We also need a position, that indicates where a certain point will be in the next screen update _(vector)_, it will be used to make the hero move like shown in the picture bellow, the white arrow represents the vector.

<br>

<img src="./preview/hero_vector.gif" alt="hero_vector">

<sup>_Hero moving to the right_</sup>

With vectors, we calculate the future position of hero's hurtbox, if the future position goes inside a block, we detect a collision and the hero won't move further, this way, the hero will never go inside a block, otherwise if there's no blocks, the hero will move freely into that position.

<br>

<img src="./preview/hero_collision.gif" alt="hero_collision">

<sup>_Hero colliding with block_</sup>

<br>

<img src="./preview/hero_no_collision.gif" alt="hero_no_collision">

<sup>_Hero running without collisions_</sup>

Attacks work almost the same but without vectors, we check instead, if the hitbox goes inside enemy's hurtbox, that's when we detect a collision.

<br>

<img src="./preview/hero_attack.gif" alt="hero_attack">

<sup>_Hero attacking_</sup>

<br>

<img src="./preview/goblin_attack.gif" alt="goblin_attack">

<sup>_Gobling attacking_</sup>

### <u>**Gravity**</u>

Gravity in game works with acceleration like in real life, while the hero is in the air, we apply an incremental force that will pull him down harder each time untill he touches the ground.

<br>

<img src="./preview/gravity.gif" alt="gravity">

<sup>_Gravity_</sup>

### <u>**Save**</u>

The progress of the game and it's settings will be saved in localeStorage, this way the user can continue to play from where he left off, the data will be encrypted to prevent users from cheating.

<br>

<img src="./preview/localstorage.png" alt="localstorage">

<sup>_LocalStorage_</sup>

<br>

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

Special thanks to everyone who provided assets to make this possible, namely:

- [O_lobster](https://twitter.com/sir_shazam) (2D arts).
- [Avgvsta](https://opengameart.org/users/avgvsta) (Music).
- [Artisticdude](https://opengameart.org/users/artisticdude) (Sound effects).
- [Juhani Junkala](https://juhanijunkala.com/) (Sound effects).
- [@Shades](https://soundcloud.com/noshades) (Sound effects).
