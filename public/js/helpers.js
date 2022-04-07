export const createElement = ({ item, demensions, img, imgSize }) => {
  const element = document.createElement('div');

  element.style.position = 'absolute';
  element.style.height = demensions.height + 'px';
  element.style.width = demensions.width + 'px';
  element.style.backgroundImage = 'url("' + img + '")';
  element.style.left = item.position.x + 'px';
  element.style.top = item.position.y + 'px';
  element.style.backgroundSize = imgSize;
  element.style.imageRendering = 'pixelated';

  if (item.backgroundPosition) {
    element.style.backgroundPositionX = item.backgroundPosition.x + 'px';
    element.style.backgroundPositionY = item.backgroundPosition.y + 'px';
  }

  return element;
};

export const getBlocksVerteces = ({ blocks, dimensions }) => {
  const blocksVerteces = blocks.map(({ position }) => ({
    a: {
      x: position.x,
      y: position.y,
    },
    b: {
      x: position.x + dimensions.width,
      y: position.y,
    },
    c: {
      x: position.x + dimensions.width,
      y: position.y + dimensions.height,
    },
    d: {
      x: position.x,
      y: position.y + dimensions.height,
    },
  }));

  return blocksVerteces;
};
