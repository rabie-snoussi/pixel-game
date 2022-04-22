import {
    MISC_STATES,
    MISC_IMG,
  } from '../../../constants.js';
  import { createVertices, getVertices } from '../../../helpers.js';
  
  const name = MISC_STATES.initial;
  
  const img = 'url("' + MISC_IMG.stone.initial + '")';
  
  const dimensions = { height: 32, width: 32 };
  
  const vertices = createVertices(dimensions);
  
  const frames = [];
  
  export default {
    name,
    img,
    collision: true,
    getVertices: getVertices(vertices),
    frames,
    dimensions: {
      height: dimensions.height + 'px',
      width: dimensions.width + 'px',
    },
  };
  