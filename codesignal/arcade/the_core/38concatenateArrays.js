// Given two arrays of integers a and b, obtain the array formed by the elements of a
//  followed by the elements of b.

function concatenateArrays(a, b) {
  return [...a,...b]
}
function concatenateArrays(a, b) {
  return a.concat(b)
}

console.log(concatenateArrays([2, 2, 1],[10, 11]))//[2, 2, 1, 10, 11]