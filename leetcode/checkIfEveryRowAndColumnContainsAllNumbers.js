// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

const checkValid = (matrix) =>{
    let obj = {}
    let obj2= {}
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            if(matrix[i][j] < 1 || matrix[i][j] > matrix.length) return false
            if(obj[i]){
                if(obj[i].has(matrix[i][j])){
                    return false
                }else{
                    obj[i].add(matrix[i][j])
                }
            }else{
                obj[i] = new Set([matrix[i][j]])
            }
            
            if(obj2[j]){
                if(obj2[j].has(matrix[i][j])){
                    return false
                }else{
                    obj2[j].add(matrix[i][j])
                }
            }else{
                obj2[j] = new Set([matrix[i][j]])
            }
        }
    }
    return true
}

console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]]))//true
console.log(checkValid([[1,1,1],[1,2,3],[1,2,3]]))//false