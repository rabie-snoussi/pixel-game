import { SCREEN_LIMITS, GRID, SECRET } from './constants.js';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const revertBool = (revert, bool) => {
  if (revert) return !bool;
  return bool;
};

export const addBoxEffect = ({ element, borderColor, bgColor }) => {
  if (!element) return;

  element.style.position = 'absolute';
  element.style.border = `1px solid ${borderColor}`;
  element.style.boxSizing = 'border-box';
  element.style.background = bgColor;
};

export const addPosition =
  ({ right, left }) =>
  (position) => {
    const rightPosition = {
      x: position.x + right.x,
      y: position.y + right.y,
    };

    const leftPosition = {
      x: position.x + left.x,
      y: position.y + left.y,
    };

    return { right: rightPosition, left: leftPosition };
  };

export const getBox =
  ({ a, b, c, d }) =>
  (currentPosition) => {
    const vertices = {
      a: { x: currentPosition.x + a.x, y: currentPosition.y + a.y },
      b: { x: currentPosition.x + b.x, y: currentPosition.y + b.y },
      c: { x: currentPosition.x + c.x, y: currentPosition.y + c.y },
      d: { x: currentPosition.x + d.x, y: currentPosition.y + d.y },
    };

    const position = {
      top: vertices.a.y + 'px',
      left: vertices.a.x + 'px',
    };

    const dimensions = {
      width: vertices.b.x - vertices.a.x + 'px',
      height: vertices.c.y - vertices.a.y + 'px',
    };

    return {
      vertices,
      position,
      dimensions,
    };
  };

export const createVertices = (
  { height, width },
  initial = { x: 0, y: 0 }
) => ({
  a: { x: initial.x, y: initial.y },
  b: { x: initial.x + width, y: initial.y },
  c: { x: initial.x + width, y: initial.y + height },
  d: { x: initial.x, y: initial.y + height },
});

export const getVertices =
  (vertices) =>
  (position = { x: 0, y: 0 }) => ({
    a: {
      x: vertices.a.x + position.x,
      y: vertices.a.y + position.y,
    },
    b: {
      x: vertices.b.x + position.x,
      y: vertices.b.y + position.y,
    },
    c: {
      x: vertices.c.x + position.x,
      y: vertices.c.y + position.y,
    },
    d: {
      x: vertices.d.x + position.x,
      y: vertices.d.y + position.y,
    },
  });

export const getReverseFrames = ({ dimensions, number }) => {
  const frames = Array.apply(null, Array(number)).map((item, i) => ({
    backgroundPositionX: getBackgroundPositionX(dimensions, number - 1 - i),
  }));

  return frames;
};

export const getBackgroundPositionX = (dimensions, i) =>
  dimensions.width * -i + 'px';

export const getFrames = ({ dimensions, number, left, right }) => {
  if (!left && !right)
    return Array.apply(null, Array(number)).map((item, i) => ({
      backgroundPositionX: getBackgroundPositionX(dimensions, i),
    }));

  const rightFrames = Array.apply(null, Array(number)).map((item, i) => ({
    transform: right,
    backgroundPositionX: getBackgroundPositionX(dimensions, i),
  }));

  const leftFrames = Array.apply(null, Array(number)).map((item, i) => ({
    transform: left,
    backgroundPositionX: getBackgroundPositionX(dimensions, i),
  }));

  return { right: rightFrames, left: leftFrames };
};

export const getEffectPosition = (position) => (currentPosition) => ({
  right: {
    top: currentPosition.y + position.right.y + 'px',
    left: currentPosition.x + position.right.x + 'px',
  },
  left: {
    top: currentPosition.y + position.left.y + 'px',
    left: currentPosition.x + position.left.x + 'px',
  },
});

export const getHitbox = (dimensions, initialPositions) => {
  const rightVertices = initialPositions.right.map((item, i) =>
    createVertices(dimensions[i], initialPositions.right[i])
  );
  const leftVertices = initialPositions.left.map((item, i) =>
    createVertices(dimensions[i], initialPositions.left[i])
  );

  const rightHitboxs = rightVertices.map((item, i) => getBox(rightVertices[i]));
  const leftHitboxs = leftVertices.map((item, i) => getBox(leftVertices[i]));

  return { right: rightHitboxs, left: leftHitboxs };
};

