// Given an array of integers, find the number of inversions it contains.

function countInversionsNaive(arr) {
  let i = 0
  let inversions = 0
  while(i< arr.length - 1){
    for(let el of arr.slice(i + 1)){
      if(arr[i] > el){
        inversions ++
      }
    }
    i ++
  }
  return inversions
}

console.log(countInversionsNaive([1, 3, 2, 0]))//4