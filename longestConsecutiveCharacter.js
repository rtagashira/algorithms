// cs dojo
// https://www.youtube.com/watch?v=qRNB8CV3_LU
// find the longest consecutive character
// return object with character:count key/value pair


function longestConsecutiveCharacter(str){
  let count = 1
  let longestCount = 1
  let char = ''

  for(let i in str){
    if(str[i] === str[i-1]){
        count ++
        if(count > longestCount){
          char = str[i]
          longestCount = count
        }
    }else{
      count = 1
    }
  }
  return {[char]:longestCount}
}

console.log(longestConsecutiveCharacter('AABCDDBBBEA'))//{'B':3}
console.log(longestConsecutiveCharacter("ABAACDDDBBA"))//{'D':3}