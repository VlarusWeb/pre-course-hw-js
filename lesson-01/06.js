let str = "zzzzyzz";

const checkChar = (str, char) => str.includes(char) ? "нашел" : "заблудился";

console.log(checkChar(str, "y"));