// Find the number of even digits in the given integer.

let numberOfEvenDigits = (n) => (n + '').replace(/[13579]/g, '').length

let numberOfEvenDigits = (n) => [...n.toString()].filter(x => x % 2 === 0).length

console.log(numberOfEvenDigits(1010))//2
console.log(numberOfEvenDigits(123))//1
console.log(numberOfEvenDigits(135))//0