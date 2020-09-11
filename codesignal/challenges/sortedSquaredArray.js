// You have a sorted array of integers. Write a function that returns a sorted array containing the squares of those integers.

let sortedSquaredArray = (array)=>array.map(x=>x**2).sort((a,b)=>a-b)

console.log(sortedSquaredArray([-6, -4, 1, 2, 3, 5]))//[1, 4, 9, 16, 25, 36]