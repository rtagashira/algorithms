// Given two sorted arrays of integers and an integer n, find the nth (0-based) element of their sorted union.

const twoArraysNthElement = (arr1, arr2, n) => [...arr1,...arr2].sort((a,b)=>a-b)[n]

console.log(twoArraysNthElement([1, 3, 4],[2, 6, 8],5))//8
console.log(twoArraysNthElement([1, 2, 3],[4, 5, 6],3))//4