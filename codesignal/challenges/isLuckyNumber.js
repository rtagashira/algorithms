// Lucky numbers are the positive integers whose decimal representations contain only the lucky digits 4 and 7.

let isLuckyNumber = (n) => /[^47]/.test(n)? false: true

console.log(isLuckyNumber(47))//true
console.log(isLuckyNumber(1))//false
console.log(isLuckyNumber(54))//false
console.log(isLuckyNumber(7777))//true