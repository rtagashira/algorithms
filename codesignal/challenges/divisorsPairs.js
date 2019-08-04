// Given array of integers, find the number of sorted pairs formed by its (different) elements such that the second element in the pair is divisible by the first one.

function divisorsPairs(arr) {
  let pairs = 0
  arr.sort((a,b)=>a-b)
  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
      if(j>i){
        if(arr[j] % arr[i] === 0) pairs++
      }
    }
  }
  return pairs
}

console.log(divisorsPairs([1,3,2]))//2
console.log(divisorsPairs([2,4,8]))//3
console.log(divisorsPairs([42]))//0