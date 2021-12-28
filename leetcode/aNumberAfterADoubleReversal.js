// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

const isSameAfterReversals = (num) => !/0$/.test(num.toString()) || !/[1-9]/.test(num.toString())

// const isSameAfterReversals = (num) =>{
//     let str = num.toString()
//     str = [...str].reverse().join('')
//     let n = +str
//     return [...n.toString()].reverse().join('') === num.toString()
// }

console.log(isSameAfterReversals(526))//true
console.log(isSameAfterReversals(1800))//false
console.log(isSameAfterReversals(0))//true