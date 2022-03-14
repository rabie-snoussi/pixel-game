const HERO_IDLE_IMG = './assets/hero/herochar_idle_anim_strip_4.png';
const HERO_ATTACK_IMG = './assets/hero/herochar_attack_anim_strip_4.png';
const HERO_SWORD_ATTACK_IMG =
  './assets/hero/herochar_sword_attack_anim_strip_4.png';
const HERO_RUN_IMG = './assets/hero/herochar_run_anim_strip_6.png';

export const HERO_SPRITS = {
  idle: {
    img: HERO_IDLE_IMG,
    sprits: 4,
    loop: true,
    dimensions: {
      height: 16,
      width: 16,
    },
  },
  attack: {
    img: HERO_ATTACK_IMG,
    sprits: 4,
    loop: false,
    dimensions: {
      height: 16,
      width: 16,
    },
  },
  sword_attack: {
    img: HERO_SWORD_ATTACK_IMG,
    sprits: 4,
    loop: false,
    dimensions: {
      height: 16,
      width: 32,
    },
  },
  run: {
    img: HERO_RUN_IMG,
    sprits: 6,
    loop: true,
    dimensions: {
      height: 16,
      width: 16,
    },
  },
};
