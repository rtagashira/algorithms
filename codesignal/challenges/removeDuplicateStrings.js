// Remove all duplicates from an already sorted (in lexicographical order) array of strings.

const removeDuplicateStrings = (arr) => [...new Set(arr)]

console.log(removeDuplicateStrings(
["a", 
"a", 
"ab", 
"ab", 
"abc"]))//["a", "ab", "abc"]
console.log(removeDuplicateStrings(["a", "a", "a"]))//["a"]