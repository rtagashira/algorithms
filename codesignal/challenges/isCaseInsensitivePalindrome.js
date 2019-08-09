// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function isCaseInsensitivePalindrome(str) {
  return str.toUpperCase() === [...str.toUpperCase()].reverse().join('')
}

console.log(isCaseInsensitivePalindrome("AaBaa"))//true
console.log(isCaseInsensitivePalindrome("abac"))//false