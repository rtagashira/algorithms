// Given an integer, find the number of the ways to change exactly one digit in it in order to obtain a bigger integer.

function countWaysToChangeDigit(value) {
  return [...value.toString()].reduce((acc,v)=>{
    return acc += 9 - +v
  },0)
}

function countWaysToChangeDigit(value) {
  const str = value.toString()
  let ways = 0
  for(let num of str){
    ways += 9 - +num
  }
  return ways
}

function countWaysToChangeDigit(value) {
  let ways = 0
  while(value > 0){
    ways += 9 - value % 10
    value = Math.floor(value/10)
  }
  return ways
}

console.log(countWaysToChangeDigit(10))//17
console.log(countWaysToChangeDigit(32310))//36