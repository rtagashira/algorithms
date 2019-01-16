// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

function differentSquares(matrix) {
  let arr = []
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
      if(j!=matrix[0].length-1 && i!=matrix.length-1){
        let str = matrix[i][j].toString()+matrix[i][j+1].toString()+matrix[i+1][j].toString()+matrix[i+1][j+1].toString()
        if(arr.indexOf(str)<0){
          arr.push(str)
        }
      }
    }
  }
  return arr.length
}

function differentSquares(matrix) {
  let count = {}
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
      if(j!=matrix[0].length-1 && i!=matrix.length-1){
        let str = matrix[i][j].toString()+matrix[i][j+1].toString()+matrix[i+1][j].toString()+matrix[i+1][j+1].toString()
        count[str]?count[str]++:count[str]=1
      }
    }
  }
  return Object.keys(count).length
}

function differentSquares(matrix) {
  let count = new Set()
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
      if(j!=matrix[0].length-1 && i!=matrix.length-1){
        let str = matrix[i][j].toString()+matrix[i][j+1].toString()+matrix[i+1][j].toString()+matrix[i+1][j+1].toString()
        count.add(str)     
      }
    }
  }
  return count.size
}

console.log(differentSquares([[1, 2, 1],
                              [2, 2, 2],
                              [2, 2, 2],
                              [1, 2, 3],
                              [2, 2, 1]]));//6
