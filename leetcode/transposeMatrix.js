// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

const transpose = (matrix) =>{
    let arr = []
    for(let i=0;i<Math.max(matrix.length,matrix[0].length);i++){
        arr.push([])
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            arr[j][i] = matrix[i][j]
        }
    }

    while(arr[arr.length-1].length === 0){
        arr.pop()
    }

    return arr
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
                                                 //[[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1,2,3],[4,5,6]]))
                                                 //[[1,4],[2,5],[3,6]]
console.log(transpose([[5],[8]]))
                                    //[[5,8]]