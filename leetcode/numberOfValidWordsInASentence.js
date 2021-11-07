// A sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'), hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only. Each sentence can be broken down into one or more tokens separated by one or more spaces ' '.

// A token is a valid word if all three of the following are true:

// It only contains lowercase letters, hyphens, and/or punctuation (no digits).
// There is at most one hyphen '-'. If present, it must be surrounded by lowercase characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
// There is at most one punctuation mark. If present, it must be at the end of the token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
// Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".

// Given a string sentence, return the number of valid words in sentence.

const countValidWords = (str) =>{
    let arr = str.match(/\S+/g)
    let count = 0

    for(let word of arr){        
        if(/[0-9]/.test(word)) continue
        if(/[!?.,]/.test(word.slice(0,word.length-1))) continue
        if(/-/.test(word)){
            if(word.indexOf('-') != word.lastIndexOf('-')) continue
            if(!/[a-z]-[a-z]/.test(word)) continue
        }
        count++
    }
    return count
}

console.log(countValidWords("cat and  dog"))//3
console.log(countValidWords("!this  1-s b8d!"))//0
console.log(countValidWords("alice and  bob are playing stone-game10"))//5
console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."))//6