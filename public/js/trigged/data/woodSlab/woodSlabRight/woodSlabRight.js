import WoodSlab from "../woodSlab.js";
import STATES from './states/index.js';

export default class WoodSlabRight extends WoodSlab {
    constructor() {
        super({ states: STATES });
    }
}