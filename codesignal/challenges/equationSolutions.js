// Given integers l and r, find the number of different pairs of integers A and B such that l <= A <= r and l <= B <= r and A3 = B2.

// Note that A and B may even coincide (A = B = 1 is one of the possibilities).

function equationSolutions(l, r) {
  let count = 0
  for(let i=l;i<=r;i++){
      for(let j=l;j<=r;j++){
          if(i ** 3 === j ** 2) count++
      }
  }
  return count
}

console.log(equationSolutions(1,4))//1
console.log(equationSolutions(1,8))//2
console.log(equationSolutions(1,100))//4