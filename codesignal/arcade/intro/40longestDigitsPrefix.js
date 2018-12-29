// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(str) {
  if(str[0]===' '||str.match(/^\D/)) return ''
  return str.match(/^\d+/).join()
}
//-----------------------------------------------------
function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/)[0]
}


console.log(longestDigitsPrefix("123aa1"))//"123"
console.log(longestDigitsPrefix("  3) always check for whitespaces"))//empty