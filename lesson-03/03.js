// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1,num2,num3) {
   return Math.max(num1,num2,num3)
}

let arr=[1,2,3,4,5,6,7];
function toTest(acc,item,index) {
   if(index%2) return  acc+=item;
   else return acc;
}

console.log(arr.reduce(toTest));
console.log(Boolean(Infinity))