/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
const FIRSTNUMBER=1;
const LASTNUMBER=10;
let counter=FIRSTNUMBER;
let factorial=1;

while (counter<=LASTNUMBER)
{
   factorial*=counter;
   counter++;
}

console.log(factorial);

