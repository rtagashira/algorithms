// Given the sequence of integers seq, check if it is strictly increasing.

let checkIncreasingSequence = (arr) => {
  for(let i=1;i<arr.length;i++){
      if(arr[i] <= arr[i-1]) return false
  }
  return true
}

console.log(checkIncreasingSequence([1, 3, 8]))//true
console.log(checkIncreasingSequence([2, 2, 3]))//false
console.log(checkIncreasingSequence([2, 2]))//false
console.log(checkIncreasingSequence([1, 2, 4, 6, 11]))//true
console.log(checkIncreasingSequence([1, 3, 1, 2, 3]))//false