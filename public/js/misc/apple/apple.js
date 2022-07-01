import { isColliding } from "../../helpers.js";
import sound from "../../sound/sound.js";
import Misc from "../misc.js";
import STATES from "./states/index.js";

export default class Apple extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {};

  loop({ hero }) {
    if (
      isColliding(this.vertices, hero.hurtbox.vertices) &&
      !this.isCollecting
    ) {
      this.isCollecting = true;
      this.collect(hero);
    }
  }

  collect(hero) {
    hero.hearts++;
    this.isCollected = true;

    sound.apple();
  }
}