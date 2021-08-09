// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

const isPrefixString = (s, words) =>{
    let temp = ''
    for(let word of words){
        temp += word
        if(temp === s) return true
    }
    return false
}

console.log(isPrefixString(s = "iloveleetcode", words = ["i","love","leetcode","apples"]))//true
console.log(isPrefixString(s = "iloveleetcode", words = ["apples","i","love","leetcode"]))//false