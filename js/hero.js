import { HERO_SPRITS } from './data/hero.js';
import { SCREEN_LIMITS } from './game.js';

export const HERO_SIZE = 4;

export const HERO_SPEED = 16;

export const ANIMATION_INTERVAL = 100;

export const HERO_DIRECTIONS = {
  left: 'left',
  right: 'right',
};

export const HERO_ACTIONS = {
  idle: 'idle',
  attack: 'attack',
  sword_attack: 'sword_attack',
  run: 'run',
};

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

const blockDistance =
  (collisionFilter, direction) =>
  ({ hurtbox, blocks, distance }) => {
    const distanceCalculation = (hurtbox, block) => {
      const operations = {
        top: hurtbox.a.y - block.d.y,
        bottom: block.a.y - hurtbox.d.y,
        right: block.a.x - hurtbox.b.x,
        left: hurtbox.a.x - block.b.x,
      };

      return operations[direction];
    };

    const distances = blocks
      .filter((block) => collisionFilter(hurtbox, block, distance))
      .map((block) => distanceCalculation(hurtbox, block));

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

const distanceToAdd = ({
  hurtbox,
  blocks,
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

export class Hero {
  constructor() {
    this.element = document.getElementById('hero');
    this.blocks_position = [];
    this.direction = HERO_DIRECTIONS.right;
    this.is_idle = true;
    this.action = '';
    this.sprits = null;
    this.is_jumping = false;
    this.clearIntervals = {
      idle: [],
      run: [],
    };
    this.hurtbox = {
      element: document.createElement('div'),
      a: {
        x: 0,
        y: 0,
      },
      b: {
        x: 0,
        y: 0,
      },
      c: {
        x: 0,
        y: 0,
      },
      d: {
        x: 0,
        y: 0,
      },
    };
    this.position = {
      x: 0,
      y: 0,
    };
  }

  idle() {
    if (
      this.action &&
      !HERO_SPRITS[this.action].possible_actions.includes(HERO_ACTIONS.idle)
    )
      return () => {};

    this.clearIntervals.run.map((func) => func());
    this.clearIntervals.idle.map((func) => func());

    this.action = HERO_ACTIONS.idle;

    let i = 0;
    this.sprits = HERO_SPRITS[HERO_ACTIONS.idle];

    const interval = setInterval(() => {
      this.element.style.left = this.position.x + 'px';
      if (i >= this.sprits.sprits) i = 0;

      this.spritImgUpdate(i);

      i++;
    }, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }

  run() {
    if (
      this.action &&
      !HERO_SPRITS[this.action].possible_actions.includes(HERO_ACTIONS.run)
    )
      return () => {};

    this.clearIntervals.run.map((func) => func());
    this.clearIntervals.idle.map((func) => func());

    this.is_idle = false;

    this.action = HERO_ACTIONS.run;

    let i = 0;
    this.sprits = HERO_SPRITS[HERO_ACTIONS.run];

    const interval = setInterval(() => {
      if (i >= this.sprits.sprits) i = 0;

      this.spritImgUpdate(i);

      i++;
    }, ANIMATION_INTERVAL);

    return () => {
      this.is_idle = true;
      clearInterval(interval);
    };
  }

  swordAttack() {
    if (
      this.action &&
      !HERO_SPRITS[this.action].possible_actions.includes(
        HERO_ACTIONS.sword_attack
      )
    )
      return () => {};

    this.clearIntervals.run.map((func) => func());
    this.clearIntervals.idle.map((func) => func());

    this.is_idle = false;

    this.action = HERO_ACTIONS.sword_attack;

    let i = 0;
    this.sprits = HERO_SPRITS[HERO_ACTIONS.sword_attack];

    const interval = setInterval(() => {
      this.spritImgUpdate(i);
      i++;

      if (i >= this.sprits.sprits) {
        this.is_idle = true;
        clearInterval(interval);
      }
    }, ANIMATION_INTERVAL);

    return () => {
      this.is_idle = true;
      learInterval(interval);
    };
  }

  idleDetection() {
    setInterval(() => {
      if (!this.is_idle) return;
      this.clearIntervals.idle.push(this.idle());
    }, 20);
  }

  fallDetection() {
    let i = 1;
    setInterval(() => {
      if (this.is_jumping) return;

      const {
        bottom: { distance },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        bottom: i * 2,
      });

      if (!distance) {
        if (i === 1) return;
        i = 1;
        return;
      }

      this.position.y += distance;
      this.updateHeroPosition();
      i++;
    }, 20);
  }

  spawn(position) {
    this.position.x = position.x;
    this.position.y = position.y;

    this.clearIntervals.idle.push(this.idle());

    this.idleDetection();
    this.fallDetection();

    this.updateHeroPosition();
  }

  goRight() {
    if (HERO_SPRITS[this.action].can_move) {
      this.clearIntervals.run.push(this.run());
    }

    const interval = setInterval(() => {
      if (HERO_SPRITS[this.action].can_move) {
        this.changeDirection(HERO_DIRECTIONS.right);

        const {
          right: { distance },
        } = distanceToAdd({
          hurtbox: this.hurtbox,
          blocks: this.blocks_position,
          right: HERO_SPEED,
        });

        this.position.x += distance;

        this.updateHeroPosition();
      }
    }, 20);

    return () => {
      this.is_idle = true;
      clearInterval(interval);
    };
  }

  goLeft() {
    if (HERO_SPRITS[this.action].can_move) {
      this.clearIntervals.run.push(this.run());
    }

    const interval = setInterval(() => {
      if (HERO_SPRITS[this.action].can_move) {
        this.changeDirection(HERO_DIRECTIONS.left);

        const {
          left: { distance },
        } = distanceToAdd({
          hurtbox: this.hurtbox,
          blocks: this.blocks_position,
          left: HERO_SPEED,
        });

        this.position.x -= distance;

        this.updateHeroPosition();
      }
    }, 20);

    return () => {
      this.is_idle = true;
      clearInterval(interval);
    };
  }

  fall() {
    let i = 0;
    const interval = setInterval(() => {
      if (HERO_SPRITS[this.action].can_move) {
        const {
          bottom: { distance, collision },
        } = distanceToAdd({
          hurtbox: this.hurtbox,
          blocks: this.blocks_position,
          bottom: i * 2,
        });

        this.position.y += distance;

        if (collision) clearInterval(interval);

        this.updateHeroPosition();
      }
      i++;
    }, 20);

    return () => {
      this.clearIntervals.idle.push(this.idle());
      clearInterval(interval);
    };
  }

  jump() {
    let i = 15;
    const interval = setInterval(() => {
      if (HERO_SPRITS[this.action].can_move) {
        const {
          top: { distance, collision },
        } = distanceToAdd({
          hurtbox: this.hurtbox,
          blocks: this.blocks_position,
          top: i * 2,
        });

        this.is_jumping = true;
        this.position.y -= distance;

        this.updateHeroPosition();

        if (i <= 0 || collision) {
          this.is_jumping = false;
          clearInterval(interval);
        }

        i--;
      }
    }, 20);

    return () => {
      this.is_jumping = false;
      clearInterval(interval);
    };
  }

  up() {
    const interval = setInterval(() => {
      const {
        top: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        top: HERO_SPEED,
      });

      this.position.y -= distance;

      if (collision) clearInterval(interval);

      this.updateHeroPosition();
    }, 20);

    return () => clearInterval(interval);
  }

  down() {
    const interval = setInterval(() => {
      const {
        bottom: { distance, collision },
      } = distanceToAdd({
        hurtbox: this.hurtbox,
        blocks: this.blocks_position,
        bottom: HERO_SPEED,
      });

      this.position.y += distance;

      if (collision) clearInterval(interval);

      this.updateHeroPosition();
    }, 20);

    return () => clearInterval(interval);
  }

  showHurtbox() {
    this.hurtbox.element.style.position = 'absolute';
    this.hurtbox.element.style.border = '1px solid black';

    document.getElementById('game').appendChild(this.hurtbox.element);
  }

  updateHeroPosition() {
    this.element.style.top = this.position.y + 'px';
    this.element.style.left = this.position.x + 'px';

    this.updateHurtbox();
  }

  updateHurtbox() {
    this.hurtbox.a.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.a.x * HERO_SIZE;
    this.hurtbox.b.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.b.x * HERO_SIZE;
    this.hurtbox.c.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.c.x * HERO_SIZE;
    this.hurtbox.d.x =
      this.position.x + HERO_SPRITS[this.action].hurtbox.d.x * HERO_SIZE;

    this.hurtbox.a.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.a.y * HERO_SIZE;
    this.hurtbox.b.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.b.y * HERO_SIZE;
    this.hurtbox.c.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.c.y * HERO_SIZE;
    this.hurtbox.d.y =
      this.position.y + HERO_SPRITS[this.action].hurtbox.d.y * HERO_SIZE;

    this.hurtbox.element.style.top = this.hurtbox.a.y + 'px';
    this.hurtbox.element.style.left = this.hurtbox.a.x + 'px';

    this.hurtbox.element.style.width =
      this.hurtbox.b.x - this.hurtbox.a.x + 'px';
    this.hurtbox.element.style.height =
      this.hurtbox.c.y - this.hurtbox.a.y + 'px';
  }

  setBlocksPosition(blocks) {
    this.blocks_position = blocks;
  }

  spritImgUpdate(i) {
    if (this.direction === HERO_DIRECTIONS.left)
      this.element.style.left =
        this.position.x -
        (this.sprits.dimensions.width * HERO_SIZE -
          (this.sprits.hurtbox.b.x - this.sprits.hurtbox.a.x) * HERO_SIZE) +
        'px';

    this.element.style.backgroundImage = 'url("' + this.sprits.img + '")';

    this.element.style.height =
      this.sprits.dimensions.height * HERO_SIZE + 'px';
    this.element.style.width = this.sprits.dimensions.width * HERO_SIZE + 'px';

    this.element.style.backgroundPositionX =
      this.sprits.dimensions.width * HERO_SIZE * -i + 'px';
  }

  changeDirection(direction) {
    if (direction == HERO_DIRECTIONS.left) {
      this.element.style.transform = 'scaleX(-1)';
      this.direction = HERO_DIRECTIONS.left;
    }
    if (direction == HERO_DIRECTIONS.right) {
      this.element.style.transform = 'none';
      this.direction = HERO_DIRECTIONS.right;
    }
  }
}
