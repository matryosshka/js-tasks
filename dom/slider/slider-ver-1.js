const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);

rightBtn.addEventListener("click", e => {
  e.preventDefault();
  let currentRight = parseInt(computedStyles.right)

  if (currentRight < 500) {
    items.style.right = `${currentRight + 100}px`;
  }
  });


leftBtn.addEventListener("click", e => {
  e.preventDefault();
  let currentRight = parseInt(computedStyles.right);

  if (currentRight > 0) {
    items.style.right = `${currentRight - 100}px`;
  }
});



// Задача: Простой слайдер
// Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. При клике на левую стрелочку, 
// элементы должны сдвигаться влево.

// Материалы:
// getComputedStyles - получение объекта стилей: https://developer.mozilla.org/ru/docs/Web/API/Window/getComputedStyle
// parseInt - приведение строки к числу: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt