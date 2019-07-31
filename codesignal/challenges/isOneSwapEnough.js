// Given a string, check if a palindrome can be obtained from it by at most one swap of some pair of characters.

function isOneSwapEnough(str) {
  const pal = s => s === [...s].reverse().join('')
  if(pal(str)) return true
  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
      let arr = [...str]
      if(arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        if(pal(arr.join('')))return true
      }
    }
  }
  return false
}
// for in loops and less characters
function isOneSwapEnough(s) {
  const p = s => s === [...s].reverse().join('')
  if(p(s)) return true
  for(let i in s){
    for(let j in s){
      let a = [...s]
      if(j>i){
        [a[i],a[j]] = [a[j],a[i]]
        if(p(a.join('')))return true
      }
    }
  }
  return false
}

console.log(isOneSwapEnough("aabaa"))//true
console.log(isOneSwapEnough("abab"))//true
console.log(isOneSwapEnough("abc"))//false
console.log(isOneSwapEnough("aaab"))//false