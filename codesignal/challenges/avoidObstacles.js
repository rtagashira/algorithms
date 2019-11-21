// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

let avoidObstacles = (arr) =>{
  let max = Math.max(...arr),
      s   = new Set(arr)
  for(let i=1;i<max;i++){
      let jump = 0
      while(!s.has(jump)){
          if(s.has(jump + i)){
              break
          }
          if(jump + i > max) return i
          jump += i
      }
  }
  return max + 1
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))//4