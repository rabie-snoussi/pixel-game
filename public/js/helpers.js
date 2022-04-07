export const createElement = (item) => {
  const element = document.createElement('div');

  element.style.position = 'absolute';
  element.style.height = item.dimensions.height + 'px';
  element.style.width = item.dimensions.width + 'px';
  element.style.backgroundImage = 'url("' + item.img + '")';
  element.style.left = item.position.x + 'px';
  element.style.top = item.position.y + 'px';
  element.style.backgroundSize = item.imgSize;
  element.style.imageRendering = 'pixelated';

  if (item.backgroundPosition) {
    element.style.backgroundPositionX = item.backgroundPosition.x + 'px';
    element.style.backgroundPositionY = item.backgroundPosition.y + 'px';
  }

  if (item.zIndex) element.style.zIndex = item.zIndex;

  return element;
};

export const getVerteces = ({ dimensions, position }) => ({
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
});
