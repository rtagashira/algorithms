// Given an array arr, swap its first and last elements and return the resulting array.

function firstReverseTry(arr) {
  if(arr.length <2) return arr
  let first = arr.shift()
  let last = arr.pop()
  return [last,...arr,first]
}

function firstReverseTry(arr) {
  if(arr.length>1){
    return [arr[arr.length-1],...arr.slice(1,arr.length-1),arr[0]]
  }
  return arr
}
//-------------------------------------------------------------------------------
// function firstReverseTry4(arr) {
//   return arr.length>1?arr.slice(-1).concat(arr.slice(1,-1)).concat(arr[0]):arr}

console.log(firstReverseTry([1, 2, 3, 4, 5]))//[5, 2, 3, 4, 1]
console.log(firstReverseTry([]))
console.log(firstReverseTry([1]))