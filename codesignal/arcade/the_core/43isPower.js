// Determine if the given number is a power of some non-negative integer.

function isPower(n) {
  if(n===1)return true
  for(let i=2;i<=400;i++){
    for(let p=2;p<=20;p++){
      if(i**p===n){
        return true
      }
    }
  }
  return false
}

console.log(isPower(125))//true
console.log(isPower(72))//false
console.log(isPower(11))//false