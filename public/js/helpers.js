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

const getBlockDistance = ({ hurtbox, blocks, distance, direction }) => {
  const directions = {
    top: {
      filter: isCollidingTop,
      operation: ({ hurtbox, block }) => hurtbox.a.y - block.d.y,
    },
    bottom: {
      filter: isCollidingBottom,
      operation:({ hurtbox, block }) => block.a.y - hurtbox.d.y,
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
    .map((block) =>
      directions[direction].operation({ hurtbox, block })
    );

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

export const nextPosition = ({ hurtbox, blocks = [], vector, position, collision }) => {
  const xDirection = getXDirection({ hurtbox, blocks, vector, collision });
  const yDirection = getYDirection({ hurtbox, blocks, vector, collision });

  position.x += xDirection;
  position.y += yDirection;
  };

export const getCenterPosition = (verteces) => {
  const xCenter = (verteces.a.x + verteces.c.x) / 2;
  const yCenter = (verteces.a.y + verteces.c.y) / 2;
  return { x: xCenter, y: yCenter };
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
