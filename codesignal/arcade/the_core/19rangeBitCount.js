// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b 
// inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

function rangeBitCount(a, b) {
  let arr = []
  for(let i=a;i<=b;i++){
    arr.push(i)
  }
  return arr.map(x=>x.toString(2)).join('').split('0').join('').length
}


console.log(rangeBitCount(2,7))//11
