// Given a matrix, find its transpose.
// The transpose of an m × n matrix is the n × m matrix formed by turning rows into columns and vice versa.

function matrixTransposition(arr){
  let final = [...'x'.repeat(arr[0].length)]
  for(let row in final){
    final[row] = [...'x'.repeat(arr.length)]
  }
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
      final[j][i] = arr[i][j]
    }
  }
  return final
}

function matrixTransposition(arr){
  let final = [...'x'.repeat(arr[0].length)]
  for(let row in final){
    final[row] = [...'x'.repeat(arr.length)]
  }
  for(let i in arr){
    for(let j in arr[0]){
      final[j][i] = arr[i][j]
    }
  }
  return final
}

console.log(matrixTransposition([[1, 1, 3], 
                                 [2, 1, 1]]))
  //[[1, 2],
  // [1, 1],
  // [3, 1]]
console.log(matrixTransposition([[1,1,1], 
                                [0,0,0]]))
// [[1,0], 
//  [1,0], 
//  [1,0]]