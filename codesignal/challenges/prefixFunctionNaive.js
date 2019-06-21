// Return the value of prefix function for a given string.

// Given a string S of length n, prefix function produces an array P where for each i > 0, P[i] is the length of the longest substring ending with S[i] which is also a prefix of S, i.e. the maximal k such that S[j] = S[i - k + j + 1] for all 0 ≤ j < k. P[0] by definition equals to 0.

function prefixFunctionNaive(s) {
  let arr = [0]
  let i = 1
  let j = 0
  let matches = 0
  while(arr.length<s.length){
    if(s[i] === s[j]){
      matches++
      arr.push(matches)
      i++
      j++
    }else if(s[i] != s[j]){
      matches = 0
      arr.push(matches)
      i++
      j = 0
    }
  }
  return arr
}


console.log(prefixFunctionNaive("acacbab"))//[0, 0, 1, 2, 0, 1, 0]
console.log(prefixFunctionNaive("aaaaaaba"))//[0, 1, 2, 3, 4, 5, 0, 1]