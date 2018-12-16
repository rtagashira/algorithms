// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

function alphabeticShift2(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newStr = ''
  for(let i=0;i<str.length;i++){
    let index = alphabet.indexOf(str[i])
    if(alphabet[index]!='z'){
      newStr+= alphabet[index+1]
    }else{
      newStr+= 'a'
    }
  }
  return newStr
}
//-------------------------------------------------------------
function alphabeticShift(s) {
  var c="abcdefghijklmnopqrstuvwxyza"
  return s.replace(/./g,x=>c[c.indexOf(x)+1])
}

console.log(alphabeticShift("crazy"))//"dsbaz"