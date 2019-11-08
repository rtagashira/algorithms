// Given three integers k, l and r return the number of integers between l and r inclusive that have exactly k divisors.

// It is guaranteed that l ≤ r.

let divNumber = (k, l, r) =>{
  let nums = 0
  for(let i=l;i<=r;i++){
      let d = 0
      for(let j=1;j<=i;j++){
          if(i % j === 0) d++
      }
      if(d === k) nums++
  }
  return nums
}

console.log(divNumber(3,2,49))//4
console.log(divNumber(4,23,75))//16