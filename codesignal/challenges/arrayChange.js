// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function arrayChange(arr) {
  let moves = 0

  for(let i=1;i<arr.length;i++){
    if(arr[i]<=arr[i-1]){
      moves += Math.abs(arr[i-1] - arr[i]) + 1
      arr[i] += Math.abs(arr[i-1] - arr[i]) + 1
    }
  }
  return moves
}

function arrayChange(arr) {
  let moves = 0

  for(let i in arr){
    if(arr[i]<=arr[i-1]){
      moves += Math.abs(arr[i-1] - arr[i]) + 1
      arr[i] += Math.abs(arr[i-1] - arr[i]) + 1
    }
  }
  return moves
}

function arrayChange(arr) {
  let moves = 0
  let temp = arr[0]

  for(let num of arr.slice(1)){
    if(num <= temp){
      moves += Math.abs(temp - num) + 1
      temp = num + Math.abs(temp - num) + 1
    }else{
      temp = num
    }
  }
  return moves
}

console.log(arrayChange([1,1,1]))//3
console.log(arrayChange([-1000, 0, -2, 0]))//5
console.log(arrayChange([2, 1, 10, 1]))//12
console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))//13