// Given the age of a person and the adulthood age in a particular country, determine if the person is considered an adult in that country. Note that people whose age is the same as the adulthood age are considered adult.

let isAdult = (age, adulthoodAge) => age >= adulthoodAge

console.log(isAdult(18,21))//false
console.log(isAdult(1,18))//false
console.log(isAdult(20,20))//true
console.log(isAdult(19,20))//false