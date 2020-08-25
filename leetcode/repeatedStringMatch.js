// Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".

// Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

// Note:
// The length of A and B will be between 1 and 10000.

const repeatedStringMatch = (a,b) =>{
    let repeat = 1,
        str = a,
        letterCount = new Set([...b]).size
    if(a.indexOf(b) > -1) return repeat
    while(str.length <= b.length * 2 || repeat <= letterCount){
        repeat++
        str += a
        if(str.indexOf(b) > -1) return repeat
    }
    return -1
}

console.log(repeatedStringMatch("abcd","cdabcdab"))//3
console.log(repeatedStringMatch("abc","cabcabca"))//4
console.log(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab","ba"))//2