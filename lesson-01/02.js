// code
const checkRandNumForOdd = (num = (Math.floor(Math.random() * 100))) => num % 2 === 0 ? `${num}: Это четное число` : `${num}: Это нечетное число`;

console.log(checkRandNumForOdd());