// Given an array of integers, find the product of its elements.

function arrayElementsProduct(inputArray) {
  return inputArray.reduce((prev,next)=>prev * next)
}

console.log(arrayElementsProduct([1, 3, 2, 10]))//60