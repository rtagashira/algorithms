// Check if the given matrix is an identity matrix.

// The identity matrix is the square matrix in which all the elements on the main diagonal are equal to 1 and all other elements are equal to 0.

// The main diagonal of a matrix is the diagonal which goes from the upper left corner of a matrix to its lower right corner.

let isIdentityMatrix = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(i === j){
                if(arr[i][j] !== 1) return false
            }else{
                if(arr[i][j] !== 0) return false
            }
        }
    }
    return true
}

console.log(isIdentityMatrix([
    [1,0,0], 
    [0,1,0], 
    [0,0,1]]))//true
console.log(isIdentityMatrix([
    [1,0,0], 
    [0,0,0], 
    [0,0,1]]))//false
console.log(isIdentityMatrix([
    [1,1,0], 
    [0,1,0], 
    [0,0,1]]))//false
console.log(isIdentityMatrix([
    [1,0], 
    [0,1]]))//true