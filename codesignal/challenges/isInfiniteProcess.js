// Given integers a and b, determine whether the following pseudocode results in an infinite loop

// while a is not equal to b do
//   increase a by 1
//   decrease b by 1
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

function isInfiniteProcess(a, b) {
  while(a != b){
      if(a > b) return true
      a++
      b--    
  }
  return false
}

console.log(isInfiniteProcess(2,6))//false
console.log(isInfiniteProcess(2,3))//true