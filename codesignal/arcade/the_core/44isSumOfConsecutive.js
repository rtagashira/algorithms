// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

function isSumOfConsecutive2(n) {
  let ways = 0
  let max = Math.ceil(n/2)
  let sum = 0
  for(let i=1;i<max;i++){
    let j = i+1
    sum = i
    while(sum<=n){
      sum += j
      if(sum === n) ways ++ 
      j++
    }
  }
  return ways
}

console.log(isSumOfConsecutive2(9))//2
console.log(isSumOfConsecutive2(8))//0