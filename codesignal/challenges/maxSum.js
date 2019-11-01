// For a given array of integers find the maximum sum of consecutive terms of that array. For example, for arr = [3,4,-10,4,5,7,-20,5,1], maxSum(arr) = 16, because 4 + 5 + 7 = 16.


let maxSum = (arr) => {
  let s = 0
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<=arr.length;j++){
      let sum = (a) => a.reduce((prev,next)=>prev+next),
      newSum = sum(arr.slice(i,j))
      if(newSum>s) s = newSum
    }
  }
  return s
}

console.log(maxSum([1, 2, 3]))//6
console.log(maxSum([-5, -10, 20, 15, 8, -8, 10, -50]))//45