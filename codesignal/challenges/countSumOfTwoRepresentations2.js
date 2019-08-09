// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

function countSumOfTwoRepresentations2(n, l, r) {
  let s = new Set()
  for(let i=l;i<=r;i++){
    if(n - i <= r && n - i >= l){
      s.add(Math.min(i,n-i) + ',' + Math.max(i,n-i))
    }
  }
  return s.size
}

console.log(countSumOfTwoRepresentations2(6,2,4))//2
console.log(countSumOfTwoRepresentations2(6,3,3))//1
console.log(countSumOfTwoRepresentations2(10,9,11))//0