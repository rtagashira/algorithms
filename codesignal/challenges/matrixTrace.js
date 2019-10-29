// Given a matrix, find its trace.

// In linear algebra, the trace of a square matrix is defined as the sum of the elements on the main diagonal.

// The main diagonal of a matrix is the diagonal which goes from the upper left corner of a matrix to its lower right corner.

let matrixTrace = (a) => {
  let s = 0
  for(let i in a){
      s += a[i][i]
  }
  return s
}

let matrixTrace = (a) => {
  let s = 0
  for(let i=0;i<a.length;i++){
    s += a[i][i]
  }
  return s
}

let matrixTrace = (arr) => {
    let sum = 0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(i === j) sum += arr[i][j]
        }
    }
    return sum
}

console.log(matrixTrace([[1,1,1], 
  [0,5,0], 
  [2,1,3]]))//9
console.log(matrixTrace([[0,1,1], 
  [0,0,0], 
  [2,1,0]]))//0