// Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).

function extractMatrixColumn(matrix, column) {
  let arr = []

  for(let i in matrix){
    arr.push(matrix[i][column])
  }
  return arr
}

function extractMatrixColumn(matrix, column) {
  let arr = []

  for(let row of matrix){
    arr.push(row[column])
  }
  return arr
}

function extractMatrixColumn(matrix, column) {
  return matrix.reduce((acc,v)=>{
    return [...acc, v[column]]
  },[])
}

function extractMatrixColumn(matrix, column) {
  let arr = []
  matrix.forEach(x=>arr.push(x[column]))
  return arr
}

console.log(extractMatrixColumn([[1, 1, 1, 2], 
  [0, 5, 0, 4], 
  [2, 1, 3, 6]],2))//[1, 0, 3]