// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

function arrayMaxConsecutiveSum(arr, k) {
  if(k===1)return Math.max(...arr)
  let firstSum = arr.slice(0,k).reduce((p,c)=>p+c)
  let total = 0

  for(let i=1;i<=arr.length-k;i++){
      firstSum -= arr[i-1] 
      firstSum += arr[i+k-1]
    if(firstSum>total){
      total = firstSum
    }
  }
  return total
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6],2))//8
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4],3))//9