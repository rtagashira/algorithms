// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(arr) {
  let maxDiff = 0
  for(let i in arr){
    if(i != 0){
      if(Math.abs(arr[i] - arr[i-1]) > maxDiff){
        maxDiff = Math.abs(arr[i] - arr[i-1])
      }
    }
  }
  return maxDiff
}

function arrayMaximalAdjacentDifference(arr) {
  return arr.reduce((acc,v,i,a)=>{
    if(i > 0){
      if(Math.abs(a[i]-a[i-1]) > acc){
        return Math.abs(a[i]-a[i-1])
      }else{
        return acc
      }
    }else{
      return acc
    }
  },Math.abs(arr[0]- arr[1]))
}


console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))//3