// Given an array of integers inputArray and an integer bound, find the smallest array element strictly greater than bound.

function arrayMinimumAboveBound(arr, bound) {
  return arr.reduce((acc,v)=>v>bound && v<acc?v:acc,Math.max(...arr))
}

function arrayMinimumAboveBound(arr, bound) {
  let final 
  for(let n of arr){
    n>bound && final === undefined? final = n:n>bound && n<final? final = n: null
  }
  return final
}

function arrayMinimumAboveBound(arr, bound) {
  return arr.reduce((acc,v)=>{
    if(v>bound && acc === null){
      return v
    }else if(v>bound && v<acc){
      return v
    }else{
      return acc
    }

  },null)
}

function arrayMinimumAboveBound(arr, bound) {
  let final 
  for(let n of arr){
    if(n>bound && final === undefined){
      final = n
    }else if(n>bound && n<final){
      final = n
    }
  }
  return final
}

console.log(arrayMinimumAboveBound([1, 3, 5, 4, 2, 6],3))//4
console.log(arrayMinimumAboveBound([1, 4, 10, 5, 2],1))//2
console.log(arrayMinimumAboveBound([0, -2, 5, 6, -9],5))//6