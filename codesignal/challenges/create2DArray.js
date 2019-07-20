// Given array of integers lengths, create an array of arrays output such that output[i] consists of lengths[i] elements and output[i][j] = j.

function create2DArray(arr) {
  let f = (n)=>{
    let a = []
        for(let i=0;i<n;i++){
            a.push(i)
        }
    return a
  }

  for(let i in arr){
    arr[i] = f(arr[i])
  }
  
  return arr
}

console.log(create2DArray([1, 2, 0, 4]))//[[0], [0, 1], [], [0, 1, 2, 3]]
console.log(create2DArray([0, 0, 0]))//[[], [], []]
console.log(create2DArray([]))//[]