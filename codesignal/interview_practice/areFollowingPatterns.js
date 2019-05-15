// Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

function areFollowingPatterns(strings, patterns) {
  // creating an object matching strings:patterns
  let obj = {}
  for(let i=0;i<strings.length;i++){
    obj[strings[i]] = patterns[i]
  }
  // reiterate to see if the pattern is violated
  for(let i=0;i<strings.length;i++){
    if(obj[strings[i]] != patterns[i]){
      return false
    }
  }
  // use sets to make sure each string has a unique pattern value
  let keysSet = new Set(strings)
  let valuesSet = new Set(patterns)
  if(keysSet.size != valuesSet.size){
    return false
  }
  return true
}

console.log(areFollowingPatterns(["cat", "dog", "dog"],["a", "b", "b"]))// true
console.log(areFollowingPatterns(["cat", "dog", "doggy"],["a", "b", "b"]))// false
console.log(areFollowingPatterns(["cat", "dog", "dog"],["a", "b", "c"]))// false