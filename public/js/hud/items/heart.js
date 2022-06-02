import { HUD_IMG } from '../../constants.js';

const img = 'url("' + HUD_IMG.heart + '")';

const dimensions = { height: 32, width: 32 };

export default {
  name,
  img,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
