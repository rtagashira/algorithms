// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

let longestWord = (str) => str.match(/[a-zA-Z]+/g).reduce((acc,v)=>v.length>acc.length?v:acc)

console.log(longestWord("Ready, steady, go!"))//"steady"
console.log(longestWord("Ready[[[, steady, go!"))//"steady"
console.log(longestWord("To be or not to be"))//"not"
console.log(longestWord("You are the best!!!!!!!!!!!! CodeFighter ever!"))//"CodeFighter"