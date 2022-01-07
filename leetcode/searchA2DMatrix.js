// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = (matrix, target) =>{
    let i = 0
    while(i < matrix.length){
        if(target < matrix[i][0]) return false
        if(target > matrix[i][matrix[i].length-1]){
            i++
            continue
        }
        let l = 0
        let r = matrix[i].length - 1
        let m = Math.floor(r/2)
        while(l <= r){
            if(matrix[i][m] === target){
                return true
            }else if(target < matrix[i][m]){
                r = m
                m = Math.floor((r+l)/2)
            }else if(target > matrix[i][m]){
                l = m
                m = Math.ceil((r+m)/2)
            }
            if(l === r - 1 && matrix[i][l] !== target && matrix[i][r] !== target) return false
        }
    }
    return false
}

// const searchMatrix = (matrix, target) =>{
//     let i = 0
//     while(i < matrix.length){
//         if(target < matrix[i][0]) return false
//         if(target > matrix[i][matrix[i].length-1]){
//             i++
//             continue
//         }
//             for(let j=0;j<matrix[i].length;j++){
//                 if(matrix[i][j] === target) return true
//             }
//         i++
//     }
//     return false
// }

console.log(searchMatrix(matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3))//true
console.log(searchMatrix(matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13))//false