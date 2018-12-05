// Given a string, find out if its characters can be rearranged to form a palindrome.

//   Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(str) {
  let count = {}
  let singles = 0
  for(let char of str){
    count[char]?count[char]++:count[char] = 1
  }
  for(let letter in count){
    if(count[letter]%2!=0){
      singles ++
    }
  }
  return singles < 2
}
//---------------------------------------------------------------------------
function palindromeRearranging2(s) {
  var ss = s.split("").sort(), r = 0
  while (ss.length) {
    var t = ss.shift()
    if (t === ss[0]) ss.shift()
    else r++
  }
  return r < 2
}

function palindromeRearranging3(inputString) {
  return inputString.split('').sort().join('').replace(/(\w)\1/g, '').length < 2;
}

// function palindromeRearranging4(s){
//   //histogram the characters
//   m = []
//   for (c of s)
//     m[c] = -~m[c]
//   //count the unmatched characters
//   u = 0
//   for (x in m)
//     u += m[x] % 2

//   //confirm that the number of unmatched characters
//   //is the same as the oddness of the string
//   return u == s.length % 2
// }


console.log(palindromeRearranging("aabb"))//true
console.log(palindromeRearranging("abbcabb"))//true
console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"))//false