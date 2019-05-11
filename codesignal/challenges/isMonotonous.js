// Given array of integers, check if it represents either a strictly increasing or a strictly decreasing sequence.

function isMonotonous(arr) {
  if(arr.length === 1) return true

  let dir
  if(arr[1] > arr[0]){
    dir = 'increase'
  }else if(arr[1] < arr[0]){
    dir = 'decrease'
  }else{
    return false
  }
  
  return arr.reduce((acc,v,i,array)=>{
    if(dir === 'increase'){
      if(v > array[i-1]){
        return true
      }else{
        return false
      }
    }else if(dir === 'decrease'){
      if(v < array[i-1]){
        return true
      }else{
        return false
      }
    }
  })
}

function isMonotonous(arr) {
  if(arr.length === 1) return true

  let dir
  arr[1] > arr[0]? dir = 'increase': arr[1] < arr[0]? dir = 'decrease': dir = null
  if(dir === null) return false
  
  for(let i in arr){
    if(i>0){
      if(!(arr[i] < arr[i-1]) && dir === 'decrease') return false
      if(!(arr[i] > arr[i-1]) && dir === 'increase') return false
    }
  }
  return true
}

console.log(isMonotonous([1, 4, 5, 7, 9]))//true
console.log(isMonotonous([0]))//true
console.log(isMonotonous([3,3]))//false