// Given a rectangular matrix consisting of zeroes, replace each zero with the number of neighboring cells for that cell.
// Two elements of a matrix are considered neighboring if their indices are equal on one axis and differ by one on the other axis.

let neighboringCells = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            let count = 0
            if(j > 0){
                if(arr[i][j-1] === 0 || arr[i][j-1]) count++
            }
            if(j < arr[0].length - 1){
                if(arr[i][j+1] === 0 || arr[i][j+1]) count++
            }
            if(i > 0){
                if(arr[i-1][j] === 0 || arr[i-1][j]) count++
            }
            if(i < arr.length - 1){
                if(arr[i+1][j] === 0 || arr[i+1][j]) count++
            }
            arr[i][j] = count
        }
    }
    return arr
}

console.log(neighboringCells([
  [0,0,0], 
  [0,0,0], 
  [0,0,0]]))//[[2,3,2], [3,4,3], [2,3,2]]
console.log(neighboringCells([[0,0,0]]))//[[1,2,1]]
console.log(neighboringCells([
  [0], 
  [0], 
  [0], 
  [0]]))//[[1], [2], [2], [1]]