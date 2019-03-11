// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same 
// when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index 
// numbers when counting from the beginning and from the end of the array differ by one.
// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those 
// elements with the value of middle. Return the resulting array as the answer.

function replaceMiddle(arr) {
  const even = arr.length % 2 === 0
  let middle
  const firstMidIndex = arr.length/2 - 1
  const secondMidIndex = arr.length/2
  if(even) middle = arr[firstMidIndex] + arr[secondMidIndex]
  return even? [...arr.slice(0,firstMidIndex), middle, ...arr.slice(secondMidIndex+1)]: arr
}
//----------------------------------------------------------------------------------------------
// function replaceMiddle(arr) {
//   if (arr.length%2===0){
//       arr.splice(arr.length/2-1,2,arr[arr.length/2-1] + arr[arr.length/2]);
//   }
//   return arr;
// }


console.log(replaceMiddle([7, 2, 2, 5, 10, 7]))//[7, 2, 7, 10, 7]
console.log(replaceMiddle([-5, -5, 10]))//[-5, -5, 10]