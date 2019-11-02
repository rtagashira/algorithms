// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

let alternatingSums = (a) =>{
  let sumEven = 0,
      sumOdd  = 0
  for(let i in a){
      if(i % 2 === 0){
          sumEven += a[i]
      }else{
          sumOdd += a[i]
      }
  }
  return [sumEven,sumOdd]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))//[180, 105]
console.log(alternatingSums([80]))//[80, 0]
console.log(alternatingSums([100, 50, 50, 100]))//[150, 150]
console.log(alternatingSums([100, 51, 50, 100]))//[150, 151]