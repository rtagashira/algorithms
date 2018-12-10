// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right.You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

//   Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:



//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] array.integer inputArray

// Non - empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
//   1 ≤ inputArray[i]≤ 1000.

//   [output] integer

// The desired length.

function avoidObstacles(arr) {
  let max = Math.max(...arr)
  for(let i=2;i<max;i++){
    let jump = i
    while(jump<max){
      if(arr.indexOf(jump)>=0){
        break
      }
      jump += i
      if (jump > max) {
        return i
      }
    }
  }
  return max+1
}
//-------------------------------------------------------------------------------------
// A = avoidObstacles2 = (a, j) =>
//   (
//     //increment j
//     j = -~j,
//     //check for any elements not divisible by j
//     //if we find one, try the next j
//     //otherwise, we found the answer
//     a.every(e => e % j) ? j : A(a, j)
// )

// function avoidObstacles(arr) {
//   for (var n = 1; ; n++) if (arr.every(x => x % n)) return n
// }


console.log(avoidObstacles([5, 3, 6, 7, 9]))//4
console.log(avoidObstacles([1, 4, 10, 6, 2]))//7