// A number is lonely if it only appears in a list once. If a number appears in the list twice it is not lonely. Given a list of numbers where every number in the list appears twice except one number that appears only once. You need to find the lonely number.

let LonelyNumber = (arr)=> arr.filter(x=>arr.indexOf(x) === arr.lastIndexOf(x))[0]

let LonelyNumber = (arr)=> {
  let obj = {}
  for(let n of arr){
    obj[n]? obj[n]++: obj[n] = 1
  }
  for(let n of arr){
    if(obj[n] === 1) return n
  }
}

// xor
let LonelyNumber = (arr)=> {
  let n = 0
  for(let num of arr){
    n ^= num
  }
  return n
}


console.log(LonelyNumber([1, 1, 2]))//2
console.log(LonelyNumber([2, 0, 2, 1, 3, 4, 0, 4, 1]))//3
console.log(LonelyNumber([9, 5, 8, 7, 4, 9, 0, 5, 0, 6, 3, 2, 3, 1, 8, 4, 7, 6, 1]))//2
