// Return the value of Z-function for a given string.

// Given a string S of length N, Z-function produces an array Z, where Z[i] is the length of the longest substring starting from S[i] which is also a prefix of S, i.e. the maximal k such that S[j] = S[i+j] for all 0 ≤ j < k.

function zFunctionNaive(s) {
  let arr = []
  
  for(let i in s){
    const sub = s.slice(i)
  // if the first letters of the substring and the original string match, iterate through the substring
  // to find the length of the longest shared prefix string, breaking the loop when the matches stop.
  // Otherwise push 0 into the array.
    if(s[0] === sub[0]){
      let match
      for(let j=1;j<=sub.length;j++){
        if(sub.slice(0,j) === s.slice(0,sub.slice(0,j).length)){
          match = sub.slice(0,j)
        }else{
          break
        }
      }
      arr.push(match.length)
    }else{
      arr.push(0)
    }
  }
  return arr
}

console.log(zFunctionNaive("acacbab"))//[7, 0, 2, 0, 0, 1, 0]
console.log(zFunctionNaive("aaaaaaba"))//[8, 5, 4, 3, 2, 1, 0, 1]