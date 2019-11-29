// Given a decimal integer n, find an integer k ≥ 2 such that the representation of n in base k has the maximum possible number of zeros. If there are several answers, output the smallest one.

let maxZeros = (n) =>{
  let zeros = (str) => [...str].filter(x=>x==='0').length,
      count = 0,
      base
  for(let i=2;i<=36;i++){
    let temp = zeros(n.toString(i))
    if(temp > count){
      count = temp
      base = i
    }
  }
  return base
}

console.log(maxZeros(9))//2
console.log(maxZeros(7))//7
console.log(maxZeros(127))//5