import collectibles from './collectible/index.js';
import triggers from './trigger/index.js';
import triggereds from './triggered/index.js';
import movables from './movable/index.js';

export default {
    ...collectibles,
    ...triggers,
    ...triggereds,
    ...movables,
};