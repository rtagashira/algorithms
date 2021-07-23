// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

const checkIfPangram = (sentence) => new Set([...sentence]).size === 26

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))//true
console.log(checkIfPangram("leetcode"))//false