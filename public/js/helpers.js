import { SCREEN_LIMITS } from './constants.js';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const isCollidingRight = (verteces1, verteces2, distance = 0) => {
  return (
    (verteces1.b.x + distance >= verteces2.a.x &&
      verteces1.b.y === verteces2.a.y &&
      verteces1.c.y === verteces2.d.y &&
      verteces1.b.x < verteces2.b.x) ||
    (verteces1.b.x + distance >= verteces2.a.x &&
      verteces1.b.y > verteces2.a.y &&
      verteces1.b.y < verteces2.d.y &&
      verteces1.b.x < verteces2.b.x) ||
    (verteces1.b.x + distance >= verteces2.a.x &&
      verteces1.c.y > verteces2.a.y &&
      verteces1.c.y < verteces2.d.y &&
      verteces1.b.x < verteces2.b.x)
  );
};

export const isCollidingLeft = (verteces1, verteces2, distance = 0) => {
  return (
    (verteces1.a.x - distance <= verteces2.b.x &&
      verteces1.a.y === verteces2.b.y &&
      verteces1.d.y === verteces2.c.y &&
      verteces1.a.x + distance > verteces2.a.x) ||
    (verteces1.a.x - distance <= verteces2.b.x &&
      verteces1.a.y > verteces2.b.y &&
      verteces1.a.y < verteces2.c.y &&
      verteces1.a.x + distance > verteces2.a.x) ||
    (verteces1.a.x - distance <= verteces2.b.x &&
      verteces1.d.y > verteces2.b.y &&
      verteces1.d.y < verteces2.c.y &&
      verteces1.a.x + distance > verteces2.a.x)
  );
};

export const isCollidingTop = (verteces1, verteces2, distance = 0) => {
  return (
    (verteces1.a.y - distance <= verteces2.c.y &&
      verteces1.a.x === verteces2.d.x &&
      verteces1.b.x === verteces2.c.x &&
      verteces1.a.y + distance > verteces2.a.y) ||
    (verteces1.a.y - distance <= verteces2.c.y &&
      verteces1.a.x > verteces2.d.x &&
      verteces1.a.x < verteces2.c.x &&
      verteces1.a.y + distance > verteces2.a.y) ||
    (verteces1.a.y - distance <= verteces2.c.y &&
      verteces1.b.x > verteces2.d.x &&
      verteces1.b.x < verteces2.c.x &&
      verteces1.a.y + distance > verteces2.a.y)
  );
};

export const isCollidingBottom = (verteces1, verteces2, distance = 0) => {
  return (
    (verteces1.c.y + distance >= verteces2.a.y &&
      verteces1.c.x === verteces2.b.x &&
      verteces1.d.x === verteces2.a.x &&
      verteces1.c.y < verteces2.c.y) ||
    (verteces1.c.y + distance >= verteces2.a.y &&
      verteces1.c.x > verteces2.a.x &&
      verteces1.c.x < verteces2.b.x &&
      verteces1.c.y < verteces2.c.y) ||
    (verteces1.c.y + distance >= verteces2.a.y &&
      verteces1.d.x > verteces2.a.x &&
      verteces1.d.x < verteces2.b.x &&
      verteces1.c.y < verteces2.c.y)
  );
};

const distanceCalculation = ({ hurtbox, block, direction }) => {
  const operations = {
    top: hurtbox.a.y - block.d.y,
    bottom: block.a.y - hurtbox.d.y,
    right: block.a.x - hurtbox.b.x,
    left: hurtbox.a.x - block.b.x,
  };

  return operations[direction];
};

const blockDistance =
  (collisionFilter, direction) =>
  ({ hurtbox, blocks, distance }) => {
    const distances = blocks
      .filter((block) => collisionFilter(hurtbox, block, distance))
      .map((block) => distanceCalculation({ hurtbox, block, direction }));

    distances.sort(function (a, b) {
      return a - b;
    });

    return distances[0];
  };

const screenCollision = ({
  hurtbox,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}) => {
  const topCollision = hurtbox.a.y - top <= SCREEN_LIMITS.y.start;
  const bottomCollision = hurtbox.c.y + bottom >= SCREEN_LIMITS.y.end;
  const rightCollision = hurtbox.b.x + right >= SCREEN_LIMITS.x.end;
  const leftCollision = hurtbox.a.x - left <= SCREEN_LIMITS.x.start;

  const topDistance = hurtbox.a.y - SCREEN_LIMITS.y.start;
  const bottomDistance = SCREEN_LIMITS.y.end - hurtbox.a.y;
  const rightDistance = SCREEN_LIMITS.x.end - hurtbox.b.x;
  const leftDistance = hurtbox.a.x - SCREEN_LIMITS.x.start;

  return {
    top: topCollision ? topDistance : undefined,
    bottom: bottomCollision ? bottomDistance : undefined,
    right: rightCollision ? rightDistance : undefined,
    left: leftCollision ? leftDistance : undefined,
  };
};

