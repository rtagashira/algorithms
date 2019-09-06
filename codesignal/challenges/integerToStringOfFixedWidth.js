// Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

let integerToStringOfFixedWidth = (n, w) =>{
  let str = n + ''
  return str.length >= w? str.slice(-w): '0'.repeat(w - str.length) + str
}

console.log(integerToStringOfFixedWidth(1234,2))//'34'
console.log(integerToStringOfFixedWidth(1234,4))//'1234'
console.log(integerToStringOfFixedWidth(1234,5))//'01234'
console.log(integerToStringOfFixedWidth(89,4))//'0089'