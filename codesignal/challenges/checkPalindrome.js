// Given the string, check if it is a palindrome.

let checkPalindrome = (s) => s === [...s].reverse().join('')

console.log(checkPalindrome("aabaa"))//true
console.log(checkPalindrome("abac"))//false
console.log(checkPalindrome("a"))//true