// Given a binary string s, return true if the longest contiguous segment of 1s is strictly longer than the longest contiguous segment of 0s in s. Return false otherwise.

// For example, in s = "110100010" the longest contiguous segment of 1s has length 2, and the longest contiguous segment of 0s has length 3.
// Note that if there are no 0s, then the longest contiguous segment of 0s is considered to have length 0. The same applies if there are no 1s.

const checkZeroOnes = (s) =>{
    let one = 0
    let tempO = 0
    let zero = 0
    let tempZ = 0
    for(let letter of s){
        if(letter === '1'){
            tempZ = 0
            tempO++
            if(tempO > one) one = tempO
        }else if(letter === '0'){
            tempO = 0
            tempZ++
            if(tempZ > zero) zero = tempZ
        }
    }
    return one > zero
}

console.log(checkZeroOnes("1101"))//true
console.log(checkZeroOnes("111000"))//false
console.log(checkZeroOnes("110100010"))//false