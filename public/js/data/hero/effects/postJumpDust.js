import { HERO_EFFECTS, HERO_IMG } from '../../../constants.js';
import {
  getDimensions,
  getFrames,
  getPosition,
  getEffectPosition,
} from '../helpers.js';

const name = HERO_EFFECTS.postJumpDust;

const img = 'url("' + HERO_IMG.postJumpDust + '")';

const dimensions = getDimensions({ height: 16, width: 16 });

const dustPosition = { left: getPosition(0, 0), right: getPosition(0, 0) };

const position = getEffectPosition(dustPosition);

const frames = getFrames({
  dimensions,
  number: 4,
  left: 'scaleX(-1)',
  right: 'none',
});

export default {
  name,
  img,
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
  position,
};
