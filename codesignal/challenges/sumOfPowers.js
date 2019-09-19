// For each integer from 1 to n find the maximal power p of the given divisor such that divisorp divides the current number. The algorithm should return the sum of those powers.

let sumOfPowers = (n, divisor) =>{
  let sum = 0
  for(let i=1;i<=n;i++){
    let biggestP = 0,
        currentP = 0,
        total    = 0
    while(total <= i){
      if(i % (divisor ** currentP) === 0){
        biggestP = currentP
      }
      total = divisor ** currentP
      currentP++
    }
    sum += biggestP
  }
  return sum
}

console.log(sumOfPowers(6,2))//4
console.log(sumOfPowers(12,5))//2
console.log(sumOfPowers(20,4))//6
console.log(sumOfPowers(239,4))//76