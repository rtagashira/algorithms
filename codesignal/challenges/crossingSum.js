// Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.

let crossingSum = (matrix, a, b) =>{
    let loop = Math.max(matrix[a].length,matrix.length),
        sum  = 0
    for(let i=0;i<loop;i++){
        if(i < matrix[a].length){
            sum += matrix[a][i]
        }
        if(i < matrix.length){
            if(i !== a){
                sum += matrix[i][b]
            }
        }
    }
    return sum
}

// let crossingSum = (matrix, a, b) =>{
//   let sum = 0
//   for(let i in matrix[a]){
//       sum += matrix[a][i]
//   }
//   for(let i=0;i<matrix.length;i++){
//       if(i !== a) sum += matrix[i][b]
//   }
//   return sum
// }

console.log(crossingSum([
  [1,1,1,1], 
  [2,2,2,2], 
  [3,3,3,3]],1,3))//12
console.log(crossingSum([
  [1,1], 
  [1,1]],0,0))//3
console.log(crossingSum([
  [1,1], 
  [3,3], 
  [1,1], 
  [2,2]],3,0))//9