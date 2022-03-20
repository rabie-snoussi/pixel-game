import { SCREEN_LIMITS } from './constants.js';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const isCollidingRight = (hero, block, distance = 0) => {
  return (
    (hero.b.x + distance >= block.a.x &&
      hero.b.y === block.a.y &&
      hero.c.y === block.d.y &&
      hero.b.x < block.b.x) ||
    (hero.b.x + distance >= block.a.x &&
      hero.b.y > block.a.y &&
      hero.b.y < block.d.y &&
      hero.b.x < block.b.x) ||
    (hero.b.x + distance >= block.a.x &&
      hero.c.y > block.a.y &&
      hero.c.y < block.d.y &&
      hero.b.x < block.b.x)
  );
};

const isCollidingLeft = (hero, block, distance = 0) => {
  return (
    (hero.a.x - distance <= block.b.x &&
      hero.a.y === block.b.y &&
      hero.d.y === block.c.y &&
      hero.a.x + distance > block.a.x) ||
    (hero.a.x - distance <= block.b.x &&
      hero.a.y > block.b.y &&
      hero.a.y < block.c.y &&
      hero.a.x + distance > block.a.x) ||
    (hero.a.x - distance <= block.b.x &&
      hero.d.y > block.b.y &&
      hero.d.y < block.c.y &&
      hero.a.x + distance > block.a.x)
  );
};

const isCollidingTop = (hero, block, distance = 0) => {
  return (
    (hero.a.y - distance <= block.c.y &&
      hero.a.x === block.d.x &&
      hero.b.x === block.c.x &&
      hero.a.y + distance > block.a.y) ||
    (hero.a.y - distance <= block.c.y &&
      hero.a.x > block.d.x &&
      hero.a.x < block.c.x &&
      hero.a.y + distance > block.a.y) ||
    (hero.a.y - distance <= block.c.y &&
      hero.b.x > block.d.x &&
      hero.b.x < block.c.x &&
      hero.a.y + distance > block.a.y)
  );
};

const isCollidingBottom = (hero, block, distance = 0) => {
  return (
    (hero.c.y + distance >= block.a.y &&
      hero.c.x === block.b.x &&
      hero.d.x === block.a.x &&
      hero.c.y < block.c.y) ||
    (hero.c.y + distance >= block.a.y &&
      hero.c.x > block.a.x &&
      hero.c.x < block.b.x &&
      hero.c.y < block.c.y) ||
    (hero.c.y + distance >= block.a.y &&
      hero.d.x > block.a.x &&
      hero.d.x < block.b.x &&
      hero.c.y < block.c.y)
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
    blocks: blocksVerteces
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
