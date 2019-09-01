// Given an array of integers, remove all of the duplicates

let deDup = (a) => [...new Set(a)]

console.log(deDup([1, 2, 3, 3, 3, 3, 3]))//[1, 2, 3]
console.log(deDup([1, 1, 1]))//[1]