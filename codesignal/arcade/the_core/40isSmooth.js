// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same 
// when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index 
// numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to 
// the middle. Given an array arr, determine if it is smooth or not.

function isSmooth(arr) {
  let even = arr.length%2 === 0
  if(arr[0]===arr[arr.length-1]){   //if first and last numbers are equal
    if(even === true){          //even number of elements
      let middle = arr[(arr.length/2)-1] + arr[(arr.length/2)]
      if(arr[0] === middle){
        return true
      }
    }else{                      //odd number of elements
      if(arr[0] === arr[Math.floor(arr.length/2)]){
        return true
      }
    }
  }
  return false
}

function isSmooth(arr) {
  const even = arr.length%2 === 0
  let middle
  even?middle = arr[(arr.length/2)-1] + arr[(arr.length/2)]: middle = arr[Math.floor(arr.length/2)]
  return arr[0] === middle && arr[0] === arr[arr.length-1]
}

console.log(isSmooth([7, 2, 2, 5, 10, 7]))//true
console.log(isSmooth([-5, -5, 10]))//false
console.log(isSmooth([9, 0, 15, 9]))//false