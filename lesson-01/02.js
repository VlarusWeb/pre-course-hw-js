// code
let number1 = Math.floor(Math.random() * 100);

const checkRandNumForOdd = (num) => num % 2 ? `${num}:Это нечетное число` : `${num}:Это четное число`;

console.log(checkRandNumForOdd(number1));