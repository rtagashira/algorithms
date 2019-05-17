// Find the smallest integer not less than the given limit which is divisible by all integers from the given array.

function firstMultiple(divisors, start) {
  while(true){
    let divisible = true
    for(let d of divisors){
      if(start % d != 0){
        divisible = false
      }
    }
    if(divisible){
      return start
    }
    start ++
  }
}

function firstMultiple(divisors, start) {
  while(true){
    if(divisors.filter(x => start % x === 0).length === divisors.length) return start
    start ++
  }
}

console.log(firstMultiple([2, 3, 4],13))//24