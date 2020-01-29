// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

const firstNotRepeatingCharacter = (s) =>{
    let obj = {}
    for(let char of s){
        obj[char]? obj[char]++ : obj[char] = 1
    }
    for(let char of s){
        if(obj[char] === 1) return char
    }
    return '_'
}

console.log(firstNotRepeatingCharacter("abacabad"))//'c'
console.log(firstNotRepeatingCharacter("abacabaabacaba"))//'_'
console.log(firstNotRepeatingCharacter("z"))//'z'
console.log(firstNotRepeatingCharacter("bcb"))//'c'