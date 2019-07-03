// You are given a set of points on the Cartesian plane. Consider the distance between two points as the maximum difference of their coordinates. For example, the distance between points (1, 2) and (4, 6) is equal to max(|4 - 1|, |6 - 2|) = 4.

// Given a set of points, find the pair with the largest distance and return the value of their distance.

function largestDistance(a) {
  const odds = a.filter((x,i)=>i%2==1)
  const evens = a.filter((x,i)=>i%2==0)
  const oddMax = Math.max(...odds) - Math.min(...odds)
  const evenMax = Math.max(...evens) - Math.min(...evens)
  return Math.max(oddMax,evenMax)
}

console.log(largestDistance([7, 6, 6, 8, 1, 2, 8, 6]))//7
console.log(largestDistance([0, 1, 1, 2]))//1
console.log(largestDistance([7, 2, 3, 8, 2, 10, 9, 7]))//8