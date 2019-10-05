// Consider the following ciphering algorithm:

//     For each character replace it with its code.
//     Concatenate all of the obtained numbers.

// Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

// Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

function decipher(str) {
  let final = '',
          i = 0,
          j = i
  while(i<str.length){
    let string = String.fromCharCode(str.slice(i,j))
    if(/[a-z]/.test(string)){
      final += string
      i = j
    }
    j++
  }
  return final
}

console.log(decipher("10197115121"))//'easy'
console.log(decipher("98"))//"b"
console.log(decipher("122"))//"z"
console.log(decipher("1229897"))//"zba"
console.log(decipher(
  "97989910010110210310410510610710810911011111211311411511611711811912012112297"))
  //"abcdefghijklmnopqrstuvwxyza"