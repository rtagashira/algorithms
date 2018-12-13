// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.

function evenDigitsOnly2(n) {
  let str = n.toString()
  for(let char of str){
    if(char%2!=0){return false}
  }
  return true
}
function evenDigitsOnly3(n) {
  return n.toString().split('').filter(x=>x%2!=0).length === 0
}
function evenDigitsOnly4(n) {
  return n.toString().split('').reduce((p,c,i,arr)=>c%2!=0?false:p,true)
}
function evenDigitsOnly(num){
  return num.toString().split('').every((v)=>v%2===0)
}
//-----------------------------------------------------------------------------------------
function evenDigitsOnly5(n) {
  return !(n+'').match(/[13579]/)
  }

  function evenDigitsOnly6(n) {
    while(n > 0){
        if((n%10)%2==1){
            return false
        }
        n = Math.floor(n/10)
    }
    return true
}
console.log(evenDigitsOnly(248622))
console.log(evenDigitsOnly(642386))



