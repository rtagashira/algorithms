// Given a string, delete whitespaces from it.

function deleteWhitespaces(str) {
  return str.split(' ').join('')
}

console.log(deleteWhitespaces("a b cd e"))//"abcde"