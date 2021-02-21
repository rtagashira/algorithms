// Given a string s, determine if it is valid.

// A string s is valid if, starting with an empty string t = "", you can transform t into s after performing the following operation any number of times:

// Insert string "abc" into any position in t. More formally, t becomes tleft + "abc" + tright, where t == tleft + tright. Note that tleft and tright may be empty.
// Return true if s is a valid string, otherwise, return false.

const isValid = s =>{
    while(s !== ''){
        let i = s.indexOf('abc')
        if(i === -1) return false
        let left = s.slice(0,i)
        let right = s.slice(i+3)
        s = left + right
    }
    return true
}

console.log(isValid("aabcbc"))//true
console.log(isValid("abcabcababcc"))//true
console.log(isValid("cababc"))//false