// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(str) {
  let prefix = ''
  let nonNum = false
  for(let char of str){
      if(!nonNum){
          if(char.match(/\d/)){
              prefix += char
          }else{
              nonNum = true
          }
      }
  }
  return prefix
}
console.log(longestDigitsPrefix('123aa1'))//"123"