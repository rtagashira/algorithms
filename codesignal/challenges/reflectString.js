// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// Define a string reflection as the result of applying the alphabet reflection to each of its characters.

// Reflect the given string.

const reflectString = (str) => {
  let min   = 'a'.charCodeAt(),
      max   = 'z'.charCodeAt(),
      final = ''
  
  for(let char of str){
      final += String.fromCharCode(min + max - char.charCodeAt())
  }
  return final
}

const reflectString = (str) => {
    let alpha   = 'abcdefghijklmnopqrstuvwxyz',
        reflect = [...alpha].reverse().join(''),
        final   = ''
    
    for(let i in str){
        let alphaI = alpha.indexOf(str[i])
        final += reflect[alphaI]
    }
    return final
}

console.log(reflectString("name"))//"mznv"
console.log(reflectString("abyz"))//"zyba"
console.log(reflectString("codesignal"))//"xlwvhrtmzo"