// Given a rectangular matrix of integers and integers n and m, we are looking for the submatrix of size n × m that has the maximal sum among all submatrices of the given size.

function maxSubmatrixSum(arr, h, w) {
  let result
  const arrHeight = arr.length
  const arrWidth = arr[0].length
  let curHeight = 0
  let curWidth = 0
  let tempSum = 0

  while(curHeight + h <= arrHeight){
    while(curWidth + w <= arrWidth){
      tempSum = 0
      for(let i = curHeight; i < curHeight + h; i++){
        for(let j = curWidth; j < curWidth + w; j++){
            tempSum += arr[i][j]
        }
      }
      if(result === undefined){
        result = tempSum
      }else if(tempSum > result){
        result = tempSum
      }
      curWidth ++
    }
    curHeight ++
    curWidth = 0
  }

  return result
}

console.log(maxSubmatrixSum([
  [1, 12, 11, 10], 
  [4,  3,  2,  9], 
  [5,  6,  7,  8]],2,1))//19
console.log(maxSubmatrixSum([
  [1,2,-1], 
  [-4,-8,3]]
 ,2,2))//-4
console.log(maxSubmatrixSum([[0,-1]],1,1))//0

console.log(maxSubmatrixSum([
  [1,2,1,3], 
  [1,1,1,1], 
  [2,2,2,2]],3,2))//10