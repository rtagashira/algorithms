// Determine if it is possible to rearrange the characters in a string to obtain another string.

// Example

// For word1 = "abc" and word2 = "cab", the output should be
// symbolsPermutation(word1, word2) = true;
// For word1 = "aaaa" and word2 = "aaa", the output should be
// symbolsPermutation(word1, word2) = false.

function symbolsPermutation(word1, word2) {
  const obj1 = {}
  const obj2 = {}

  if(word1.length != word2.length){
    return false
  }

  for(let i=0;i<word1.length;i++){
    obj1[word1[i]]? obj1[word1[i]]++: obj1[word1[i]] = 1
    obj2[word2[i]]? obj2[word2[i]]++: obj2[word2[i]] = 1
  }
  
  for(let key in obj1){
      if(obj2[key] != obj1[key]){
        return false
      }
  }
  return true
}

console.log(symbolsPermutation('abc','cab'));//true
console.log(symbolsPermutation('aaaa','aaa'));//false
console.log(symbolsPermutation('sutr','cybk'));//false
console.log(symbolsPermutation('ryqa','ayrq'));//true