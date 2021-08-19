// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// const numOfStrings = (patterns, word) =>{
//     let count = 0
//     for(let str of patterns){
//         if(word.indexOf(str) >= 0) count++
//     }
//     return count
// }


const numOfStrings = (patterns, word) => patterns.reduce((acc,v)=>{
    if(word.indexOf(v) >= 0){
        return acc + 1
    }else{
        return acc
    }
},0)

console.log(numOfStrings(patterns = ["a","abc","bc","d"], word = "abc"))//3
console.log(numOfStrings(patterns = ["a","b","c"], word = "aaaaabbbbb"))//2