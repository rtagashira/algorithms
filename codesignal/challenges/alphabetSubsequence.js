// Check whether the given string is a subsequence of the plaintext alphabet.

function alphabetSubsequence(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for(let letter of s){
    const i = alphabet.indexOf(letter)
    if(i > -1){
      alphabet = alphabet.slice(i + 1)
    }else{
      return false
    }
  }
  return true
}

function alphabetSubsequence(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let j = 0
  for(let i=0;i<alphabet.length;i++){
    if(j === s.length - 1 && s[j] === alphabet[i]) return true
    if(alphabet[i] === s[j]) j++
  }
  return false
}

console.log(alphabetSubsequence("effg"))//false
console.log(alphabetSubsequence("cdce"))//false
console.log(alphabetSubsequence("ace"))//true
console.log(alphabetSubsequence("bxz"))//true