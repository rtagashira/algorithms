// Find the leftmost digit that occurs in a given string.

function firstDigit(str) {
  return str.match(/[0-9]/).join()
}

console.log(firstDigit("var_1__Int"))//'1'