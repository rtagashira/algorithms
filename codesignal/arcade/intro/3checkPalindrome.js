// Given the string, check if it is a palindrome.

//   Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

function checkPalindrome(str) {
  return str === str.split('').reverse().join('')
}

function checkPalindrome2(str) {
  let reverse = ''
  for (const letter of str) {
    reverse = letter + reverse
  }
  return str === reverse
}
console.log(checkPalindrome("asdf fdsa"))
console.log(checkPalindrome("asdf asdf"))