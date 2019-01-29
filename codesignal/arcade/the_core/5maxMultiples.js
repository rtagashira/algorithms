// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

function maxMultiple2(divisor, bound) {
  let num = divisor
  while(num <= bound){
    num*=divisor
  }
  return num/divisor
}

function maxMultiple(divisor, bound) {
  return bound - bound % divisor
}

console.log(maxMultiple(3,10))//9