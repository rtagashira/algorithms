// Given a string with at least one digit, extract the rightmost digit from it.

let lastDigitRegExp = (str) => str.match(/\d/g).slice(-1)[0]

let lastDigitRegExp = (str) => str.match(/\d/g)[str.match(/\d/g).length - 1]

console.log(lastDigitRegExp("var_1__Int"))//'1'
console.log(lastDigitRegExp("qq2q"))//'2'
console.log(lastDigitRegExp("0ss"))//'0'