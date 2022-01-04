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
            for(let j=0;j<matrix[i].length;j++){
                if(matrix[i][j] === target) return true
            }
        i++
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
//             let l = 0
//             let r = matrix[i].length -1
//             let m = Math.floor(r/2)
//             while(l !== r){
//                 if(matrix[m] === target){
//                     return true
//                 }else if(target < matrix[m]){
//                     r = m
//                     m = Math.floor((m+l)/2)
//                 }else if(target > matrix[m]){
//                     l = m
//                     m = Math.ceil((r+m)/2)
//                 }
//                 // if( === r) return false
//             }
//         return false
//         // i++
//     }
//     return false
// }