// Change the capitalization of all letters in a given string.

function swapCase(text) {
  let str = ''
  for(let char of text){
    if(char.match(/[a-z]/)){
      str += char.toUpperCase()
    }else{
      str += char.toLowerCase()
    }
  }
  return str
}

function swapCase(text) {
  let str = ''
  for(let char of text){
    /[a-z]/.test(char)? str += char.toUpperCase(): str += char.toLowerCase()
  }
  return str
}

console.log(swapCase("Hello"))//"hELLO"