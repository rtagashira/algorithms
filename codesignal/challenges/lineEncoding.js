// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function lineEncoding(str) {
  return str.match(/(.)\1*/g)
            .map(x=>x.length>1? x.length + x[0]: x[0])
            .join('')
}

function lineEncoding(str) {
  let newStr = ''
  let char = str[0]
  let count = 0
  for(let i=0;i<str.length;i++){
    if(char != str[i]){
      char = str[i]
      count > 1? newStr += count + str[i-1] : newStr += str[i-1]
      count = 1
    }else{
      count ++
    }
    if(i === str.length - 1){
      count > 1? newStr += count + str[i] : newStr += str[i]
    }
  }
  return newStr
}

console.log(lineEncoding("aabbbc"))//"2a3bc"