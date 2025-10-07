'use strict';

function centerSpider() {
  const spider = document.querySelector('.spider');
  const walls = document.querySelector('.wall');

  // Перевірка, що елементи знайдені
  if (!spider || !walls) {
    // eslint-disable-next-line no-console
    console.warn('❗ Element .spider або .wall не знайдено');

    return;
  }

  const wallsRect = walls.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Центрування
  const topPx = wallsRect.height / 2 - spiderRect.height / 2;
  const leftPx = wallsRect.width / 2 - spiderRect.width / 2;

  spider.style.top = `${topPx}px`;
  spider.style.left = `${leftPx}px`;
}

// Виконуємо після завантаження всіх ресурсів
window.addEventListener('load', () => {
  centerSpider();
});

// Перецентровуємо при зміні розміру вікна
window.addEventListener('resize', () => {
  centerSpider();
});
