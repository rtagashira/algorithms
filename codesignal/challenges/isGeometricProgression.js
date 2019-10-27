// Given a sequence determine if it's a geometric progression or not.

// A geometric progression is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number.

let isGeometricProgression = (arr) => {
  let m = arr[1] / arr[0]
  return arr.findIndex((x,i)=> x/arr[i-1] !== m && i !== 0) < 0
}

let isGeometricProgression = (arr) => {
  let m = arr[1] / arr[0]
  for(let i=1;i<arr.length;i++){
    if(arr[i] / arr[i-1] !== m) return false
  }
  return true
}

console.log(isGeometricProgression([1, 4, 16]))//true
console.log(isGeometricProgression([2, 4, 8, 17, 34]))//false
console.log(isGeometricProgression([27, 9, 3, 1]))//true