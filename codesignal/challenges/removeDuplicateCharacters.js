// Remove all characters from a given string that appear more than once in it.

function removeDuplicateCharacters(str) {
  let s = ''
  for(let char of str){
    if(str.indexOf(char) === str.lastIndexOf(char)){
      s += char
    }
  }
  return s
}

console.log(removeDuplicateCharacters("zaabcbd"))//"zcd"
console.log(removeDuplicateCharacters("zzzzzzz"))//""