import { getCenterPosition } from '../helpers.js';

export const heroDetection = ({ monsterPos, heroPos, distance }) =>
  !!(
    heroPos.x - distance.x < monsterPos.x &&
    heroPos.x + distance.x > monsterPos.x &&
    heroPos.y - distance.y < monsterPos.y &&
    heroPos.y + distance.y > monsterPos.y
  );

export const heroChase = ({ verteces, heroVerteces, vector, distance }) => {
  const heroPos = getCenterPosition(heroVerteces);
  const monsterPos = getCenterPosition(verteces);

  const isDetected = heroDetection({ monsterPos, heroPos, distance });

  if (!isDetected) return (vector.x = 0);

  if (heroPos.x < monsterPos.x) vector.x = -2;
  if (heroPos.x > monsterPos.x) vector.x = 2;
};
