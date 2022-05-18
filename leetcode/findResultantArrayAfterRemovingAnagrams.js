// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

// Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

const removeAnagrams = (words) =>{
    let obj = {}
    let arr = []
    for(let i=0;i<words.length;i++){
        obj[i] = [...words[i]].sort().join('')
    }
    
    for(let i=words.length-1;i>=0;i--){
        if(obj[i] != obj[i-1] || i === 0){
            arr.unshift(words[i])
        }
    }
    return arr
}

console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))//["abba","cd"]
console.log(removeAnagrams(["a","b","a"]))//["a","b","a"]