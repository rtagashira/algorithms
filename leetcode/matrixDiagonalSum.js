// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

const diagonalSum = (arr) =>{
    let sum = 0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(i === j){
                sum += arr[i][j]
            }
            if(i + j === arr.length - 1){
                sum += arr[i][j]
            }
        }
    }
    if(arr.length % 2 != 0){
        let mid = Math.floor(arr.length/2)
        sum -= arr[mid][mid]
    }
    return sum
}

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))//25
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))//8
console.log(diagonalSum([[5]]))//5