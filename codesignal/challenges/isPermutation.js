// Given a certain array, find out if it's a permutation of numbers from 1 to a given integer.

function isPermutation(n, arr) {
  for(let i=1;i<=n;i++){
    if(arr.indexOf(i) < 0){
      return false
    }
  }
  return true
}

console.log(isPermutation(4,[1,3,2,4]))//true
console.log(isPermutation(3,[2,3,2]))//false