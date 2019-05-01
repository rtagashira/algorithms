// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

function houseNumbersSum(arr) {
  let sum = 0
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i] === 0){
      sum = 0
    }else{
      sum += arr[i]
    }
  }
  return sum
}

function houseNumbersSum(arr) {
  return arr.reduceRight((acc,v,i,array)=>{
    if(v === 0){
      return 0
    }else{
      return acc + v
    }
  },0)
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))//11