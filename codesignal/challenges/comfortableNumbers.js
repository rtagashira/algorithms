// Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

// How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?

function comfortableNumbers(l, r) {
  let pairs = 0
  const c = (a,b)=>{
    const sum = +[...a.toString()].reduce((acc,v)=>+acc + +v),
          min = a - sum,
          max = a + sum
    return b >= min && b <= max && a != b
  }
  for(let i=l;i<r;i++){
    for(let j=i+1;j<=r;j++){
      if(c(i,j) && c(j,i)) pairs++
    }
  }
  return pairs
}

console.log(comfortableNumbers(10,12))//2
console.log(comfortableNumbers(1,9))//20
console.log(comfortableNumbers(12,108))//707