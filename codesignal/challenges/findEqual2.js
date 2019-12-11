// Given unsorted array of integers, check if it contains at least two equal numbers.

const findEqual = (arr) => new Set(arr).size !== arr.length

console.log(findEqual([1, 3, 2, 1]))//true
console.log(findEqual([1, 3, 2]))//false
console.log(findEqual([1, 4, 10, 4, 2]))//true