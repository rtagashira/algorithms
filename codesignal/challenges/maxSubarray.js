// Given an array of integers inputArray, find the contiguous subarray which has the maximum sum. Return that sum.

// A contiguous subarray of array A is a subset of array A consisting of consecutive elements.

// For example, if A = [0, 1, 2, 3], then [2, 3] is a contiguous subarray of A, but [0, 1, 3] and [2, 1] are not.

let maxSubarray = (arr) =>{
  const sum = (a) => a.reduce((p,n)=> p + n)
  let s = 0
  
  for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
          let temp = sum(arr.slice(i,j))
          if(temp > s) s = temp
      }
  }
  return s
}

console.log(maxSubarray([-1, 7, -2, 3, 4, 0, 1, -1]))//13
console.log(maxSubarray([-1, -2, -5, -1]))//0
console.log(maxSubarray([1, -1, 2, 3, -1]))//5