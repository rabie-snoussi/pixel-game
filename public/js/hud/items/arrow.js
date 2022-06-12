import { getFrames } from '../../helpers.js';
import { HUD_IMG } from '../../constants.js';

const img = 'url("' + HUD_IMG.arrow + '")';

const dimensions = { height: 16, width: 16 };

const frames = getFrames({ dimensions, number: 5 });

export default {
  img,
  frames,
  dimensions,
};
