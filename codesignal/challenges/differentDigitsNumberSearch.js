// Given an array of integers, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.


function differentDigitsNumberSearch(arr) {
  for(let i=0;i<arr.length;i++){
    const str = arr[i].toString()
    const obj = {}
    let repeat = false
    for(let j=0;j<str.length;j++){
      obj[str[j]]? repeat = true: obj[str[j]] = 1
      if(j === str.length - 1 && !repeat) return arr[i]
    }
  }
  return -1
}

console.log(differentDigitsNumberSearch([22, 111, 101, 124, 33, 30]))//124
console.log(differentDigitsNumberSearch([1111, 404]))//-1