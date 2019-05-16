// Pick-out the largest even number from an array of integers

function maximalEven(arr) {
  return arr.reduce((acc,v,i,array)=>{
    if(v % 2 === 0){
      if(acc % 2 != 0){
        return v
      }else if(v > acc){
        return v
      }else{
        return acc
      }
    }else{
      return acc
    }
  })
}

function maximalEven(arr) {
  let bigE = arr[0]
  
  for(let num of arr){
    if(num % 2 === 0){
      if(bigE % 2 != 0){
        bigE = num
      }else if(num > bigE){
        bigE = num
      }
    }
  }
  return bigE
}

console.log(maximalEven([4, 3, 6, 8, 2, 4]))//8