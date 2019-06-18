// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

function swapDiagonals(matrix) {
  let row = 0
  let col = 0
  let temp
  
  while(row <= matrix.length - 1){
    temp = matrix[row][col]
    matrix[row][col] = matrix[row][(matrix[row].length - 1) - col]
    matrix[row][(matrix[row].length - 1) - col] = temp
    col ++
    row ++
  }
  return matrix
}

console.log(swapDiagonals([
  [1,2,3], 
  [4,5,6], 
  [7,8,9]]))
//[[3,2,1], 
// [4,5,6], 
// [9,8,7]]
console.log(swapDiagonals([
  [43,455,32,103], 
  [102,988,298,981], 
  [309,21,53,64], 
  [2,22,35,291]]))
  // [[103,455, 32, 43], 
  //  [102,298,988,981], 
  //  [309, 53, 21, 64], 
  //  [291, 22, 35,  2]]
  console.log(swapDiagonals([
    [1,2], 
    [1,2]]))
// [[2,1], 
//  [2,1]]