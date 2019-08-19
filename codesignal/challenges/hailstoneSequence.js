// You're given an integer n.

// If n is even, divide it by 2.
// If n is odd, change it to 3 * n + 1.
// Repeat the process until n = 1. Return the number of steps performed by the above algorithm.

function hailstoneSequence(n) {
  let c = 0
  while(n>1){
    n % 2 === 0? n /= 2: n = 3 * n + 1
    c++
  }
  return c
}

console.log(hailstoneSequence(5))//5
console.log(hailstoneSequence(27))//111
console.log(hailstoneSequence(1))//0
console.log(hailstoneSequence(3))//7
console.log(hailstoneSequence(14))//17
console.log(hailstoneSequence(16))//4