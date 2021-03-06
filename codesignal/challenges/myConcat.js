// Concatenate given strings using a specific separator.

function myConcat(strings, separator) {
  return strings.join(separator) + separator
}

function myConcat(strings, separator) {
  return strings.reduce((acc,v)=>acc + v + separator,'')
}

function myConcat(strings, separator) {
  let str = ''
  for(let word of strings){
    str += word + separator
  }
  return str
}

console.log(myConcat(["Code", "Fight", "On", "!"],'/'))//"Code/Fight/On/!/"