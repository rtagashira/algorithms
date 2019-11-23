// Implement a function that can multiply two fractions and produce a reduced fraction.


let fractionMultiplication = (a, b) =>{
  let arr = [a[0]*b[0],a[1]*b[1]]
  for(let i=Math.min(...arr);i>=2;i--){
      if(arr[0] % i === 0 && arr[1] % i === 0){
          return arr.map(x=>x/i)
      }
  }
  return arr
}

console.log(fractionMultiplication([3,2],[2,5]))//[3,5]
console.log(fractionMultiplication([2,3],[3,5]))//[2,5]