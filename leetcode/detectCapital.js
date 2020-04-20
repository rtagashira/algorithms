// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

const detectCapitalUse = (word) =>{
    if(word.length === 1) return true
    let first  = /[A-Z]/.test(word[0]), 
        second = /[A-Z]/.test(word[1])
    
    if(first && second){
        return !/[a-z]/.test(word.slice(2))
    }else if(first && !second){
        return !/[A-Z]/.test(word.slice(2))
    }else if(!first && !second){
        return !/[A-Z]/.test(word.slice(2))
    }else{
        return false
    }
}

console.log(detectCapitalUse('USA'))//true
console.log(detectCapitalUse("FlaG"))//false