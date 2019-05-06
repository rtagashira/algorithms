// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

function replaceMiddle(arr) {
  let even = arr.length % 2 === 0
  if(even){
    let firstMid = arr.length/2 - 1
    arr.splice(firstMid, 2, arr[firstMid] + arr[firstMid + 1])
  }
  return arr
}

function replaceMiddle(arr) {
  let even = arr.length % 2 === 0
  if(even){
    let firstMid = arr.length/2 - 1
    return [...arr.slice(0,firstMid), arr[firstMid] + arr[firstMid + 1], ...arr.slice(firstMid + 2)]
  }
  return arr
}

function replaceMiddle(arr) {
  let even = arr.length % 2 === 0
  if(even){
    let firstMidIndex = arr.length/2 - 1
    let middle = arr[firstMidIndex] + arr[firstMidIndex + 1]
    return arr.reduce((acc,v,i,array)=>{
      if(i === firstMidIndex){
        return [...acc,middle]
      }else if(i === firstMidIndex + 1){
        return acc
      }else{
        return [...acc,v]
      }
    }, [])
  }
  return arr
}

console.log(replaceMiddle([7, 2, 2, 5, 10, 7]))//[7, 2, 7, 10, 7]
console.log(replaceMiddle([-5, -5, 10]))//[-5, -5, 10]