// You are given a string s consisting of n characters which are either 'X' or 'O'.

// A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

// Return the minimum number of moves required so that all the characters of s are converted to 'O'.

const minimumMoves = (s) =>{
    let count = 0
    let i = 0
    while(i<s.length){
        if(s[i] === 'O'){
            i++
        }else{
            count++
            i += 3
        }
    }
    return count
}

console.log(minimumMoves("XXX"))//1
console.log(minimumMoves("XXOX"))//2
console.log(minimumMoves("OOOO"))//0
console.log(minimumMoves("OXOX"))//1