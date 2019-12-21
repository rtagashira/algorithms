// Given a positive integer n, calculate the following sum: n + n/2 + n/4 + n/8 + .... All divisions are integer.

let halvingSum = (n) =>{
  let sum = 0
  while(n >= 1){
      sum += n
      n = Math.floor(n/2)
  }
  return sum
}

console.log(halvingSum(25))//47
console.log(halvingSum(127))//247
console.log(halvingSum(1000))//1994
console.log(halvingSum(1))//1
console.log(halvingSum(100))//197