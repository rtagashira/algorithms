// Given an integer, write a function to determine if it is a power of two.

const isPowerOfTwo = (n) =>{
    if(n <= 0) return false
    for(let i=0;i<=n;i++){
        if(2 ** i === n){
            return true
        }else if(2 ** i > n){
            return false
        }
    }
}