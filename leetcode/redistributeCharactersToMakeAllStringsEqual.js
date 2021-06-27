// You are given an array of strings words (0-indexed).

// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

// Return true if you can make every string in words equal using any number of operations, and false otherwise.

const makeEqual = (arr) =>{
    let obj = {}
    for(let word of arr){
        for(let letter of word){
            obj[letter]? obj[letter]++ : obj[letter] = 1
        }
    }
    
    let values = Object.values(obj)
    return values.filter(x=> x % arr.length !== 0).length === 0
}

console.log(makeEqual(["abc","aabc","bc"]))//true
console.log(makeEqual(["ab","a"]))//false