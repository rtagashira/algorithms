// Given an array of integers, count the odd numbers before the first (i.e. leftmost) occurrence of zero.

function oddNumbersBeforeZero(arr) {
  let oddNums = 0
  let zero = false
  
  for(let num of arr){
    if(zero === false){
        if(num === 0){
          zero = true
        }else if(num % 2 === 1){
          oddNums ++
        }
    }
  }
  return oddNums
}

function oddNumbersBeforeZero(arr){
  let zero = false
  return arr.reduce((acc,v,i,a)=>{
    if(zero === false){
      if(v === 0){
        zero = true
        return acc
      }else if(v % 2 === 1){
        return acc + 1
      }else{
        return acc
      }
    }else{
      return acc
    }
  },0)
}

console.log(oddNumbersBeforeZero([1, 2, 3, 0, 4, 5, 6, 0, 1]))//2