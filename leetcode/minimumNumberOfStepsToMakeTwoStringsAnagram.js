// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

const minSteps = (s, t) =>{
    let obj = {}
    let count = 0
    for(let char of t){
        obj[char]? obj[char]++ : obj[char] = 1
    }
    for(let char of s){
        if(obj[char]){
            count++
            obj[char]--
        }
    }
    return t.length - count
}

console.log(minSteps(s = "bab", t = "aba"))//1
console.log(minSteps(s = "leetcode", t = "practice"))//5
console.log(minSteps(s = "anagram", t = "mangaar"))//0