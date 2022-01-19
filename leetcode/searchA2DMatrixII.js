// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

const searchMatrix = (matrix, target) =>{
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0] <= target && target <= matrix[i][matrix[i].length-1]){
            let l = 0
            let r = matrix[i].length-1
            let m = Math.floor(r/2)
            
            while(l<=r){
                if(matrix[i][m] === target) return true
                if(target > matrix[i][m]){
                    l = m
                    m = Math.ceil((l + r) / 2)
                }else{
                    r = m
                    m = Math.floor((l + r) / 2)
                }
                if(l === r - 1 && matrix[i][l] !== target && matrix[i][r] !== target) break
            }
        }
    }
    return false
}

// const searchMatrix = (matrix, target) =>{
//     for(let i=0;i<matrix.length;i++){
//         if(matrix[i][0] <= target && target <= matrix[i][matrix[i].length-1]){
//             for(let j=0;j<matrix[i].length;j++){
//                 if(matrix[i][j] === target) return true
//             }
//         }
//     }
//     return false
// }

console.log(searchMatrix(matrix = [[1,4,7,11,15],[2,5,8,12,19],
    [3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5))//true
console.log(searchMatrix(matrix = [[1,4,7,11,15],[2,5,8,12,19],
    [3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20))//false