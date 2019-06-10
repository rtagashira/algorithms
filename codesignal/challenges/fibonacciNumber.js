// Given an integer index n, find the nth Fibonacci number.

function fibonacciNumber(n) {
  let arr = [1,1]
  while(!arr[n-1]){
    arr.push(arr[arr.length-1] + arr[arr.length-2])
  }
  return arr[n-1]
}

console.log(fibonacciNumber(13))//233