export const isVerteces = (vertices) => {
  if (!vertices) return false;
  if (!vertices.a || !vertices.b || !vertices.c || !vertices.d) return false;
  if (
    !_.isNil(vertices.a.x) &&
    !_.isNil(vertices.a.y) &&
    !_.isNil(vertices.b.x) &&
    !_.isNil(vertices.b.y) &&
    !_.isNil(vertices.c.x) &&
    !_.isNil(vertices.c.y) &&
    !_.isNil(vertices.d.x) &&
    !_.isNil(vertices.d.y)
  )
    return true;
};

export const isCollidingRight = (vertices1, vertices2, distance = 0) => {
  if (!isVerteces(vertices1) || !isVerteces(vertices2)) return false;

  return (
    vertices1.b.x + distance >= vertices2.a.x &&
    ((vertices1.b.y === vertices2.a.y && vertices1.c.y === vertices2.d.y) ||
      (vertices1.b.y > vertices2.a.y && vertices1.b.y < vertices2.d.y) ||
      (vertices1.c.y > vertices2.a.y && vertices1.c.y < vertices2.d.y) ||
      (vertices2.a.y > vertices1.b.y && vertices2.a.y < vertices1.c.y) ||
      (vertices2.d.y > vertices1.b.y && vertices2.d.y < vertices1.c.y)) &&
    vertices1.b.x < vertices2.b.x
  );
};

export const isCollidingLeft = (vertices1, vertices2, distance = 0) => {
  if (!isVerteces(vertices1) || !isVerteces(vertices2)) return false;

  return (
    vertices1.a.x - distance <= vertices2.b.x &&
    ((vertices1.a.y === vertices2.b.y && vertices1.d.y === vertices2.c.y) ||
      (vertices1.a.y > vertices2.b.y && vertices1.a.y < vertices2.c.y) ||
      (vertices1.d.y > vertices2.b.y && vertices1.d.y < vertices2.c.y) ||
      (vertices2.b.y > vertices1.a.y && vertices2.b.y < vertices1.d.y) ||
      (vertices2.c.y > vertices1.a.y && vertices2.c.y < vertices1.d.y)) &&
    vertices1.a.x > vertices2.a.x
  );
};

export const isCollidingTop = (vertices1, vertices2, distance = 0) => {
  if (!isVerteces(vertices1) || !isVerteces(vertices2)) return false;

  return (
    vertices1.a.y - distance <= vertices2.c.y &&
    ((vertices1.a.x === vertices2.d.x && vertices1.b.x === vertices2.c.x) ||
      (vertices1.a.x > vertices2.d.x && vertices1.a.x < vertices2.c.x) ||
      (vertices1.b.x > vertices2.d.x && vertices1.b.x < vertices2.c.x) ||
      (vertices2.c.x > vertices1.a.x && vertices2.c.x < vertices1.b.x) ||
      (vertices2.d.x > vertices1.a.x && vertices2.d.x < vertices1.b.x)) &&
    vertices1.a.y > vertices2.a.y
  );
};

export const isCollidingBottom = (vertices1, vertices2, distance = 0) => {
  if (!isVerteces(vertices1) || !isVerteces(vertices2)) return false;

  return (
    vertices1.c.y + distance >= vertices2.a.y &&
    ((vertices1.c.x === vertices2.b.x && vertices1.d.x === vertices2.a.x) ||
      (vertices1.c.x > vertices2.a.x && vertices1.c.x < vertices2.b.x) ||
      (vertices1.d.x > vertices2.a.x && vertices1.d.x < vertices2.b.x) ||
      (vertices2.a.x > vertices1.d.x && vertices2.a.x < vertices1.c.x) ||
      (vertices2.b.x > vertices1.d.x && vertices2.b.x < vertices1.c.x)) &&
    vertices1.c.y < vertices2.c.y
  );
};

const isPositionInVertices = ({
  position,
  vertices,
  vector = { x: 0, y: 0 },
}) => {
  return (
    position.x + vector.x >= vertices.a.x &&
    position.y + vector.y >= vertices.a.y &&
    position.x + vector.x <= vertices.c.x &&
    position.y + vector.y <= vertices.c.y
  );
};

