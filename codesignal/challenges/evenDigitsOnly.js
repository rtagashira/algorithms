// Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
  return [...n.toString()].every(x=>x%2===0)
}

function evenDigitsOnly(n) {
  for(let digit of n.toString()){
    if(digit % 2 != 0) return false
  }
  return true
}

function evenDigitsOnly(n) {
  while(n>0){
    let onesPlace = n % 10
    if(onesPlace % 2 != 0) return false
    n = Math.floor(n/10)
  }
  return true
}

console.log(evenDigitsOnly(248622))//true
console.log(evenDigitsOnly(642386))//false