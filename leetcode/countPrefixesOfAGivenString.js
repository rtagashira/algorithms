// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

const countPrefixes = (words, s) =>{
    let count = 0
    for(let i=0;i<words.length;i++){
        if(s.indexOf(words[i]) === 0) count++
    }
    return count
}

console.log(countPrefixes(["a","b","c","ab","bc","abc"], s = "abc"))//3