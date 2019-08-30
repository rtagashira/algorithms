// You are given an array of integers inputArray. Consider all its contiguous subarrays of length k and pick the one with the maximum sum. If there are several contiguous subarrays with the maximum sum, pick the leftmost one. Put the 0-based index of the first (leftmost) element of that subarray into result[k - 1]. Do this for all k from 1 up to the length of the inputArray. Return result.

function maxSumSegments(arr) {
  const sum = (a)=>a.reduce((acc,v)=>acc + v)
  let l = 1 //length of the subarray to sum
  let final = []
  let tempSum
  let index

  while(l<=arr.length){
    for(let i=0;i<=arr.length-l;i++){
      let subArrSum = sum(arr.slice(i,i+l))
      if(tempSum === undefined || subArrSum > tempSum){
        tempSum = subArrSum
        index = i
      }
    }
    final.push(index)
    l++
    tempSum = undefined
    index = undefined
  }
  return final
}

console.log(maxSumSegments([-1, 2, 1, 3, -2]))//[3, 2, 1, 0, 0]
console.log(maxSumSegments([3, -3, 2, 2, 1, -5, 0]))//[0, 2, 2, 0, 0, 0, 0]
console.log(maxSumSegments([-1, -1, -1, -1]))//[0, 0, 0, 0]