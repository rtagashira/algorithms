// Return a strictly increasing array of all even numbers between given left and right (both inclusive).

let onlyEvenNumbers = (left, right) =>{
  let arr = []
  for(let i=left;i<=right;i++){
    if(i % 2 === 0) arr.push(i)
  }
  return arr
}

console.log(onlyEvenNumbers(5, 10))//[6, 8, 10]
console.log(onlyEvenNumbers(11, 13))//[12]