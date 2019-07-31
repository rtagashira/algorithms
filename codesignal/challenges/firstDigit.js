// Find the leftmost digit that occurs in a given string.

function firstDigit(str) {
  return str.match(/\d/).join()
}

console.log(firstDigit("var_1__Int"))//1
console.log(firstDigit("q2q-q"))//2
console.log(firstDigit("0ss"))//0