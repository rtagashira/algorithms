// Given integers n, l and r, find the number of ways to represent n 
// as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

function countSumOfTwoRepresentations(n, l, r) {
  let s = new Set()
  for(let i=l;i<=r;i++){
    if(n-i<=r && n-i>=l && n-i>=i){
      s.add(i)
    }
  }
  return s.size
}

function countSumOfTwoRepresentations(n, l, r) {
  let s = 0
  for(let i=l;i<=r;i++){
    if(n-i<=r && n-i>=l && n-i>=i){
      s++
    }
  }
  return s
}

// //---------------------------------------------------------------------------------------

// function countSumOfTwoRepresentations2(n, l, r) {
//   return Math.max(Math.min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
// }

console.log(countSumOfTwoRepresentations(6,2,4))//2
console.log(countSumOfTwoRepresentations(10,9,11))//0
console.log(countSumOfTwoRepresentations(93,24,58))//12