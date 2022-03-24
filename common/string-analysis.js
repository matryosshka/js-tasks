const path = "/loftschool/js/my-first-tasks.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);

  if (pathExt == requiredExt) { 
    return true
  } else {
    return false
  }
}

console.log(isHtml(path));


// Задача: Анализ строки
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false 
// в зависимости от того есть у этого файла расширение html или нет.

// const path = "/loftschool/js/my-first-tasks.html"

// // Заводим функцию (если возвращает true или false, принято такие функцие и переменные называть с is): isHtml
// const isHtml = path => { // Будем передавать строку, которая эмулирует путь до файла: path

// Решение: вырезать часть строки и сравнить с тем, с чем нам нужно

//   const requiredExt = ".html"; // Сохраним в переменную ту строку, с которой будем сравнивать. Далее, нужно взять окончание строки в path
//   const pathExt = path.slice(-5); // Из переданной строки, при помощи метода slice, вырезаем последние 5 символов

//   if (pathExt == requiredExt) { // Сравниваем эти строки --- можно условие переписать на: return pathExt == requiredExt ---
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isHtml(path)); // Выводим в консоль результат работы этой функции

// Материалы:
// slice - извлечение подстроки: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice 