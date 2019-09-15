// Determine if the given character is a digit or not.

let isDigit = (d) => /\d/.test(d)

console.log(isDigit('0'))//true
console.log(isDigit('-'))//false
console.log(isDigit('O'))//false
console.log(isDigit('1'))//true