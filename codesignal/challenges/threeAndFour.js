// Return a sorted array of all non-negative numbers less than the given n which are divisible both by 3 and 4.

let threeAndFour = (n) =>{
  let arr = []
  for(let i=0;i<n;i++){
      if(i % 3 === 0 && i % 4 === 0){
          arr.push(i)
      }
  }
  return arr
}

console.log(threeAndFour(30))//[0, 12, 24]
console.log(threeAndFour(3))//[0]