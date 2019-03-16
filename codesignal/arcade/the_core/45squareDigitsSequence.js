// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits 
// of the previous element. The sequence ends once an element that has already been in the sequence appears 
// again.

// Given the first element a0, find the length of the sequence.

function squareDigitsSequence(n) {
  let set = new Set([n])
  let dup = false

  function newN(num){
    let sum = 0
    let arr = num.toString().split('').map(x=>x**2)
    for(let number of arr){
      sum+= number
    }
    return sum
  }

  while(dup === false){
    n = newN(n)
    if(set.has(n)) dup = true
    set.add(n)
  }
  return set.size + 1
}

console.log(squareDigitsSequence(16))//9
console.log(squareDigitsSequence(103))//4
console.log(squareDigitsSequence(1))//2
console.log(squareDigitsSequence(612))//16
