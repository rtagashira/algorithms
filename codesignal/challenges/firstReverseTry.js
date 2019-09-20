// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

let firstReverseTry = (arr) =>{
  if(arr.length === 0) return arr;
  [arr[0],arr[arr.length-1]] = [arr[arr.length-1], arr[0]]
  return arr
}

let firstReverseTry = (arr) =>{
  if(arr.length <= 1) return arr;
  return [arr[arr.length-1],...arr.slice(1,-1),arr[0]]
}

console.log(firstReverseTry([1, 2, 3, 4, 5]))//[5, 2, 3, 4, 1]
console.log(firstReverseTry([]))//[]
console.log(firstReverseTry([239]))//[239]
console.log(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]))//[324, 54, 12, 3, 4, 56, 23, 12, 5, 23]