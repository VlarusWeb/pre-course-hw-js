const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const findFruit = (fruit, arr) => arr.indexOf(fruit) > -1 ? "Ура! нашел" : "Придется поискать в другом магазине…";

console.log(findFruit("апельсин", words));