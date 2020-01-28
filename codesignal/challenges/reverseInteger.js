// Reverse the digits of the given integer.

const reverseInteger = (x) => x>=0?+[...x.toString()].reverse().join('') : 
                              +('-' +[...Math.abs(x).toString()].reverse().join(''))

console.log(reverseInteger(12345))//54321
console.log(reverseInteger(-4243))//-3424
console.log(reverseInteger(10))//1
console.log(reverseInteger(-100))//-1