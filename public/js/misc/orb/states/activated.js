import {
    MISC_STATES,
    MISC_IMG,
  } from '../../../constants.js';
  import { createVertices, getFrames, getVertices } from '../../../helpers.js';
  
  const name = MISC_STATES.activated;
  
  const img = 'url("' + MISC_IMG.orb.activated + '")';
  
  const dimensions = { height: 40, width: 24 };
  
  const vertices = createVertices(dimensions);
  
  const frames = getFrames({ dimensions, number: 3 });
  
  export default {
    name,
    img,
    getVertices: getVertices(vertices),
    frames,
    dimensions,
  };
  