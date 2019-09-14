// Determine if an input is an uppercase English letter.

let isUppercase = (symbol) => /[A-Z]/.test(symbol)

console.log(isUppercase('A'))//true
console.log(isUppercase('a'))//false
console.log(isUppercase('0'))//false