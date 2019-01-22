// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits2(n) {
  return Number(n.toString().slice(0,1)) + Number(n.toString().slice(1))
}

function addTwoDigits(n) {
  return Math.floor(n/10) + n%10
}

console.log(addTwoDigits(29))//11