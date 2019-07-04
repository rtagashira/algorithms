// Given the number of points on the line and the number of colors you have, find the number of the ways to color each point into one of the given colors in such manner that each two adjacent points will be different color.

function countLineColorings(points, colors) {
  let ways = colors
  for(let i=0;i<points-1;i++){
    ways *= colors - 1
  }
  return ways
}

console.log(countLineColorings(3,2))//2
console.log(countLineColorings(2,3))//6