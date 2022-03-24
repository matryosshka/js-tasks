const workers = [
  { name: "Elena", salary: 500 },
  { name: "Kirill", salary: 1500 },
  { name: "Sergey", salary: 2000 },
];

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
    }
  })

  return worthyWorkers; 
};

console.log(getWorthyWorkers(workers)); 



// Задача: Выборка объекта
// Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл.свойства(поля) 
// - name(содержащее имя сотрудника) и поле salary(содержащее зарплату сотрудника от 0 до 3000).Сформировать функцию в которую будет 
// передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.


// *Первый вариант решения*: Цикл FOR
// const workers = [
//   { name: "Elena", salary: 500 },
//   { name: "Kirill", salary: 1500 },
//   { name: "Sergey", salary: 2000 },
// ];

// const getWorthyWorkers = (workersArr) =>  //Заведена функция: getWorthyWorkers. В кач-ве аргумента будем передавать массив работников: 
//workersArr
//   {
//     const worthyWorkers = []; // Нужно выполнить выборку, для этого заводим новый массив: worthyWorkers

  // Из набора данных массива нужно выбрать необходимые -> пройтись циклом по массиву, на каждой итерации анализировать нужный нам объект,
  // проверять условие - salary > 1000, если условие верно, добавлять элемент в новый массив: worthyWorkers

  // Для этого заводим стандартный цикл:
  // for (let i = 0; i < workersArr.length; i++) // Пока i меньше, чем переданный массив работников (а именно его длина), то i++
  
  // {
    // const currentWorker = workersArr[i];  // Чтобы было удобно обращаться к элементу в цикле, сохраним его в переменную: currentWorker 
    //т.е из всего массива выберем текущий. Далее, напишем условие:

  //   if (currentWorker.salary > 1000) // Если у работника ЗП больше, чем 1000, то добавляем его в массив: worthyWorkers, при помощи метода: 
  //push
  //     {
  //       worthyWorkers.push(currentWorker.name); // Согласно условию задачи, нужно вывести только имена, поэтому берем поле .name
  //     }
  // }

//   return worthyWorkers; // Вернем из функции, чтобы в консоли не получить: underfind
// };

// console.log(getWorthyWorkers(workers)); //Выведем рез-т работы функции: getWorthyWorkers и передадим в кач-ве аргумента массив объектов: 
//workers

// *Второй вариант решения*: Перепишем цикл FOR на более удобный цикл, при помощи метода ForEach, который есть у массивов
// const workers = [
//   { name: "Elena", salary: 500 },
//   { name: "Kirill", salary: 1500 },
//   { name: "Sergey", salary: 2000 },
// ];

// const getWorthyWorkers = (workersArr) => {
//   const worthyWorkers = [];

//   // У переданного массива в виде аргумента, вызываем метод forEach и внутри () - функции обработчика в качестве первого аргумента нам будет
//   // доступен каждый элемент этого массива внутри цикла (тоже самое, что и в for): (и снова пишем нужное условие)

//   workersArr.forEach(currentWorker => {
//     if (currentWorker.salary > 1000) {
//       worthyWorkers.push(currentWorker.name)
//     }
//   })

//   return worthyWorkers; 

//   // ------ заменяем:
//   // for (let i = 0; i < workersArr.length; i++) {
//   //   const currentWorker = workersArr[i];   

//   //   if (currentWorker.salary > 1000) {
//   //       worthyWorkers.push(currentWorker.name); 
//   //     }
//   // }
//   //------

// };

// console.log(getWorthyWorkers(workers)); 

// *Материалы*: 
// push - добавление элемента в массив: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// forEach - цикл для массива: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 