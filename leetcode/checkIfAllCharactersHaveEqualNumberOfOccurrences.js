// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

const areOccurrencesEqual = (s) =>{
    let obj = {}
    for(let char of s){
        obj[char]? obj[char]++ : obj[char] = 1
    }
    return new Set(Object.values(obj)).size === 1
}

console.log(areOccurrencesEqual("abacbc"))//true
console.log(areOccurrencesEqual("aaabb"))//false