// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

function reverseOnDiagonals(arr) {
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
      const x = arr.length-1-i
      if(i === j && i < arr.length/2){
        [arr[i][i],arr[x][x]] = [arr[x][x], arr[i][i]]
      }
      if(j === arr.length - 1 - i && i < arr.length/2){
        [arr[i][x],arr[x][i]] = [arr[x][i],arr[i][x]]
      }
    }
  }
  return arr
}
// diagonals are
// i === j
// [i][len-1-i]
console.log(reverseOnDiagonals([
  [43,455,32,103], 
  [102,988,298,981], 
  [309,21,53,64], 
  [2,22,35,291]]))
//[ [291,455,32,2], 
//  [102,53,21,981], 
//  [309,298,988,64], 
//  [103,22,35,43]]

console.log(reverseOnDiagonals([
  [1,2,3], 
  [4,5,6], 
  [7,8,9]]))
// [[9,2,7], 
//  [4,5,6], 
//  [3,8,1]]