const isPositionStrictlyInVertices = ({
  position,
  vertices,
  vector = { x: 0, y: 0 },
}) => {
  return (
    position.x + vector.x > vertices.a.x &&
    position.y + vector.y > vertices.a.y &&
    position.x + vector.x < vertices.c.x &&
    position.y + vector.y < vertices.c.y
  );
};

export const isStrictlyColliding = (
  vertices1,
  vertices2,
  vector = { x: 0, y: 0 }
) => {
  if (!isVerteces(vertices1) || !isVerteces(vertices2)) return false;

  return (
    isPositionStrictlyInVertices({
      position: vertices1.a,
      vertices: vertices2,
      vector,
    }) ||
    isPositionStrictlyInVertices({
      position: vertices1.b,
      vertices: vertices2,
      vector,
    }) ||
    isPositionStrictlyInVertices({
      position: vertices1.c,
      vertices: vertices2,
      vector,
    }) ||
    isPositionStrictlyInVertices({
      position: vertices1.d,
      vertices: vertices2,
      vector,
    })
  );
};

export const isColliding = (vertices1, vertices2, vector = { x: 0, y: 0 }) => {
  if (!isVerteces(vertices1) || !isVerteces(vertices2)) return false;

  return (
    isPositionInVertices({
      position: vertices1.a,
      vertices: vertices2,
      vector,
    }) ||
    isPositionInVertices({
      position: vertices1.b,
      vertices: vertices2,
      vector,
    }) ||
    isPositionInVertices({
      position: vertices1.c,
      vertices: vertices2,
      vector,
    }) ||
    isPositionInVertices({ position: vertices1.d, vertices: vertices2, vector })
  );
};

const isBlocksColliding = ({ vertices, blocks, vector = { x: 0, y: 0 } }) => {
  const collisions = blocks.filter((block) =>
    isStrictlyColliding(vertices, block, vector)
  );
  return !_.isEmpty(collisions);
};

const getBlockDistance = ({ hurtbox, blocks, distance, direction }) => {
  const directions = {
    top: {
      filter: isCollidingTop,
      operation: ({ hurtbox, block }) => hurtbox.a.y - block.d.y,
    },
    bottom: {
      filter: isCollidingBottom,
      operation: ({ hurtbox, block }) => block.a.y - hurtbox.d.y,
    },
    right: {
      filter: isCollidingRight,
      operation: ({ hurtbox, block }) => block.a.x - hurtbox.b.x,
    },
    left: {
      filter: isCollidingLeft,
      operation: ({ hurtbox, block }) => hurtbox.a.x - block.b.x,
    },
  };

  const distances = blocks
    .filter((block) => directions[direction].filter(hurtbox, block, distance))
    .map((block) => directions[direction].operation({ hurtbox, block }));

  distances.sort(function (a, b) {
    return a - b;
  });

  return distances[0];
};

const getXDirection = ({ hurtbox, blocks, vector, collision }) => {
  if (!vector.x) return 0;

  if (vector.x > 0) {
    const distance = vector.x;

    const blockDistance = getBlockDistance({
      hurtbox,
      blocks,
      distance,
      direction: 'right',
    });

    const screenCollision = hurtbox.b.x + distance >= SCREEN_LIMITS.x.end;
    const screenDistance = SCREEN_LIMITS.x.end - hurtbox.b.x;

    collision.right = blockDistance === 0 || screenCollision;

    return (
      blockDistance ??
      (screenCollision ? screenDistance : undefined) ??
      distance
    );
  }

  const distance = -vector.x;

  const blockDistance = getBlockDistance({
    hurtbox,
    blocks,
    distance,
    direction: 'left',
  });

  const screenCollision = hurtbox.a.x + vector.x <= SCREEN_LIMITS.x.start;
  const screenDistance = hurtbox.a.x - SCREEN_LIMITS.x.start;

  collision.left = blockDistance === 0 || screenCollision;

  return -(
    blockDistance ??
    (screenCollision ? screenDistance : undefined) ??
    distance
  );
};

