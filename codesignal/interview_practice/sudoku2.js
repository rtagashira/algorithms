// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

function sudoku2(grid) {
  let obj = {}
  for(let i=0;i<9;i++){
    // rows- filter out the '.' and compare to a set to find dups
    let rowNums = grid[i].filter(x=>x!='.')
    let rowNumsSet = new Set(rowNums)
    if(rowNums.length != rowNumsSet.size) return false

    for(let j=0;j<9;j++){
      // build obj with key:values of column:array of column values that are not '.'
      if(grid[i][j] != '.'){
        if(obj[j]){
          obj[j].push(grid[i][j]) 
        }else{
          obj[j] = [grid[i][j]]
        }
      }
      //build 3x3 grid in the obj
      if(grid[i][j] != '.'){
        //top row
        if(i<3 && j<3){
          obj['gridOne']? obj['gridOne'].push(grid[i][j]) : obj['gridOne'] = [grid[i][j]]
        }
        if(i<3 && j>2 && j<6){
          obj['gridTwo']? obj['gridTwo'].push(grid[i][j]) : obj['gridTwo'] = [grid[i][j]]
        }
        if(i<3 && j>5){
          obj['gridThree']? obj['gridThree'].push(grid[i][j]) : obj['gridThree'] = [grid[i][j]]
        }
        // middle row
        if(i>2 && i<6 && j<3){
          obj['gridFour']? obj['gridFour'].push(grid[i][j]) : obj['gridFour'] = [grid[i][j]]
        }
        if(i>2 && i<6 && j>2 && j<6){
          obj['gridFive']? obj['gridFive'].push(grid[i][j]) : obj['gridFive'] = [grid[i][j]]
        }
        if(i>2 && i<6 && j>5){
          obj['gridSix']? obj['gridSix'].push(grid[i][j]) : obj['gridSix'] = [grid[i][j]]
        }
        //bottom row
        if(i>5 && j<3){
          obj['gridSeven']? obj['gridSeven'].push(grid[i][j]) : obj['gridSeven'] = [grid[i][j]]
        }
        if(i>5 && j>2 && j<6){
          obj['gridEight']? obj['gridEight'].push(grid[i][j]) : obj['gridEight'] = [grid[i][j]]
        }
        if(i>5 && j>5){
          obj['gridNine']? obj['gridNine'].push(grid[i][j]) : obj['gridNine'] = [grid[i][j]]
        }

      }

    }

  }
  let keys = Object.keys(obj)
  for(let key of keys){
    let s = new Set(obj[key])
    if(obj[key].length != s.size) return false
  }
  return true
}

// let set = new Set([3])
// console.log(set)

console.log(sudoku2([
['.', '.', '.', '1', '4', '.', '.', '2', '.'],
['.', '.', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '1', '.', '.', '.', '.', '.', '.'],
['.', '6', '7', '.', '.', '.', '.', '.', '9'],
['.', '.', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '.', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['.', '.', '.', '5', '.', '.', '.', '7', '.']]))//true
console.log(sudoku2([
['.', '.', '.', '.', '2', '.', '.', '9', '.'],
['.', '.', '.', '.', '6', '.', '.', '.', '.'],
['7', '1', '.', '.', '7', '5', '.', '.', '.'],
['.', '7', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '8', '3', '.', '.', '.'],
['.', '.', '8', '.', '.', '7', '.', '6', '.'],
['.', '.', '.', '.', '.', '2', '.', '.', '.'],
['.', '1', '.', '2', '.', '.', '.', '.', '.'],
['.', '2', '.', '.', '3', '.', '.', '.', '.']]))//false
