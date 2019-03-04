// Given an integer size, return array of length size filled with 1s.

function createArray(size) {
  return new Array(size).fill(1)
}

function createArray(size) {
  return [...'1'.repeat(size)].map(x=>+x)
}

function createArray(size) {
  let arr = []
  while(arr.length<size){
    arr.push(1)
  }
  return arr
}

function createArray(size) {
  let arr = []
  for(let i=0;i<size;i++){
    arr.push(1)
  }
  return arr
}

console.log(createArray(4))//[1, 1, 1, 1]