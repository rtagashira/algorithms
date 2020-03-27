// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

const longestPalindrome = (s) =>{
    const obj = {}
    let count = 1
    for(let char of s){
        obj[char]? obj[char]++: obj[char] = 1
    }
    if(Object.keys(obj).length === 1) return s.length
    for(let key in obj){
        if(obj[key] > 1){
            if(obj[key] % 2 === 0){
                count += obj[key]
            }else{
                count += obj[key] - 1
            }
        }
    }
    return Math.min(count,s.length)
}

console.log(longestPalindrome("abccccdd"))//7
console.log(longestPalindrome("aaaa"))//4
console.log(longestPalindrome("tattarrattat"))//12