import { HERO_EFFECTS, HERO_IMG, HERO_JUMP_SPEED } from '../../constants.js';
import { getFrames, getEffectPosition } from '../../helpers.js';

const name = HERO_EFFECTS.preJumpDust;

const img = 'url("' + HERO_IMG.preJumpDust + '")';

const dimensions = { height: 32, width: 32 };

const imgPosition = {
  left: { x: 0, y: HERO_JUMP_SPEED },
  right: { x: 0, y: HERO_JUMP_SPEED },
};

const getPosition = getEffectPosition(imgPosition);

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
  getPosition,
  dimensions,
};
