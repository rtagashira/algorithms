// For a given integer n, return the shortest possible list of distinct Fibonacci numbers that sum up to n, sorted in ascending order.

let fibonacciSum = (n) => {
  let fib = [0,1]
  // create fib sequence up to n
  while(fib[fib.length - 1] < n){
      fib.push(fib[fib.length - 1] + fib[fib.length -2])
  }
  
  //backwards loop to find sequence
  let sum = (arr) => arr.reduce((prev,next)=>prev + next),
      arr = []
  for(let i=fib.length-1;i>0;i--){
      if(sum([fib[i],...arr]) <= n){
          arr.unshift(fib[i])
          if(sum(arr) === n) return arr
      }
  }
}

console.log(fibonacciSum(20))//[2,5,13]
console.log(fibonacciSum(21))//[21]
console.log(fibonacciSum(33))//[1, 3, 8, 21]