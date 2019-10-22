// Given array of integers, remove each kth element from it.

const extractEachKth = (inputArray, k) => inputArray.filter((x,i)=> (i+1) % k !== 0)

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3))//[1, 2, 4, 5, 7, 8, 10]
console.log(extractEachKth([1, 2, 1, 2, 1, 2, 1, 2],2))//[1, 1, 1, 1]
console.log(extractEachKth([2, 4, 6, 8, 10],2))//[2, 6, 10]