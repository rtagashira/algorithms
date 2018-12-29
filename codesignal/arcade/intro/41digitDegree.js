// Let's define digit degree of some positive integer as the number of times we need to replace 
// this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

function digitDegree(n) {
  if(n.toString().length===1)return 0
  function add(num){
    return num.toString().split('').reduce((p,c)=>+p+(+c))
  }

  let count = 1
  let newN = add(n)
  while(newN.toString().length!=1){
    count++
    newN = add(newN)
  }
  return count
}
//---------------------------------------------------------------
function digitDegree(n) {
  c = 0
  while (n.toString().length>1) {
      n = n.toString().split("").reduce((x,y)=>Number(x)+Number(y))
      c++}
  return c}

console.log(digitDegree(5))//0
console.log(digitDegree(100))//1
console.log(digitDegree(91))//2
