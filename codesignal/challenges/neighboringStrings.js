// We will call two strings "neighbours" if they contain the same characters (maybe in a different order). You are given two strings of the same length consisting of lowercase english letters. In one move you can remove any letter from one of the two strings. Calculate the minimum number of moves necessary to make these strings "neighbours".


function neighbouringStrings(s1, s2) {
  const count1 = {}
  const count2 = {}
  let moves = 0
  let arr = []
  // count letters in two objects
  for(let i=0;i<s1.length;i++){
    count1[s1[i]]? count1[s1[i]]++: count1[s1[i]] = 1
    count2[s2[i]]? count2[s2[i]]++: count2[s2[i]] = 1
  }
  //iterate over each object to find differences
  //use array to keep track of letters already done
  for(let char in count1){
    if(!count2[char]){
      moves += count1[char]
    }else if(arr.indexOf(char) === -1){
      arr.push(char)
      moves += Math.abs(count1[char] - count2[char])
    }
  }

  for(let char in count2){
    if(!count1[char]){
      moves += count2[char]
    }else if(arr.indexOf(char) === -1){
      arr.push(char)
      moves += Math.abs(count1[char] - count2[char])
    }
  }
  return moves
}

console.log(neighbouringStrings("abbca","acbcc"))//4
console.log(neighbouringStrings("abac","abcs"))//2
console.log(neighbouringStrings("aaass","sssaa"))//2
console.log(neighbouringStrings("abc","abc"))//0
console.log(neighbouringStrings("a","c"))//2


//===========================================
// function neighbouringStrings(s, n) {
//   for (i in s)
//     n = n.replace(s[i], '')
//   return 2 * n.length
// }
