// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber2(n) {
  return +('9'.repeat(n))
}

function largestNumber(n) {
  let sum = 0
  for(let i=0;i<n;i++){
    sum += 9 * 10**i
  }
  return sum
}

console.log(largestNumber(2))//99