const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];

const sliceArr = (arr, start, end) => arr.slice(start, end);

console.log(sliceArr(fruits, 1, -2));