const getYDirection = ({ hurtbox, blocks, vector, collision }) => {
  if (!vector.y) return 0;

  if (vector.y > 0) {
    const distance = vector.y;

    const blockDistance = getBlockDistance({
      hurtbox,
      blocks,
      distance,
      direction: 'bottom',
    });

    const screenCollision = hurtbox.b.y + distance >= SCREEN_LIMITS.y.end;
    const screenDistance = SCREEN_LIMITS.x.end - hurtbox.b.y;

    collision.top = false;
    collision.bottom = blockDistance === 0 || screenCollision;

    return (
      blockDistance ??
      (screenCollision ? screenDistance : undefined) ??
      distance
    );
  }

  const distance = -vector.y;

  const blockDistance = getBlockDistance({
    hurtbox,
    blocks,
    distance,
    direction: 'top',
  });

  const screenCollision = hurtbox.a.y + vector.y <= SCREEN_LIMITS.y.start;
  const screenDistance = hurtbox.a.y - SCREEN_LIMITS.y.start;

  collision.bottom = false;
  collision.top = blockDistance === 0 || screenCollision;

  return -(
    blockDistance ??
    (screenCollision ? screenDistance : undefined) ??
    distance
  );
};

export const createElement = ({
  dimensions,
  img,
  position,
  id,
  rotation,
  backgroundSize,
  backgroundPosition,
}) => {
  const element = document.createElement('div');

  element.style.position = 'absolute';
  element.style.backgroundSize = 'cover';
  element.style.imageRendering = 'pixelated';

  element.style.height = dimensions.height + 'px';
  element.style.width = dimensions.width + 'px';
  element.style.backgroundImage = img;
  element.style.left = position.x + 'px';
  element.style.top = position.y + 'px';

  if (rotation) element.style.transform = `rotate(${rotation}deg)`;
  if (backgroundSize) element.style.backgroundSize = backgroundSize;
  if (backgroundPosition) element.style.backgroundPosition = backgroundPosition;
  if (id) element.setAttribute('id', id);

  return element;
};

export const nextPosition = ({
  hurtbox,
  blocks = [],
  vector,
  position,
  collision,
  miscs = [],
}) => {
  const filteredItems = miscs
    .filter((item) => item.collision && !_.isEmpty(item.vertices))
    .map((item) => item.vertices);

  const xDirection = getXDirection({
    hurtbox,
    blocks: [...blocks, ...filteredItems],
    vector,
    collision,
  });

  const yDirection = getYDirection({
    hurtbox,
    blocks: [...blocks, ...filteredItems],
    vector,
    collision,
  });

  const willCollide = isBlocksColliding({
    blocks: [...blocks, ...filteredItems],
    vertices: hurtbox,
    vector: { x: xDirection, y: yDirection },
  });

  position.x += willCollide ? 0 : xDirection;
  position.y += yDirection;
};

export const getCenterPosition = (vertices) => {
  if (!isVerteces(vertices)) return { x: 0, y: 0 };

  const xCenter = (vertices.a.x + vertices.c.x) / 2;
  const yCenter = (vertices.a.y + vertices.c.y) / 2;
  return { x: xCenter, y: yCenter };
};

export const isWithinRange = (position1, position2, distance) =>
  !!(
    position2.x - distance.x < position1.x &&
    position2.x + distance.x > position1.x &&
    position2.y - distance.y < position1.y &&
    position2.y + distance.y > position1.y
  );

export const chase = ({
  chaserVertices,
  chasedVertices,
  vector,
  distance,
  speed,
}) => {
  const chasedPosition = getCenterPosition(chasedVertices);
  const chaserPosition = getCenterPosition(chaserVertices);

  const isDetected = isWithinRange(chaserPosition, chasedPosition, distance);

  if (!isDetected) return (vector.x = 0);

  if (chasedPosition.x < chaserPosition.x) vector.x = -speed;
  if (chasedPosition.x > chaserPosition.x) vector.x = speed;
};

export const getMenu = ({ options, gridPos }) => {
  const menu = options.map(({ text, action }, i) => {
    const position = GRID[gridPos.x][gridPos.y + i * 2];
    const arrowPosition = GRID[gridPos.x - 1][gridPos.y + i * 2];
    return { text, action, position, arrowPosition };
  });

  return menu;
};

