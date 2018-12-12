// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine
//  have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some 
//  arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [
// [true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// minesweeper(matrix) = [
// [1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.array.boolean matrix

// A non - empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 100,
//   2 ≤ matrix[0].length ≤ 100.

//   [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring 
// cells.Two cells are called neighboring if they share at least one corner.


function minesweeper2(arr) {
  newArr = []
  for(let i=0;i<arr.length;i++){
    newArr.push([])
    for(let j=0;j<arr[0].length;j++){
      let count = 0
      if(i!=0){
        if(arr[i-1][j]){      //above
          count++
        }
        if(arr[i-1][j-1]){    //above left
          count++
        }
        if(arr[i-1][j+1]){    //above right
          count++
        }
      }
      if(i!=arr.length-1){
        if(arr[i+1][j]){      //below
          count++
        }
        if(arr[i+1][j-1]){    //below left
          count++
        }
        if(arr[i+1][j+1]){    //below right
          count++
        }
      }
      if(arr[i][j-1]){        //left
        count++
      }
      if(arr[i][j+1]){        //right
        count++
      }
      newArr[i].push(count)
    }
  }
  return newArr
}
//--------------------------------------------------
const directions = [
  [ 1,-1], [ 1, 0], [ 1, 1],
  [ 0,-1],          [ 0, 1],
  [-1,-1], [-1, 0], [-1, 1]
];

let minesweeper3 = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));
// ----------------------------------------------------
var dirs = [ { r: -1, c: -1 },
  { r: -1, c:  0 },
  { r: -1, c:  1 },
  { r:  0, c:  1 },
  { r:  0, c: -1 },
  { r:  1, c: -1 },
  { r:  1, c:  0 },
  { r:  1, c:  1 }];

function minesweeper(matrix) {
return matrix.map((a,r) => a.map((_,c) => dirs.reduce((p,v) => p+=(matrix[r+v.r]||[])[c+v.c]|0, 0)))
}

// console.log(minesweeper([[true, false, false], 
                        //  [false, true, false], 
                        //  [false, false, false]]))//[[1, 2, 1],[2, 1, 1],[1, 1, 1]]
// console.log(minesweeper([[true,false,false,true], 
                        //  [false,false,true,false], 
                        //  [true,true,false,true]]))//[[0,2,2,1], 
                                                      //[3,4,3,3], 
                                                      //[1,2,3,1]]
console.log(minesweeper([[false,true,true,false], 
                         [true,true,false,true], 
                         [false,false,true,false]]))//[[3,3,3,2], 
                                                     //[2,4,5,2], 
                                                     //[2,3,2,2]]

console.log(minesweeper([[true,false], 
                         [true,false], 
                         [false,true], 
                         [false,false], 
                         [false,false]]))//[[1,2], 
                                        // [2,3], 
                                         //[2,1], 
                                         //[1,1], 
                                         //[0,0]]