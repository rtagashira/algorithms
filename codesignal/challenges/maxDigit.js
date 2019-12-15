// Find the largest digit of the given number.

let maxDigit = (n) => +[...n.toString()].reduce((p,n) => n > p? n: p)

console.log(maxDigit(111))//1
console.log(maxDigit(132))//3
console.log(maxDigit(0))//0