export const getOptions = ({ options, position }) => {
  const distance = GRID[0][2];
  let newPosition = { ...position };

  const newOptions = options.map(({ action, name }, i) => {
    if (i)
      newPosition = {
        x: newPosition.x + distance.x,
        y: newPosition.y + distance.y,
      };

    const id = `menu-option-${i}`;

    return { id, action, position: newPosition, name };
  });

  return newOptions;
};

export const createMenuElements = () => {
  const menuElement = document.createElement('div');
  const titleElement = document.createElement('div');
  const optionsElement = document.createElement('div');
  const arrowElement = document.createElement('div');

  menuElement.id = 'menu';
  titleElement.id = 'menu-title';
  optionsElement.id = 'menu-options';
  arrowElement.id = 'menu-arrow';

  menuElement.appendChild(titleElement);
  menuElement.appendChild(optionsElement);
  menuElement.appendChild(arrowElement);

  document.getElementById('hud').appendChild(menuElement);
};

export const insertEffect = ({ effect, position, direction }) => {
  if (!effect.img) return;
  const effectPosition = effect.getPosition(position)[direction];

  const element = document.createElement('div');

  element.style.position = 'absolute';

  element.style.backgroundImage = effect.img;
  element.style.backgroundSize = 'cover';
  element.style.imageRendering = 'pixelated';

  element.style.height = effect.dimensions.height + 'px';
  element.style.width = effect.dimensions.width + 'px';

  element.style.top = effectPosition.top;
  element.style.left = effectPosition.left;

  element.style.visibility = 'hidden';

  document.getElementById('map').appendChild(element);
  return element;
};

export const insertHitbox = ({ effect, showHitbox, borderColor, bgColor }) => {
  if (_.isEmpty(effect.hitbox)) return null;

  const element = document.createElement('div');

  if (showHitbox) {
    addBoxEffect({ element, borderColor, bgColor });
    element.style.visibility = 'hidden';
  }

  document.getElementById('map').appendChild(element);
  return element;
};

export const cloneWithElements = ({
  actionEffects,
  position,
  direction,
  effects,
  showHitbox,
  borderColor,
  bgColor,
}) => {
  if (_.isEmpty(actionEffects)) return effects;

  const cloned = _.cloneDeep(actionEffects);

  const effectWithElements = cloned.map((item) => ({
    character: {
      position: _.clone(position),
      direction: _.clone(direction),
    },
    elements: {
      effect: insertEffect({
        effect: item,
        position: position,
        direction: direction,
      }),
      hitbox: insertHitbox({ effect: item, showHitbox, borderColor, bgColor }),
    },
    ...item,
  }));

  return [..._.cloneDeep(effects), ...effectWithElements];
};

export const encrypt = (data) => CryptoJS.AES.encrypt(data, SECRET).toString();

export const decrypt = ({ data, defaultData }) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(data, SECRET).toString(
      CryptoJS.enc.Utf8
    );

    return decrypted;
  } catch (error) {
    return defaultData;
  }
};

export const mergeData = ({ currentData, newData }) => {
  const keys = _.keys(currentData);
  const filteredData = _.pick(newData, keys);
  const mergedData = _.merge(currentData, filteredData);

  return mergedData;
};

export const loadStoredData = ({ key, defaultData }) => {
  try {
    const storeString = localStorage.getItem(key);
    const decrypted = decrypt({
      data: storeString,
      defaultData: defaultData.toString(),
    });

    const storedData = JSON.parse(decrypted);
    return storedData;
  } catch (error) {
    return defaultData;
  }
};

export const makeGrid = (dimensions, screenLimits) => {
  const columnsNumber = screenLimits.x.end / dimensions.width;
  const rowsNumber = screenLimits.y.end / dimensions.height;
  const grid = [];

  for (let x = 0; x < columnsNumber; x++) {
    grid.push([]);

    for (let y = 0; y < rowsNumber; y++) {
      const cell = { x: x * dimensions.width, y: y * dimensions.height };
      grid[x].push(cell);
    }
  }
  return grid;
};
