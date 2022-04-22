import { isColliding } from "../../helpers.js";
import Misc from "../misc.js";
import STATES from "./states/index.js";

export default class HealthPotion extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {};

  loop() {
    if (
      isColliding(this.vertices, this.hero.hurtbox.vertices) &&
      !this.isCollecting
    ) {
      this.isCollecting = true;
      this.collect();
    }
  }

  collect() {
    this.hero.hearts++;
    this.isCollected = true;
  }
}