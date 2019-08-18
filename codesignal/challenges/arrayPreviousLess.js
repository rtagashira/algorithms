// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

function arrayPreviousLess(a) {
  let newA = []
  for(let i=0;i<a.length;i++){
    let num = a.slice(0,i).reverse().find(x=>x<a[i])
    num === undefined? newA.push(-1): newA.push(num)
  }
  return newA
}

function arrayPreviousLess(a) {
  let newA = []
  for(let i=0;i<a.length;i++){
    let num
    for(let j=0;j<i;j++){
      if(a[j]<a[i]) num = a[j]
    }
    num === undefined? newA.push(-1): newA.push(num)
  }
  return newA
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]))//[-1, 3, -1, 2, 4]
console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]))//[-1, -1, -1, 1, 3, 4, 4, 1]