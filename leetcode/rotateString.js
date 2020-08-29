// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

const rotateString = (a, b) =>{
    if(a.length !== b.length) return false
    if(a === b) return true
    for(let i=0;i<b.length;i++){
        if(a.indexOf(b.slice(0,i+1)) < 0) return b.slice(i) + b.slice(0,i) === a
    }
}

console.log(rotateString('abcde', 'cdeab'))//true
console.log(rotateString('abcde', 'abced'))//false