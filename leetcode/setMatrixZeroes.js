// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

const setZeroes = (matrix) =>{
    let setR = new Set()
    let setC = new Set()
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                setR.add(i)
                setC.add(j)
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(setR.has(i) || setC.has(j)) matrix[i][j] = 0
        }
    }
    return matrix
}

// const setZeroes = (matrix) =>{
//     let setR = new Set()
//     let setC = new Set()
    
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//             if(matrix[i][j] === 0){
//                 setR.add(i)
//                 setC.add(j)
//             }
//         }
//     }
    
//     for(let n of setR){
//         for(let j=0;j<matrix[0].length;j++){
//             matrix[n][j] = 0
//         }
//     }
//     for(let n of setC){
//         for(let i=0;i<matrix.length;i++){
//             matrix[i][n] = 0
//         }
//     }
//     return matrix
// }

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
                                                     //[[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
                                                        //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]