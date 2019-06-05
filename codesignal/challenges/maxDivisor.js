// Given a number and a range, find the largest integer within the given range that's divisible by the given number.

function maxDivisor(left, right, divisor) {
  while(right>= left){
    if(right % divisor === 0) return right
    right --
  }
  return -1
}

console.log(maxDivisor(1,10,3))//9