import {
    MOVABLE_STATES,
    MOVABLE_IMG,
  } from '../../../constants.js';
  import { createVertices, getVertices } from '../../../helpers.js';
  
  const name = MOVABLE_STATES.initial;
  
  const img = 'url("' + MOVABLE_IMG.stone.initial + '")';
  
  const dimensions = { height: 32, width: 32 };
  
  const vertices = createVertices(dimensions);
  
  const frames = [];
  
  export default {
    name,
    img,
    getVertices: getVertices(vertices),
    frames,
    dimensions: {
      height: dimensions.height + 'px',
      width: dimensions.width + 'px',
    },
  };
  