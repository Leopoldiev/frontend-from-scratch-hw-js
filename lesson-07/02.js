/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
   let countSpaces = 0;

   for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") countSpaces++
   }
   if (countSpaces === str.length || str.length === 0) return false;

   let result = +str;
   if ((result <= 0 || result > 0) && typeof (result) === 'number') { return true; }
   else return false;
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false

console.log(isNumeric(""));
