import Misc from "../misc.js";
import STATES from "./states/index.js";

export default class Spikes extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {};

}