'use strict';

const spider = document.querySelector('.spider');
const walls = document.querySelector('.wall');

const wallsCenter = {
  height: walls.clientHeight / 2,
  width: walls.clientWidth / 2,
};

const spiderCenter = {
  height: spider.clientHeight / 2,
  width: spider.clientWidth / 2,
};

spider.style.top = `${wallsCenter.height - spiderCenter.height}px`;
spider.style.left = `${wallsCenter.width - spiderCenter.width}px`;
