// Determine if the given number is a power of some non-negative integer.

let isPower = (n) =>{
  if(n === 1) return true
  for(let i=2;i<=Math.ceil(Math.sqrt(n));i++){
      let p = 2
      while(i ** p <= n){
          if(i ** p === n) return true
          p++
      }
  }
  return false
}

console.log(isPower(125))//true
console.log(isPower(72))//false
console.log(isPower(100))//true
console.log(isPower(11))//false
console.log(isPower(324))//true