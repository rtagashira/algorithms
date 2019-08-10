// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


function adjacentElementsProduct(arr) {
  return arr.reduce((acc,v,i,a) => v*a[i+1] > acc? v*a[i+1]: acc, arr[0] * arr[1])
}

function adjacentElementsProduct(arr) {
  let max
  for(let i=1;i<arr.length;i++){
    let p = arr[i] * arr[i-1]
    if(!max){
      max = p
    }else if(p > max){
      max = p
    }
  }
  return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))//21
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]))//-12