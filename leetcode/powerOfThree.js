// Given an integer, write a function to determine if it is a power of three.

const isPowerOfThree = (n) =>{
    if(n === 1) return true
    let num   = 3
    while(num < n){
        num *= 3
    }
    return num === n
}

console.log(isPowerOfThree(27))//true
console.log(isPowerOfThree(0))//false
console.log(isPowerOfThree(9))//true