export const distanceToAdd = ({
  hurtbox,
  blocks = [],
  top = 0,
  bottom = 0,
  right = 0,
  left = 0,
}) => {
  const topBlockDistance = blockDistance(
    isCollidingTop,
    'top'
  )({
    hurtbox,
    blocks,
    distance: top,
  });

  const bottomBlockDistance = blockDistance(
    isCollidingBottom,
    'bottom'
  )({
    hurtbox,
    blocks,
    distance: bottom,
  });

  const rightBlockDistance = blockDistance(
    isCollidingRight,
    'right'
  )({
    hurtbox,
    blocks,
    distance: right,
  });

  const leftBlockDistance = blockDistance(
    isCollidingLeft,
    'left'
  )({
    hurtbox,
    blocks,
    distance: left,
  });

  const screenCollisions = screenCollision({
    hurtbox,
    top,
    bottom,
    left,
    right,
  });

  const topDistance = topBlockDistance ?? screenCollisions.top ?? top;
  const bottomDistance =
    bottomBlockDistance ?? screenCollisions.bottom ?? bottom;
  const rightDistance = rightBlockDistance ?? screenCollisions.right ?? right;
  const leftDistance = leftBlockDistance ?? screenCollisions.left ?? left;

  const topCollision =
    topBlockDistance == 0 || !!topBlockDistance || !!screenCollisions.top;
  const bottomCollision =
    bottomBlockDistance == 0 ||
    !!bottomBlockDistance ||
    !!screenCollisions.bottom;
  const rightCollision =
    rightBlockDistance == 0 || !!rightBlockDistance || !!screenCollisions.right;
  const leftCollision =
    leftBlockDistance == 0 || !!leftBlockDistance || !!screenCollisions.left;

  return {
    top: { distance: topDistance, collision: topCollision },
    bottom: { distance: bottomDistance, collision: bottomCollision },
    right: { distance: rightDistance, collision: rightCollision },
    left: { distance: leftDistance, collision: leftCollision },
  };
};

export const getCenterPosition = (verteces) => {
  const xCenter = (verteces.a.x + verteces.c.x) / 2;
  const yCenter = (verteces.a.y + verteces.c.y) / 2;
  return { x: xCenter, y: yCenter };
};

export const chaseDistance = ({
  heroVerteces,
  monsterVerteces,
  blocksVerteces,
  detection,
  distance,
}) => {
  const heroCenter = getCenterPosition(heroVerteces);
  const monsterCenter = getCenterPosition(monsterVerteces);
  const distanceDiff = {
    x: heroCenter.x - monsterCenter.x,
    y: heroCenter.y - monsterCenter.y,
  };

  if (distanceDiff.y > detection.y || distanceDiff.y < -detection.y)
    return { x: 0, y: 0 };
  if (distanceDiff.x > detection.x || distanceDiff.x < -detection.x)
    return { x: 0, y: 0 };

  const {
    left: { distance: leftDistance },
    right: { distance: rightDistance },
    top: { distance: topDistance },
    bottom: { distance: bottomDistance },
  } = distanceToAdd({
    hurtbox: monsterVerteces,
    top: distance,
    bottom: distance,
    left: distance,
    right: distance,
    blocks: blocksVerteces,
  });

  if (heroCenter.x < monsterCenter.x && heroCenter.y < monsterCenter.y)
    return { x: -leftDistance, y: -topDistance };
  if (heroCenter.x < monsterCenter.x && heroCenter.y > monsterCenter.y)
    return { x: -leftDistance, y: bottomDistance };
  if (heroCenter.x > monsterCenter.x && heroCenter.y < monsterCenter.y)
    return { x: rightDistance, y: -topDistance };
  if (heroCenter.x > monsterCenter.x && heroCenter.y > monsterCenter.y)
    return { x: rightDistance, y: bottomDistance };

  if (heroCenter.x < monsterCenter.x && heroCenter.y === monsterCenter.y)
    return { x: -leftDistance, y: 0 };
  if (heroCenter.x > monsterCenter.x && heroCenter.y === monsterCenter.y)
    return { x: rightDistance, y: 0 };
  if (heroCenter.x === monsterCenter.x && heroCenter.y < monsterCenter.y)
    return { x: 0, y: -topDistance };
  if (heroCenter.x === monsterCenter.x && heroCenter.y > monsterCenter.y)
    return { x: 0, y: bottomDistance };

  return { x: 0, y: 0 };
};

export const insertEffect = ({ effect, position, direction }) => {
  const effectPosition = effect.position(position)[direction];

  const element = document.createElement('div');

  element.style.position = 'absolute';

  element.style.backgroundImage = effect.img;
  element.style.backgroundSize = 'cover';
  element.style.imageRendering = 'pixelated';

  element.style.height = effect.dimensions.height;
  element.style.width = effect.dimensions.width;

  element.style.top = effectPosition.top;
  element.style.left = effectPosition.left;

  element.style.visibility = 'hidden';

  document.getElementById('game').appendChild(element);
  return element;
};

export const insertHitbox = (effect, showHitbox) => {
  if (_.isEmpty(effect.hitbox)) return null;

  const element = document.createElement('div');

  if (showHitbox) {
    element.style.position = 'absolute';
    element.style.border = '1px solid yellow';
    element.style.boxSizing = 'border-box';
    element.style.visibility = 'hidden';
  }

  document.getElementById('game').appendChild(element);
  return element;
};

export const cloneWithElements = ({
  effects,
  position,
  direction,
  heroEffects,
  showHitbox,
}) => {
  if (_.isEmpty(effects)) return heroEffects;

  const cloned = _.cloneDeep(effects);

  const effectWithElements = cloned.map((item) => ({
    hero: {
      position: _.clone(position),
      direction: _.clone(direction),
    },
    elements: {
      effect: insertEffect({
        effect: item,
        position: position,
        direction: direction,
      }),
      hitbox: insertHitbox(item, showHitbox),
    },
    ...item,
  }));

  return [..._.cloneDeep(heroEffects), ...effectWithElements];
};
