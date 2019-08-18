// Check if the given matrix is diagonal.

// In linear algebra, a square matrix is called a diagonal matrix if all entries outside the main diagonal are zero.

function isDiagonalMatrix(arr) {
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
      if(j != i){
        if(arr[i][j] != 0) return false 
      }
    }
  }
  return true
}

console.log(isDiagonalMatrix([
  [1, 0, 0], 
  [0, 5, 0], 
  [0, 0, 3]]))//true

console.log(isDiagonalMatrix([
  [1, 0, 0], 
  [0, 5, 0], 
  [2, 0, 3]]))//false