// Determine whether the given number n is a power of two.

const isPowerOfTwo2 = (n) =>{
    for(let i=0;i<100;i++){
        if(2**i===n) return true
    }
    return false
}

console.log(isPowerOfTwo2(64))//true
console.log(isPowerOfTwo2(5))//false
console.log(isPowerOfTwo2(1))//true
console.log(isPowerOfTwo2(16))//true