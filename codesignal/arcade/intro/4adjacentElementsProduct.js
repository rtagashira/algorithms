// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//   Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct1(arr) {
  let firstNum = arr[0]
  let product = arr[0]* arr[1]
  for (const num of arr.slice(1)) {
    if(firstNum * num > product){
      product = firstNum * num
    }
    firstNum = num
  }
  return product
}

function adjacentElementsProduct2(arr) {
  return arr.reduce((acc,cur,index,array)=>{
    if(cur*array[index-1]>acc){
      return cur*array[index-1]
    } else{
      return acc
    }
  },arr[0]*arr[1])
}

function adjacentElementsProduct3(arr) {
  let product = arr[0] * arr[1]
  for(let i=0;i<arr.length-1;i++){
    if(arr[i] * arr[i+1]> product){
      product = arr[i] * arr[i + 1]
    }
  }
  return product
}



function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>x*arr[i]))
}



console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]))
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]))
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))