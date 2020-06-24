// Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.

// Return a list of two integers [A, B] where:

// A and B are No-Zero integers.
// A + B = n
// It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

const getNoZeroIntegers = (n) =>{
    const noZero = (num) => num.toString().indexOf('0') < 0
    for(let i=1;i<n;i++){
        if(noZero(i) && noZero(n-i)) return [i,n-i]
    }
}

console.log(getNoZeroIntegers(2))//[1,1]
console.log(getNoZeroIntegers(11))//[2,9]
console.log(getNoZeroIntegers(10000))//[1,9999]