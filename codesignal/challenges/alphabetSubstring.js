// Check whether the given string is a substring of the plaintext alphabet.

function alphabetSubstring(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet.indexOf(s) > -1
}

console.log(alphabetSubstring("efghi"))//true
console.log(alphabetSubstring("bde"))//false