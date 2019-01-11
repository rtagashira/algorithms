// Given some integer, find the maximal number you can obtain by
//  deleting exactly one digit of the given number.

function deleteDigit(n) {
  let str = n.toString()
  let num = Number(str.slice(1))

  for(let i=0;i<str.length;i++){
    if(Number(str.slice(0,i)+str.slice(i+1))>num){
      num = Number(str.slice(0,i)+str.slice(i+1))
    }
  }
  return num
}
//-----------------------------------------------------------------
function deleteDigit(n) {
  s = n.toString()
  return Math.max(...[...Array(s.length).keys()].map(i=>Number(s.slice(0,i)+s.slice(i+1))))}
  
console.log(deleteDigit(152));//52
console.log(deleteDigit(1001));//101
