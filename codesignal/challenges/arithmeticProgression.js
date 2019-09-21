// Given the first two elements of an arithmetic progression, find its nth element.
// A sequence is called an arithmetic progression if its elements are evenly spaced, i.e. the difference between any two consecutive elements is the same.

let arithmeticProgression = (el1, el2, n) =>{
  let diff = el2 - el1
  return el1 + (n-1) * diff
}

console.log(arithmeticProgression(3,2,4))//0
console.log(arithmeticProgression(2,2,10000))//2