// Given an integer, find the sum of all its digits.

const digitSum = (n) => +[...n + ''].reduce((a,b)=>+a + +b)

console.log(digitSum(111))//3
console.log(digitSum(0))//0
