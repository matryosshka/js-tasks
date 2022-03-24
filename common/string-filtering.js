const string = "Привет! Как дела?";

const vowels = [
"а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я",
"А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я"];

const getVowels = stringToFilter => {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

   if (vowels.includes(currentLetter)) {
     extractedVowels = extractedVowels + currentLetter;
   }
  }

  return extractedVowels;
}

console.log(getVowels(string));



// Задача: Фильтрация строки
// Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. 
//Результат вывести в консоль.

// Материалы: 
//includes - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
//toLowerCase - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//indexOf - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf (устаревший)