// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

//   Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
//   -15 ≤ inputArray[i]≤ 15.

//   [output] integer

// The maximal absolute difference.

function arrayMaximalAdjacentDifference2(arr) {
  let difference = Math.abs(arr[0]-arr[1])
  for(let i=1;i<arr.length;i++){
    if(Math.abs(arr[i]-arr[i-1])>difference){
    difference = Math.abs(arr[i]-arr[i-1])
    }
  }
  return difference
}
function arrayMaximalAdjacentDifference(arr) {
  return arr.reduce((p,c,i,array)=>{
    if(Math.abs(c-array[i-1])>p){
      return Math.abs(c-array[i-1])
    }else{
      return p
    }
  }, Math.abs(arr[1] - arr[0]))
}

//------------------------------------------------------------------------------------
function arrayMaximalAdjacentDifference(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i])))
}



console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))//3