// csdojo
// https://www.youtube.com/watch?v=GJdiM-muYqc
// Find the first recurring character in the given string

function firstRecurringChar(str){
  let count = {}
  for(let letter of str){
    count[letter]?count[letter]++:count[letter]=1
    if(count[letter]>1)return letter
  }
  return null
}

console.log(firstRecurringChar('abca'))//'a'
console.log(firstRecurringChar('abcba'))//'b'
console.log(firstRecurringChar('abccba'))//'c'
console.log(firstRecurringChar('abc'))//null