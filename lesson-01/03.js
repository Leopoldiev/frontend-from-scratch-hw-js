/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const FIRSTNUMBER=1;
const LASTNUMBER=20;
const ITERATIONSTEP=2;
let counter=FIRSTNUMBER
let sum=0;

while (counter<=LASTNUMBER) {
   sum+=counter;
   counter+=2;
}

console.log(sum);
