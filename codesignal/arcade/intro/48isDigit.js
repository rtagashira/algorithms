// Determine if the given character is a digit or not.

function isDigit2(str) {
  return /\d/.test(str)
}
function isDigit(str) {
  return /[0-9]/.test(str)
}

console.log(isDigit('0'))//true
console.log(isDigit('-'))//false