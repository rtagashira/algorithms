// Consider a piece of straw with a length of strawLength. You want to break it into smaller pieces with pairwise distinct positive integer lengths. What is the maximum possible number of smaller pieces that you can get from breaking the original piece?

let piecesOfDistinctLengths = (straw) => {
  let sum    = 0,
      length = 1,
      count  = 0
  while(sum < straw){
  sum += length
  length++
  if(sum > straw) break
  count ++
  }
  return count
}

console.log(piecesOfDistinctLengths(14))//4
console.log(piecesOfDistinctLengths(3))//2
console.log(piecesOfDistinctLengths(4))//2
console.log(piecesOfDistinctLengths(15))//5
console.log(piecesOfDistinctLengths(100))//13