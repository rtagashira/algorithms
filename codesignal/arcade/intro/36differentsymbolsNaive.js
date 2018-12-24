// Given a string, find the number of different characters in it.

function differentSymbolsNaive2(s) {
  let count = {}
  let charCount = 0
  for(let letter of s){
    count[letter]? count[letter]++:count[letter]=1
  }
  for(let char in count){
    charCount++
  }
  return charCount
}

function differentSymbolsNaive3(s) {
  let count = {}
  for(let letter of s){
    count[letter]?count[letter]++:count[letter]=1
  }
  return Object.keys(count).length
}

//-----------------------------------------------------------
function differentSymbolsNaive(s) {
  return new Set(s).size
}
console.log(differentSymbolsNaive("cabca"))//3