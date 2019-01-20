// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so 
// that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains 
// all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

function sudoku(grid) {
  let subGrid = 1
  let leftCol = 0
  let rightCol = 3
  let topRow = 0
  let s = new Set()
  // iterate through the 3x3 grids
  while(subGrid<10){
  if(subGrid === 1||subGrid === 4||subGrid === 7){
    leftCol = 0
    rightCol = 3
  }
  if(subGrid === 2||subGrid === 5||subGrid === 8){
    leftCol = 3
    rightCol = 6
  }
  if(subGrid === 3||subGrid === 6||subGrid === 9){
    leftCol = 6
    rightCol = 9
  }
  if(subGrid === 1||subGrid === 2||subGrid === 3){
    topRow = 0
  }
  if(subGrid === 4||subGrid === 5||subGrid === 6){
    topRow = 3
  }
  if(subGrid === 7||subGrid === 8||subGrid === 9){
    topRow = 6
  }
  s = new Set(grid[topRow  ].slice(leftCol, rightCol)
      .concat(grid[topRow+1].slice(leftCol, rightCol))
      .concat(grid[topRow+2].slice(leftCol, rightCol))
  )

  if(s.size!=9)return false

  subGrid++
  }
//-------------------- check rows
  for(let i=0;i<9;i++){
    s = new Set(grid[i])
    if(s.size!=9) return false
  }
//-------------check columns
  for(let j=0;j<9;j++){
    s = new Set()
    for(let i=0;i<9;i++){
      s.add(grid[i][j])
      if(i===8){
        if(s.size!=9) return false
      }
    }
  }
  return true
}

console.log(sudoku(
 [[1,3,2,5,4,6,9,8,7], 
  [4,6,5,8,7,9,3,2,1], 
  [7,9,8,2,1,3,6,5,4], 
  [9,2,1,4,3,5,8,7,6], 
  [3,5,4,7,6,8,2,1,9], 
  [6,8,7,1,9,2,5,4,3], 
  [5,7,6,9,8,1,4,3,2], 
  [2,4,3,6,5,7,1,9,8], 
  [8,1,9,3,2,4,7,6,5]])); //true
console.log(sudoku([[1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9]]))//false
console.log(sudoku([[1,2,3,4,5,6,7,8,9], 
  [4,5,6,7,8,9,1,2,3], 
  [7,8,9,1,2,3,4,5,6], 
  [2,3,4,5,6,7,8,9,1], 
  [3,4,5,6,7,8,9,1,2], 
  [5,6,7,8,9,1,2,3,4], 
  [6,7,8,9,1,2,3,4,5], 
  [8,9,1,2,3,4,5,6,7], 
  [9,1,2,3,4,5,6,7,8]]))//flase
console.log(sudoku([
  [1,3,2,5,4,6,9,2,7], 
  [4,6,5,8,7,9,3,8,1], 
  [7,9,8,2,1,3,6,5,4], 
  [9,2,1,4,3,5,8,7,6], 
  [3,5,4,7,6,8,2,1,9], 
  [6,8,7,1,9,2,5,4,3], 
  [5,7,6,9,8,1,4,3,2], 
  [2,4,3,6,5,7,1,9,8], 
  [8,1,9,3,2,4,7,6,5]]))//false