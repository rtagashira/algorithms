// Given a sequence determine if it's an arithmetic progression or not.
// A sequence is called an arithmetic progression if its elements are evenly spaced, i.e. the difference between any two consecutive elements is the same.

function isArithmeticProgression(arr) {
  let diff

  for(let i in arr){
    if(i>0){
      if(diff === undefined){
        diff = arr[i] - arr[i-1]
      }else{
        if(arr[i] - arr[i-1] != diff){
          return false
        }
      }
    }
  }
  return true
}

function isArithmeticProgression(arr) {
  // setting diff to the difference between the first two elements and looping through the remaining array
  let diff = arr[1] - arr[0]

  for(let i=1;i<arr.slice(1).length;i++){
    if(arr.slice(1)[i] - arr.slice(1)[i-1] != diff){
      return false
    }
  }

  return true
}


console.log(isArithmeticProgression([1, 4, 7]))//true
console.log(isArithmeticProgression([2, 4, 7]))//false