// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

const fib = (n) =>{
    let arr = [0,1]
    if(n < arr.length) return arr[n]
    while(arr.length <= n){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr[arr.length-1]
}

console.log(fib(2))//1
console.log(fib(3))//2
console.log(fib(4))//3