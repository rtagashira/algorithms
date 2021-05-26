// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

const isPowerOfFour = (n) =>{
    let x = 0
    while(4 ** x < n){
        x++
    }
    return 4 ** x === n
}