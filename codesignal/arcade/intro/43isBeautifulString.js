// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it 
// no more times than b; etc.

// Given a string, check whether it is beautiful.

function isBeautifulString2(str) {
  let count = {}
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for(let letter of str){                           //count frequency of letters
    count[letter]?count[letter]++:count[letter]=1
  }
  for(let i=0;i<alphabet.length;i++){     //iterate through alphabet, matching it with count
    if(!count['a'])return false                   // string must have 'a'
    if(count[alphabet[i]]>count[alphabet[i-1]]){  // any letter can't occur more than the previous
        return false
    }
    if(count[alphabet[i]] && alphabet[i]!='a'){   // if a letter is in the string, the letter before it 
      if(!count[alphabet[i-1]]){                  // in the alphabet must also occur in the string
        return false
      }
    }
  }
  return true
}
//----------------------------------------------------------------------------------------------
function isBeautifulString(inputString) {
  s = "abcdefghijklmnopqrstuvwxyz"
  for (i = 1; i < s.length; i++) {
      if (inputString.split(s[i]).length-1 > inputString.split(s[i-1]).length-1) {
          return false}}
  return true}


console.log(isBeautifulString("bbbaacdafe"))//true
console.log(isBeautifulString("aabbb"))//false
console.log(isBeautifulString("bbc"))//false
console.log(isBeautifulString("zaa"))//false